import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

const subscribeRequestSchema = z.object({
  email: z.string().trim().email().max(254),
  source: z.string().trim().max(100).optional(),
});

const resendEmailResponseSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  message: z.string().optional(),
});

async function sendSubscriberNotification(email: string) {
  if (process.env.EMAIL_DELIVERY_DISABLED === "true") {
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO || "hello@uthrive365.com";

  if (!apiKey || !from) {
    const missing = [
      !apiKey ? "RESEND_API_KEY" : null,
      !from ? "EMAIL_FROM" : null,
    ].filter(Boolean);

    throw new Error(`Missing email configuration: ${missing.join(", ")}`);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "New PEM Wheel email capture",
      html: `
        <h2>New PEM Wheel email capture</h2>
        <p>A visitor requested access to the PEM Wheel assessment.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> Home page PEM capture</p>
      `,
      text: [
        "New PEM Wheel email capture",
        "",
        "A visitor requested access to the PEM Wheel assessment.",
        `Email: ${email}`,
        "Source: Home page PEM capture",
      ].join("\n"),
    }),
  });

  let responseBody: unknown = null;
  try {
    responseBody = await response.json();
  } catch {
    responseBody = null;
  }

  const result = resendEmailResponseSchema.safeParse(responseBody);
  if (!response.ok) {
    const message = result.success
      ? result.data.message || result.data.name || "Resend email delivery failed"
      : "Resend email delivery failed";
    throw new Error(message);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.subscribe.path, async (req, res, next) => {
    try {
      const data = subscribeRequestSchema.parse(req.body);
      const email = data.email.toLowerCase();

      await storage.createSubscriber({
        email,
        source: data.source || "home-pem-capture",
      });

      await sendSubscriberNotification(email);

      res.json({ ok: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Please enter a valid email address." });
      }

      if (
        error instanceof Error &&
        error.message.startsWith("Missing email configuration")
      ) {
        return res.status(503).json({
          message: "Email delivery is not configured yet.",
        });
      }

      next(error);
    }
  });
  
  app.get(api.spins.random.path, async (req, res) => {
    const spin = await storage.getRandomSpin();
    if (!spin) {
      return res.status(404).json({ message: "No spins available" });
    }
    res.json(spin);
  });

  app.get(api.spins.list.path, async (req, res) => {
    const spins = await storage.getSpins();
    res.json(spins);
  });

  // Seed database
  const existingSpins = await storage.getSpins();
  if (existingSpins.length === 0) {
    const seedSpins = [
      {
        word: "Ground",
        meaning: "Reconnect to the present moment.",
        action: "Take 3 deep breaths, feeling your feet on the floor.",
        question: "Where am I holding tension right now?"
      },
      {
        word: "Clear",
        meaning: "Remove mental clutter.",
        action: "Write down the top 3 things on your mind and put the paper away.",
        question: "What can I let go of today?"
      },
      {
        word: "Shift",
        meaning: "Change your physical state to change your mental state.",
        action: "Stand up, stretch your arms wide, and shake out your hands.",
        question: "What small movement can change my energy?"
      },
      {
        word: "Focus",
        meaning: "Direct attention to what matters.",
        action: "Pick one task. Close all tabs not related to it. Work for 15 minutes.",
        question: "What is the ONE thing I need to do right now?"
      },
      {
        word: "Pause",
        meaning: "Stop the momentum of reacting.",
        action: "Close your eyes and count backward from 10 before making your next decision.",
        question: "Am I reacting or responding?"
      }
    ];

    for (const spin of seedSpins) {
      await storage.createSpin(spin);
    }
  }

  return httpServer;
}
