import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const spins = pgTable("spins", {
  id: serial("id").primaryKey(),
  word: text("word").notNull(),
  meaning: text("meaning").notNull(),
  action: text("action").notNull(),
  question: text("question").notNull(),
});

export const insertSpinSchema = createInsertSchema(spins).omit({ id: true });

export type InsertSpin = z.infer<typeof insertSpinSchema>;
export type Spin = typeof spins.$inferSelect;

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  source: text("source").notNull().default("home-pem-capture"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).omit({
  id: true,
  createdAt: true,
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;
