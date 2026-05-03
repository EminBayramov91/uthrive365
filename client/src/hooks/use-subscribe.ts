import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useSubscribe() {
  return useMutation({
    mutationFn: async (email: string) => {
      const res = await fetch(api.subscribe.path, {
        method: api.subscribe.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "home-pem-capture" }),
      });
      
      if (!res.ok) {
        const error = await res.json().catch(() => null);
        throw new Error(error?.message || "Failed to submit email");
      }

      return { ok: true as const };
    },
  });
}
