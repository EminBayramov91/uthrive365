import MainLayout from "@/components/layout/MainLayout";
import Newsletter from "@/components/Newsletter";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Compass, Sparkles, RefreshCcw, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        {/* Abstract organic shapes for aesthetic background */}
        <div className="absolute top-20 right-[10%] w-96 h-96 bg-secondary/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 left-[10%] w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary text-primary font-medium text-sm mb-6 border border-border">
              The Path to Sustainable Flow
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-8 leading-tight text-balance">
              Recalibrate Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Personal Operating System.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Reduce energy leaks, restore flow, and thrive 365—one small shift at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/start"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start with the PEM Wheel (Free)
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/spin"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-background border-2 border-primary/10 text-primary shadow-sm hover:border-primary/30 hover:bg-muted/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RefreshCcw className="w-5 h-5" />
                Daily Recalibration (Spin)
              </Link>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground font-medium italic">
              "One small shift today. One giant leap in how you live."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where's your SOP section */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary mb-6">
              Where's your SOP for <span className="italic text-accent">you</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Companies spend millions developing Standard Operating Procedures. But the most complex system you'll ever manage is yourself. It's time to map, regulate, and redesign how you function.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line behind cards */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0" />

            <div className="glass-card hover-elevate p-8 rounded-3xl relative z-10 bg-background">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-inner">
                <Compass className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">1. Map</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover your baseline. Identify the friction points and energy leaks in your daily routine using the PEM Assessment Wheel.
              </p>
            </div>

            <div className="glass-card hover-elevate p-8 rounded-3xl relative z-10 bg-background">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 shadow-inner">
                <RefreshCcw className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">2. Regulate</h3>
              <p className="text-muted-foreground leading-relaxed">
                Establish immediate equilibrium. Learn somatic techniques and micro-habits to quickly return to a state of flow and calm.
              </p>
            </div>

            <div className="glass-card hover-elevate p-8 rounded-3xl relative z-10 bg-background">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-inner">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">3. Redesign</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build the sustainable architecture. Create a custom personal operating system that supports your unique neurobiology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Modules Teaser */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-bold text-primary">Free Micro-Modules</h2>
              <p className="text-lg text-muted-foreground">
                Bite-sized, actionable frameworks designed to be consumed in 5 minutes and implemented immediately. No fluff, just leverage.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "The 90-Second Nervous System Reset",
                  "Designing Your Shutdown Sequence",
                  "Energy Auditing for High Performers"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-2 h-2 rounded-full bg-accent" />
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
                <div className="absolute inset-0 bg-secondary rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-tr from-primary to-accent/80 rounded-3xl rotate-12 opacity-80 backdrop-blur-3xl shadow-2xl"></div>
                <div className="absolute inset-12 bg-background rounded-2xl -rotate-6 shadow-xl flex items-center justify-center p-8 border border-border">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="font-display font-bold text-xl mb-2">Module 01: The Reset</h3>
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
