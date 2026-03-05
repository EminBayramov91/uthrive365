import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
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
