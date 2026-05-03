import { z } from "zod";
import { spins } from "./schema";

export const api = {
  contact: {
    method: "POST" as const,
    path: "/api/contact" as const,
    request: z.object({
      name: z.string().trim().min(1).max(100),
      email: z.string().trim().email().max(254),
      inquiryType: z.string().trim().min(1).max(100),
      message: z.string().trim().min(1).max(3000),
    }),
    responses: {
      200: z.object({ ok: z.literal(true) }),
      400: z.object({ message: z.string() }),
      502: z.object({ message: z.string() }),
      500: z.object({ message: z.string() }),
      503: z.object({ message: z.string() }),
    },
  },
  subscribe: {
    method: "POST" as const,
    path: "/api/subscribe" as const,
    request: z.object({
      email: z.string().trim().email().max(254),
      source: z.string().trim().max(100).optional(),
    }),
    responses: {
      200: z.object({ ok: z.literal(true) }),
      400: z.object({ message: z.string() }),
      502: z.object({ message: z.string() }),
      500: z.object({ message: z.string() }),
      503: z.object({ message: z.string() }),
    },
  },
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
