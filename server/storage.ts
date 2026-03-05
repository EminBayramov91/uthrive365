import { spins, type Spin, type InsertSpin } from "@shared/schema";
import { db } from "./db";
import { eq, sql } from "drizzle-orm";

export interface IStorage {
  getRandomSpin(): Promise<Spin | undefined>;
  getSpins(): Promise<Spin[]>;
  createSpin(spin: InsertSpin): Promise<Spin>;
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
}

export const storage = new DatabaseStorage();
