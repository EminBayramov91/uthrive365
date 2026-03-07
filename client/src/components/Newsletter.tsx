import { useState } from "react";
import { useSubscribe } from "@/hooks/use-subscribe";
import { Send, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const subscribe = useSubscribe();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribe.mutate(email);
    }
  };

  return (
    <div className="bg-[#3F5F56] rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden my-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8A58C]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          Take the Free PEM Wheel Assessment
        </h2>
        <p className="text-lg text-white/80 mb-3 max-w-2xl mx-auto">
          Get a quick, practical snapshot of where your life is right now—what matters most, where your vitality is going, and which areas may need attention, support, or recalibration.
        </p>
        <p className="text-base text-white/70 mb-8 max-w-xl mx-auto">
          Enter your email to access the PEM Wheel and get started.
        </p>

        {subscribe.isSuccess ? (
          <div className="flex items-center justify-center gap-3 text-accent font-medium text-lg bg-accent/10 py-4 px-6 rounded-2xl w-fit mx-auto border border-accent/20">
            <CheckCircle className="w-6 h-6" />
            <span>Check your email for the PEM Wheel assessment.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={subscribe.isPending}
              className="px-8 py-4 bg-[#B8A58C] text-white font-bold rounded-xl hover:bg-[#A99379] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
            >
              {subscribe.isPending ? "Accessing..." : "Get the Free PEM Wheel"}
              {!subscribe.isPending && <Send className="w-4 h-4" />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
