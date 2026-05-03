import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

const subscribeRequestSchema = z.object({
  email: z.string().trim().email().max(254),
  source: z.string().trim().max(100).optional(),
});

const formspreeResponseSchema = z.object({
  ok: z.boolean().optional(),
  errors: z
    .array(
      z.object({
        message: z.string().optional(),
        code: z.string().optional(),
        field: z.string().optional(),
      }),
    )
    .optional(),
});

const contactRequestSchema = api.contact.request;

const formspreeContactEndpoint =
  process.env.FORMSPREE_CONTACT_ENDPOINT || "https://formspree.io/f/xrejbqrk";
const formspreeSubscribeEndpoint =
  process.env.FORMSPREE_SUBSCRIBE_ENDPOINT || "https://formspree.io/f/xojrvdra";

function toSingleLine(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

async function sendFormspreeSubmission(
  endpoint: string,
  payload: Record<string, string>,
) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let responseBody: unknown = null;
  try {
    responseBody = await response.json();
  } catch {
    responseBody = null;
  }

  if (!response.ok) {
    const result = formspreeResponseSchema.safeParse(responseBody);
    const errors = result.success
      ? result.data.errors
          ?.map((error) => error.message)
          .filter((message): message is string => Boolean(message))
      : [];
    const details = errors?.length ? `: ${errors.join(" ")}` : "";
    throw new Error(`Formspree delivery failed${details}`);
  }
}

async function sendSubscriberNotification(email: string) {
  await sendFormspreeSubmission(formspreeSubscribeEndpoint, {
    email,
    source: "Home page PEM capture",
    subject: "New PEM Wheel email capture",
  });
}

async function sendContactMessage(data: z.infer<typeof contactRequestSchema>) {
  await sendFormspreeSubmission(formspreeContactEndpoint, {
    name: data.name,
    email: data.email,
    inquiryType: data.inquiryType,
    message: data.message,
    subject: `New U Thrive 365 contact form message: ${toSingleLine(
      data.inquiryType,
    )}`,
  });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.path, async (req, res, next) => {
    try {
      const data = contactRequestSchema.parse(req.body);

      await sendContactMessage(data);

      res.json({ ok: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Please complete all contact form fields." });
      }

      if (error instanceof Error && error.message.startsWith("Formspree")) {
        return res.status(502).json({
          message: "Message could not be sent. Please try again.",
        });
      }

      next(error);
    }
  });

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

      if (error instanceof Error && error.message.startsWith("Formspree")) {
        return res.status(502).json({
          message: "Email could not be submitted. Please try again.",
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
