import MainLayout from "@/components/layout/MainLayout";
import Newsletter from "@/components/Newsletter";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Compass, Sparkles, RefreshCcw, ArrowRight } from "lucide-react";
import lisaPhoto from "@assets/OoyIfIo2E788hVgX_1775047543366.png";

// Daily rotating quotes
const dailyQuotes = [
  "Do not spend your life becoming excellent at a path you never meant to walk.",
  "Some lives are built by default. Better lives are built by decision.",
  "If the life you built no longer fits, that is not failure. That is information.",
  "You are allowed to outgrow the life that once made sense.",
  "There comes a moment when staying the same costs more than change.",
  "Not every stable life is a satisfying one.",
  "The next chapter is not something you find. It is something you write.",
  "Your life is already telling a story. The question is whether it still sounds like you.",
  "You do not need a new life overnight. You need a truer one over time.",
  "A better future rarely begins with certainty. It begins with honesty.",
  "Sometimes the bravest move is not starting over. It is starting true.",
  "The path forward becomes visible when the pretending stops.",
  "Stop organizing your life around what no longer belongs in it.",
  "You can keep adapting to a life that drains you, or you can change it.",
  "Do not wait for disruption to begin the change you already know is needed.",
  "The life you want will ask you to stop protecting the one you have outgrown.",
  "What you keep tolerating will keep writing your future.",
  "A life can look successful and still feel profoundly wrong.",
  "If you're walking a path, make sure it's yours.",
  "Do not confuse familiar with right.",
  "The next chapter does not write itself.",
  "One honest shift can change the direction of an entire life.",
  "If the path no longer fits, you are allowed to change direction.",
  "The life you're living is a story in progress. Write the next chapter on purpose.",
  "You do not have to keep living a life that no longer feels like yours.",
  "The moment you tell the truth, the path begins to change.",
  "A life built on someone else's expectations will never feel fully like home.",
  "When the path is truly yours, even hard steps feel different.",
  "A turning point rarely arrives as convenience. It arrives as truth.",
  "What feels like disruption may be the beginning of alignment.",
  "The cost of denial is usually paid later, with interest.",
  "You do not have to wait for collapse to begin choosing differently.",
  "The longer you ignore what is wrong, the louder life usually gets.",
  "Sometimes life whispers first. Then it removes the floorboards.",
  "There is no prize for staying loyal to what no longer fits.",
  "The life you built is allowed to evolve. So are you.",
  "A quiet truth can be more powerful than a dramatic plan.",
  "You are not failing because change feels hard. You are training for a different life.",
  "Growth often begins where excuse-making ends.",
  "You do not need permission to stop living in a way that is shrinking you.",
  "Small changes today can become a completely different life tomorrow.",
  "Small shifts build the life big promises never could.",
  "What you repeat becomes your direction.",
  "A better life is often built in smaller moves than people expect.",
  "You do not need a giant leap. You need honest traction.",
  "Small shifts done consistently can outrun dramatic intentions every time.",
  "The future changes when repetition changes.",
  "You build self-trust the same way you build strength: one repetition at a time.",
  "A different life begins with a different pattern repeated long enough to matter.",
  "You do not need more pressure. You need better repetition.",
  "Momentum is built in ordinary moments, not dramatic speeches.",
  "One better choice repeated often enough can redraw an entire life.",
  "Your habits are writing more of your future than your hopes are.",
  "Lasting change rarely announces itself. It accumulates.",
  "The life you want is hidden inside the choices you repeat.",
  "You do not become someone new all at once. You become someone new by practice.",
  "What feels small today may be the beginning of everything.",
  "The first step does not need to impress you. It needs to be repeated.",
  "A small shift you can sustain is more powerful than a perfect plan you abandon.",
  "Real transformation is often quieter than expected and stronger than imagined."
];

// Get today's quote based on day of year
function getTodayQuote() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dailyQuotes[dayOfYear % dailyQuotes.length];
}

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
              Your next chapter isn't <br className="hidden md:block" />
              <span className="text-[#EDE8DE]">out of reach. It's just out of alignment.</span>
            </h1>
            <p 
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-balance opacity-100 font-semibold"
              style={{ 
                color: '#E6E0D6',
                textShadow: '0 2px 14px rgba(0,0,0,0.35)',
                WebkitTextFillColor: '#E6E0D6'
              }}
            >
              Like any finely-tuned system, small adjustments can create powerful shifts. U Thrive 365 helps you see what's out of alignment, reclaim your energy, and step into a life that feels more true, intentional, and fully your own.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="/quiz"
                role="button"
                className="w-full sm:w-auto px-10 py-4 rounded-xl font-semibold bg-[#3F5E54] text-[#F4F1EA] shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-[6px] hover:bg-[#3F5E54]/90 hover:text-[#F4F1EA] hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 opacity-100 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
              >
                Quiz: See Where You Are Now
                <ArrowRight className="w-5 h-5 text-[#F4F1EA]" />
              </Link>
              <Link
                href="/spin"
                role="button"
                className="w-full sm:w-auto px-10 py-4 rounded-xl font-semibold bg-[#B9A68C] text-[#1F2A25] shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-[6px] hover:bg-[#A99379] hover:text-[#1F2A25] hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 opacity-100"
              >
                <RefreshCcw className="w-5 h-5 text-[#1F2A25]" />
                Word of the Day
              </Link>
            </div>
            
            <p 
              className="mt-8"
              style={{ 
                color: '#E6E0D6',
                fontSize: '1.15rem',
                fontWeight: 500,
                opacity: 0.95,
                letterSpacing: '0.01em',
                maxWidth: '600px',
                margin: '1rem auto 0'
              }}
            >
              Awareness comes first. U Thrive 365 helps you see where you are, understand what is keeping you stuck, and make meaningful shifts toward the life you want.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Lisa Section */}
      <section className="py-20 bg-gradient-to-b from-[#E6F0EA] to-[#DDE8E2] border-y border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-secondary/30 shadow-lg">
                <img src={lisaPhoto} alt="Lisa Fitzharris" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary">
              Do you feel like something in your life no longer fits?
            </h2>

            {/* Body Content */}
            <div className="space-y-6 text-center">
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  Maybe your energy is lower than it should be.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Maybe your health, stress, or daily patterns are asking for your attention in a way you can no longer ignore.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Maybe you know you want change, but you are not fully sure what needs to change — or where to begin.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Maybe part of you senses there is more life, more clarity, and more possibility available to you than the version you've been living.
                </p>
                <p className="text-lg text-foreground leading-relaxed font-semibold">
                  You are not alone in that.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <p className="text-lg text-foreground leading-relaxed">
                  <span className="font-semibold">I'm Lisa Fitzharris.</span>
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  After 30 years designing systems and solving complex problems in engineering, I came to see that people need more than information to change. We need awareness, honest reflection, practical tools, and space to create lives that truly support who we are becoming.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  That is the work I do now — helping people understand what is shaping their lives, reclaim their energy, and create meaningful change from where they are today.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#"
                  className="inline-block text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  Learn more about Lisa →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A More Aligned Life Section */}
      <section className="py-20 px-4 bg-[#DDE8E2]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-primary mb-10">
            Transformation Starts with Awareness — and Grows Through Action
          </h2>
          
          <p className="text-lg text-foreground leading-relaxed mb-8">
            Most people do not begin with a clear vision of a different life. They begin by realizing something no longer fits — a pattern, a habit, a level of stress, or a way of living that has become too small, too draining, or too disconnected from who they want to be.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed">
            U Thrive 365 helps you start there. With awareness. With practical tools. With small shifts that build momentum, strengthen self-trust, and help you move toward a healthier, more intentional, more fulfilling life.
          </p>
        </div>
      </section>

      {/* Foundational Resources Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#E6F0EA] to-[#DDE8E2]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-primary">Foundational Resources</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Start with the core tools and ideas that help you understand where you are, make small meaningful shifts, and begin building momentum for real change.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Why Change Feels Hard — and Where to Begin",
                  "How to See What's Really Shaping Your Life",
                  "Small Shifts, Real Change"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-foreground leading-relaxed">
                    <div className="w-2 h-2 rounded-full bg-[#B8A58C]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/resources" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors gap-2">
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
                    <h3 className="font-display font-bold text-xl mb-2 text-primary">Introduction</h3>
                    <p className="text-sm text-muted-foreground">Energy Gain / Energy Drain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />

      {/* Daily Rotating Quote Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <p 
            className="text-xl md:text-2xl font-semibold leading-relaxed text-foreground italic"
            style={{
              letterSpacing: '0.01em'
            }}
          >
            "{getTodayQuote()}"
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
