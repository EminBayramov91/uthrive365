import {
  subscribers,
  spins,
  type InsertSubscriber,
  type InsertSpin,
  type Spin,
  type Subscriber,
} from "@shared/schema";
import { db } from "./db";
import { eq, sql } from "drizzle-orm";

export interface IStorage {
  getRandomSpin(): Promise<Spin | undefined>;
  getSpins(): Promise<Spin[]>;
  createSpin(spin: InsertSpin): Promise<Spin>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
}

export class DatabaseStorage implements IStorage {
  async getRandomSpin(): Promise<Spin | undefined> {
    const rows = await db.select().from(spins).orderBy(sql`RANDOM()`).limit(1);
    return rows[0];
  }

  async getSpins(): Promise<Spin[]> {
    return await db.select().from(spins);
  }

  async createSpin(spin: InsertSpin): Promise<Spin> {
    const [newSpin] = await db.insert(spins).values(spin).returning();
    return newSpin;
  }

  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    const normalizedSubscriber = {
      ...subscriber,
      email: subscriber.email.trim().toLowerCase(),
    };

    const [newSubscriber] = await db
      .insert(subscribers)
      .values(normalizedSubscriber)
      .onConflictDoNothing()
      .returning();

    if (newSubscriber) {
      return newSubscriber;
    }

    const [existingSubscriber] = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, normalizedSubscriber.email))
      .limit(1);

    if (!existingSubscriber) {
      throw new Error("Unable to create or find subscriber");
    }

    return existingSubscriber;
  }
}

export const storage = new DatabaseStorage();
