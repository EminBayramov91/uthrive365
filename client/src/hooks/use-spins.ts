import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useRandomSpin(enabled = false) {
  return useQuery({
    queryKey: [api.spins.random.path],
    queryFn: async () => {
      const res = await fetch(api.spins.random.path);
      if (!res.ok) {
        throw new Error("Failed to fetch spin. Please try again.");
      }
      const data = await res.json();
      return api.spins.random.responses[200].parse(data);
    },
    enabled,
    staleTime: 0, // Ensure we get a fresh random one every time
    gcTime: 0,
  });
}

export function useSpinsList() {
  return useQuery({
    queryKey: [api.spins.list.path],
    queryFn: async () => {
      const res = await fetch(api.spins.list.path);
      if (!res.ok) throw new Error("Failed to fetch spins");
      const data = await res.json();
      return api.spins.list.responses[200].parse(data);
    },
  });
}
