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

        {subscribe.isSuccess ? (
          <div className="flex items-center justify-center gap-3 text-accent font-medium text-lg bg-accent/10 py-4 px-6 rounded-2xl w-fit mx-auto border border-accent/20">
            <CheckCircle className="w-6 h-6" />
            <span>Check your email for the PEM Wheel assessment.</span>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
