import { z } from "zod";
import { spins } from "./schema";

export const api = {
  spins: {
    random: {
      method: "GET" as const,
      path: "/api/spins/random" as const,
      responses: {
        200: z.custom<typeof spins.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
    list: {
      method: "GET" as const,
      path: "/api/spins" as const,
      responses: {
        200: z.array(z.custom<typeof spins.$inferSelect>()),
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
