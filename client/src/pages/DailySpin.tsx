import MainLayout from "@/components/layout/MainLayout";
import { useRandomSpin } from "@/hooks/use-spins";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCcw, Sparkles, BookOpen, Target, HelpCircle } from "lucide-react";
import confetti from "canvas-confetti";

export default function DailySpin() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  
  // We use enabled: false so it doesn't fetch on mount automatically unless we want it to.
  // Actually, let's fetch one so it's ready, but refetch on spin.
  const { data: spinData, refetch, isError, isLoading } = useRandomSpin(true);

  const handleSpin = async () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setShowResult(false);
    
    // Trigger fresh fetch
    await refetch();
    
    // Simulate wheel spinning time
    setTimeout(() => {
      setIsSpinning(false);
      setShowResult(true);
      
      // Gentle subtle confetti for a premium feel
      confetti({
        particleCount: 40,
        spread: 60,
        colors: ['#2C5234', '#D4AF37', '#8B8579'], // primary, accent, secondary
        disableForReducedMotion: true,
        zIndex: 100,
      });
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 min-h-[70vh] flex flex-col items-center justify-center">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Daily Recalibration
          </h1>
          <p className="text-lg text-muted-foreground">
            Feel friction? Click the circle to receive a random prompt to reset your state.
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
          
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="wheel"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                className="my-12"
              >
                <button
                  onClick={handleSpin}
                  disabled={isSpinning || isLoading}
                  className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary flex flex-col items-center justify-center text-primary-foreground shadow-2xl transition-all duration-300 ${
                    isSpinning ? 'animate-spin-pulse cursor-wait' : 'hover:scale-105 hover:shadow-primary/40 cursor-pointer'
                  }`}
                >
                  <motion.div
                    animate={isSpinning ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 1, repeat: isSpinning ? Infinity : 0, ease: "linear" }}
                  >
                    <RefreshCcw className="w-12 h-12 md:w-16 md:h-16 mb-2 text-accent" />
                  </motion.div>
                  <span className="font-display font-bold text-2xl tracking-widest uppercase">
                    {isSpinning ? "CALIBRATING" : "SPIN"}
                  </span>
                  
                  {/* Decorative rim */}
                  <div className="absolute inset-2 border border-white/20 rounded-full border-dashed"></div>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                className="w-full bg-background border border-border rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5"
              >
                {isError || !spinData ? (
                  <div className="text-center py-12">
                    <p className="text-destructive mb-4">Unable to fetch recalibration data.</p>
                  </div>
                ) : (
                  <div className="space-y-10">
                    <div className="text-center border-b border-border pb-8">
                      <span className="inline-block px-4 py-1.5 bg-accent/20 text-primary rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                        Your Focus
                      </span>
                      <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-4 capitalize">
                        {spinData.word}
                      </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-accent font-bold">
                          <BookOpen className="w-5 h-5" />
                          <h3>Meaning</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {spinData.meaning}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-accent font-bold">
                          <Target className="w-5 h-5" />
                          <h3>Action</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {spinData.action}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-accent font-bold">
                          <HelpCircle className="w-5 h-5" />
                          <h3>Question</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed font-medium italic text-foreground">
                          "{spinData.question}"
                        </p>
                      </div>
                    </div>

                    <div className="pt-8 flex justify-center">
                      <button
                        onClick={handleSpin}
                        className="px-8 py-4 bg-secondary text-primary font-bold rounded-xl hover:bg-secondary/80 transition-colors flex items-center gap-2"
                      >
                        <RefreshCcw className="w-5 h-5" />
                        Spin Again
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </MainLayout>
  );
}
