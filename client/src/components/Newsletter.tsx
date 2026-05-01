import { useState } from "react";
import { useSubscribe } from "@/hooks/use-subscribe";
import { Send, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const subscribe = useSubscribe();
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribe.mutate(email, {
        onSuccess: () => {
          setEmail("");
          setLocation("/pem");
        },
      });
    }
  };

  return (
    <div id="pem-section" className="bg-[#3F5F56] rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden my-20" style={{ scrollMarginTop: '80px' }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8A58C]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <h2 
          className="text-3xl md:text-5xl font-display font-bold mb-4"
          style={{ color: '#EDE8DE' }}
        >
          Take the Free PEM Wheel Assessment
        </h2>
        <p 
          className="text-lg mb-3 max-w-2xl mx-auto"
          style={{ color: '#E6E0D6' }}
        >
          Your energy is telling a story right now. The PEM Wheel helps you read it — where it's going, what's draining it, and where to begin reclaiming it.
        </p>
        <p 
          className="text-base mb-8 max-w-xl mx-auto"
          style={{ color: '#E6E0D6', opacity: 0.95 }}
        >
          Enter your email to access your free PEM Wheel and take the first honest look.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-8 py-4 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base"
            style={{ color: '#EDE8DE' }}
          />
          <button
            type="submit"
            disabled={subscribe.isPending}
            className="px-8 py-4 bg-[#B8A58C] text-white font-bold rounded-xl hover:bg-[#A99379] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
          >
            {subscribe.isPending ? "Accessing..." : "PEM Assessment"}
            {!subscribe.isPending && <Send className="w-4 h-4" />}
          </button>
        </form>

        {subscribe.isError && (
          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-[#F4F1EA]">
            <AlertCircle className="h-4 w-4" />
            <span>{subscribe.error.message}</span>
          </div>
        )}
      </div>
    </div>
  );
}
