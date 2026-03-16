import MainLayout from "@/components/layout/MainLayout";
import Newsletter from "@/components/Newsletter";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Compass, Sparkles, RefreshCcw, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/images/hero-ut365.jpg')`
        }}
      >
        {/* Adjusted Background Overlay */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: 'linear-gradient(180deg, rgba(31,42,37,0.35) 0%, rgba(31,42,37,0.20) 40%, rgba(31,42,37,0.45) 100%)' 
          }}
        />

        {/* Vignette Overlay */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: 'radial-gradient(circle at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.30) 100%)' 
          }}
        />
        
        {/* Subtle Noise/Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-1"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="text-5xl md:text-7xl font-display font-bold text-[#EDE8DE] mb-8 leading-tight text-balance max-w-[900px] mx-auto"
              style={{ textShadow: '0 2px 18px rgba(0,0,0,0.35)' }}
            >
              Recalibrate Your <br className="hidden md:block" />
              <span className="text-[#EDE8DE]">Personal Operating System.</span>
            </h1>
            <p 
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-balance opacity-100 font-semibold"
              style={{ 
                color: '#E6E0D6',
                textShadow: '0 2px 14px rgba(0,0,0,0.35)',
                WebkitTextFillColor: '#E6E0D6'
              }}
            >
              Whether you want a small shift or a life-changing transformation, it starts by seeing clearly and moving forward intentionally.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button
                onClick={() => {
                  const element = document.getElementById('pem-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full sm:w-auto px-10 py-4 rounded-xl font-semibold bg-[#3F5E54] text-[#F4F1EA] shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-[6px] hover:bg-[#3F5E54]/90 hover:text-[#F4F1EA] hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 opacity-100 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
              >
                Start with the PEM Wheel (Free)
                <ArrowRight className="w-5 h-5 text-[#F4F1EA]" />
              </button>
              <Link
                href="/spin"
                role="button"
                className="w-full sm:w-auto px-10 py-4 rounded-xl font-semibold bg-[#B9A68C] text-[#1F2A25] shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-[6px] hover:bg-[#A99379] hover:text-[#1F2A25] hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 opacity-100"
              >
                <RefreshCcw className="w-5 h-5 text-[#1F2A25]" />
                Daily Recalibration (Spin)
              </Link>
            </div>
            
            <p 
              className="mt-6 italic"
              style={{ 
                color: '#E6E0D6',
                fontSize: '1.05rem',
                fontWeight: 500,
                opacity: 0.9,
                letterSpacing: '0.02em'
              }}
            >
              "Small shifts create momentum. Momentum creates transformation."
            </p>
            
            <p 
              className="mt-4"
              style={{ 
                color: '#E6E0D6',
                fontSize: '1rem',
                fontWeight: 400,
                opacity: 0.85,
                letterSpacing: '0.01em',
                maxWidth: '600px',
                margin: '1rem auto 0'
              }}
            >
              U Thrive 365 helps people move from autopilot into a healthier, more energized, more intentional life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where's your SOP section */}
      <section className="py-24 bg-gradient-to-b from-[#E6F0EA] to-[#DDE8E2] border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary mb-6">
              A Practical Path to Recalibration
            </h2>
              <p className="text-lg text-foreground leading-relaxed">
                U-Thrive 365 is a practical, holistic platform for people who want to feel better, live with more intention, and create meaningful change. Through guided tools, structured reflection, and small daily shifts, you can build clarity, restore energy, and begin transforming your life from where you are now.
              </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line behind cards */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#B8A58C]/20 to-transparent -translate-y-1/2 z-0" />

            <div className="glass-card hover-elevate p-8 rounded-3xl relative z-10 bg-background">
              <div className="w-14 h-14 rounded-2xl bg-[#B8A58C]/10 flex items-center justify-center mb-6 shadow-inner">
                <Compass className="w-7 h-7 text-[#B8A58C]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Discover</h3>
              <p className="text-foreground leading-relaxed">
                Identify the patterns, pressures, and energy drains shaping your current life.
              </p>
            </div>

            <div className="glass-card hover-elevate p-8 rounded-3xl relative z-10 bg-background">
              <div className="w-14 h-14 rounded-2xl bg-[#B8A58C]/10 flex items-center justify-center mb-6 shadow-inner">
                <RefreshCcw className="w-7 h-7 text-[#B8A58C]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Support</h3>
              <p className="text-foreground leading-relaxed">
                Use practical tools and restorative practices to build clarity, steadiness, and momentum.
              </p>
            </div>

            <div className="glass-card hover-elevate p-8 rounded-3xl relative z-10 bg-background">
              <div className="w-14 h-14 rounded-2xl bg-[#3F5F56]/10 flex items-center justify-center mb-6 shadow-inner">
                <Sparkles className="w-7 h-7 text-[#B8A58C]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Recalibrate</h3>
              <p className="text-foreground leading-relaxed">
                Make small, intentional changes that help you feel better now and build a stronger future over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A More Aligned Life Section */}
      <section className="py-20 px-4 bg-[#DDE8E2]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-10">
            Transformation Starts with Awareness — and Grows Through Action
          </h2>
          
          <p className="text-lg text-foreground leading-relaxed mb-8">
            Most people do not begin with a clear vision for a different life. They begin by realizing something no longer fits. A pattern. A habit. A level of stress. A way of living that has become too small, too draining, or too disconnected from who they want to be.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed">
            U-Thrive 365 helps you start there. With awareness. With small shifts. With practical tools that help you build momentum, strengthen self-trust, and move toward a healthier, more intentional, more fulfilling life — whether you want to improve one area or create a much larger transformation.
          </p>
        </div>
      </section>

      {/* Foundational Resources Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#E6F0EA] to-[#DDE8E2]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-bold text-primary">Foundational Resources</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Start with the core tools and ideas that help you understand where you are, make small meaningful shifts, and begin building momentum for real change.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Why Change Is Harder Than It Looks",
                  "The PEM: A Simple Way to See Your Patterns",
                  "How to Start Mapping Your Life More Clearly"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-foreground leading-relaxed">
                    <div className="w-2 h-2 rounded-full bg-[#B8A58C]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/start" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors gap-2">
                  Explore the Resources <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="flex-1 relative">
              {/* Abstract graphic representing modules */}
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-[#B8A58C] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-tr from-[#3F5F56] to-[#B8A58C]/80 rounded-3xl rotate-12 opacity-80 backdrop-blur-3xl shadow-2xl"></div>
                <div className="absolute inset-12 bg-white rounded-2xl -rotate-6 shadow-xl flex items-center justify-center p-8 border border-[#E7DED2]">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-[#B8A58C] mx-auto mb-4" />
                    <h3 className="font-display font-bold text-xl mb-2 text-primary">Module 01: The Reset</h3>
                    <p className="text-sm text-muted-foreground">Unlock your potential</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </MainLayout>
  );
}
