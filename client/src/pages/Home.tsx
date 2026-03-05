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
        
        {/* Subtle Noise/Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-1"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="text-5xl md:text-8xl font-display font-bold text-[#EDE8DE] mb-8 leading-tight text-balance"
              style={{ textShadow: '0 2px 18px rgba(0,0,0,0.35)' }}
            >
              Recalibrate Your <br className="hidden md:block" />
              <span className="text-[#EDE8DE]">Personal Operating System.</span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-[#E6E0D6] mb-12 max-w-3xl mx-auto leading-relaxed text-balance"
              style={{ textShadow: '0 2px 14px rgba(0,0,0,0.35)' }}
            >
              Reduce energy leaks, restore flow, and thrive 365—one small shift at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="/start"
                role="button"
                className="w-full sm:w-auto px-10 py-4 rounded-xl font-semibold bg-[#3F5E54] text-[#F4F1EA] shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-[6px] hover:bg-[#3F5E54]/90 hover:text-[#F4F1EA] hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 opacity-100"
              >
                Start with the PEM Wheel (Free)
                <ArrowRight className="w-5 h-5 text-[#F4F1EA]" />
              </Link>
              <Link
                href="/spin"
                role="button"
                className="w-full sm:w-auto px-10 py-4 rounded-xl font-semibold bg-[#B9A68C] text-[#1F2A25] shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-[6px] hover:bg-[#A99379] hover:text-[#1F2A25] hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 opacity-100"
              >
                <RefreshCcw className="w-5 h-5 text-[#1F2A25]" />
                Daily Recalibration (Spin)
              </Link>
            </div>
            
            <p className="mt-12 text-sm text-[#EDE8DE]/70 font-medium italic">
              "One small shift today. One giant leap in how you live."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where's your SOP section */}
      <section className="py-24 bg-gradient-to-b from-[#E6F0EA] to-[#DDE8E2] border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary mb-6">
              Where's your SOP for <span className="italic font-semibold">you</span>?
            </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Companies spend millions developing Standard Operating Procedures. But the most complex system you'll ever manage is yourself. It's time to map, regulate, and redesign how you function.
              </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line behind cards */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#B8A58C]/20 to-transparent -translate-y-1/2 z-0" />

            <div className="glass-card hover-elevate p-8 rounded-3xl relative z-10 bg-background">
              <div className="w-14 h-14 rounded-2xl bg-[#B8A58C]/10 flex items-center justify-center mb-6 shadow-inner">
                <Compass className="w-7 h-7 text-[#B8A58C]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">1. Map</h3>
              <p className="text-foreground leading-relaxed">
                Discover your baseline. Identify the friction points and energy leaks in your daily routine using the PEM Assessment Wheel.
              </p>
            </div>

            <div className="glass-card hover-elevate p-8 rounded-3xl relative z-10 bg-background">
              <div className="w-14 h-14 rounded-2xl bg-[#B8A58C]/10 flex items-center justify-center mb-6 shadow-inner">
                <RefreshCcw className="w-7 h-7 text-[#B8A58C]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">2. Regulate</h3>
              <p className="text-foreground leading-relaxed">
                Establish immediate equilibrium. Learn somatic techniques and micro-habits to quickly return to a state of flow and calm.
              </p>
            </div>

            <div className="glass-card hover-elevate p-8 rounded-3xl relative z-10 bg-background">
              <div className="w-14 h-14 rounded-2xl bg-[#3F5F56]/10 flex items-center justify-center mb-6 shadow-inner">
                <Sparkles className="w-7 h-7 text-[#B8A58C]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">3. Redesign</h3>
              <p className="text-foreground leading-relaxed">
                Build the sustainable architecture. Create a custom personal operating system that supports your unique neurobiology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Modules Teaser */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#E6F0EA] to-[#DDE8E2]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-bold text-primary">Free Micro-Modules</h2>
              <p className="text-lg text-foreground">
                Bite-sized, actionable frameworks designed to be consumed in 5 minutes and implemented immediately. No fluff, just leverage.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "The 90-Second Nervous System Reset",
                  "Designing Your Shutdown Sequence",
                  "Energy Auditing for High Performers"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#B8A58C]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/start" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors gap-2">
                  Access the library <ArrowRight className="w-4 h-4" />
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
