import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import { RefreshCcw } from "lucide-react";

interface SpinEntry {
  theme: string;
  meaning: string;
  question: string;
  action: string;
}

const SPIN_ENTRIES: SpinEntry[] = [
  {
    theme: "Trust",
    meaning: "Trust reminds you that not every uncomfortable feeling needs an immediate reaction. Sometimes the wiser choice is to pause, soften your resistance, and allow space for a deeper understanding to emerge.",
    question: "What situation in my life might I view differently if I stopped resisting it for a moment?",
    action: "Pause, take one deep breath, and say, \"Let this be as it needs to be for today.\""
  },
  {
    theme: "Acceptance",
    meaning: "Acceptance means meeting yourself and your current reality without shame, resistance, or self-punishment.",
    question: "What am I struggling to accept in myself or my life right now?",
    action: "Take one quiet moment and say: \"I am exactly who I need to be, and exactly where I need to be for today.\""
  },
  {
    theme: "Letting Go",
    meaning: "Letting Go asks you to release your grip on what no longer needs your energy.",
    question: "What am I still carrying that I no longer need to hold so tightly?",
    action: "Choose one thought, task, resentment, or worry and consciously release it for the rest of the day."
  },
  {
    theme: "Forgiveness",
    meaning: "Forgiveness frees your energy from resentment, regret, or old emotional weight.",
    question: "Where in my life am I still holding on to hurt, blame, or self-punishment?",
    action: "Say quietly, \"I am willing to soften here,\" even if full forgiveness is not ready yet."
  },
  {
    theme: "Gratitude",
    meaning: "Gratitude shifts your attention toward what is already present, supportive, and sustaining.",
    question: "What is already working in my life that I have been overlooking?",
    action: "Write down three things you are genuinely grateful for today."
  },
  {
    theme: "Presence",
    meaning: "Presence brings you back to this moment when your mind is busy replaying the past, worrying about the future, or filling the day with unnecessary mental noise.",
    question: "Where has my mind gone that is pulling me away from this moment?",
    action: "Spend one full minute noticing only your breath, body, and surroundings."
  },
  {
    theme: "Pause",
    meaning: "Pause interrupts automatic reactions and creates space for a wiser response.",
    question: "Where in my day would a pause serve me more than a reaction?",
    action: "Before answering, texting, deciding, or reacting today, take one intentional deep breath first."
  },
  {
    theme: "Discernment",
    meaning: "Discernment helps you separate what is true and useful from what is noise, habit, or pressure.",
    question: "What feels genuinely right for me, and what only feels familiar or easy?",
    action: "Before one decision today, ask: \"Is this aligned, or is this automatic?\""
  },
  {
    theme: "Courage",
    meaning: "Courage is the willingness to take the honest step even when it feels uncomfortable.",
    question: "What truth or action have I been avoiding that would move me forward?",
    action: "Take one small brave action today that you have been putting off."
  },
  {
    theme: "Insight",
    meaning: "Insight looks beneath the surface of frustration, conflict, or difficulty to find the deeper message.",
    question: "What might this challenge be trying to show me that I have not fully seen yet?",
    action: "Choose one difficult situation and write one lesson it may be offering you."
  },
  {
    theme: "Priority",
    meaning: "Priority reminds you to focus on what matters most, clearing away the mental and energetic weight that can build when something important is delayed.",
    question: "What is the one most important thing I need to handle today?",
    action: "Do the most important task first, even if only for 10 focused minutes."
  },
  {
    theme: "Compassion",
    meaning: "Compassion softens harshness without removing truth, boundaries, or responsibility.",
    question: "Where could I respond more kindly to myself or someone else today?",
    action: "Replace one critical thought with a gentler, more truthful one."
  },
  {
    theme: "Reframe",
    meaning: "Reframe asks you to see a situation, task, or problem through a different and more useful lens.",
    question: "How else could I interpret this situation in a way that gives me more freedom?",
    action: "Take one thing you are resisting and rewrite the story you are telling about it."
  },
  {
    theme: "Choice",
    meaning: "Choice reminds you that even small decisions can shift the direction of a day.",
    question: "What is one thing I could choose differently today that would support me more?",
    action: "Make one better choice today in food, movement, rest, timing, or attention."
  },
  {
    theme: "Purpose",
    meaning: "Purpose invites you to treat your actions, work, and attention as meaningful instead of mechanical.",
    question: "What would change today if I approached my life with more meaning and intention?",
    action: "Before starting one task, say: \"Let this matter.\""
  },
  {
    theme: "Receiving",
    meaning: "Receiving means being open to support, kindness, insight, or help instead of pushing it away.",
    question: "What am I resisting receiving because I am too used to giving or doing everything myself?",
    action: "Accept one compliment, kindness, or offer of help today without deflecting it."
  },
  {
    theme: "Grace",
    meaning: "Grace is moving through the day with softness, steadiness, and dignity instead of reactivity.",
    question: "What would it look like to move through today with a little more grace?",
    action: "When something irritates or unsettles you, slow down your tone and your body before responding."
  }
];

export default function DailySpin() {
  const [currentEntry, setCurrentEntry] = useState<SpinEntry | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    setIsSpinning(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * SPIN_ENTRIES.length);
      setCurrentEntry(SPIN_ENTRIES[randomIndex]);
      setIsSpinning(false);
    }, 600);
  };

  return (
    <MainLayout>
      <PageHeader
        title="Daily Recalibration"
        description="Take a breath. Spin for a daily word, reflection, and one small action."
      />

      <div className="max-w-3xl mx-auto px-4 pb-24">
        {/* Spin Button */}
        <div className="text-center mb-12">
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md text-lg"
            data-testid="button-spin"
          >
            {isSpinning ? "Spinning..." : "Spin"}
          </button>
        </div>

        {/* Result Card */}
        {currentEntry && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-background border border-border p-10 rounded-3xl shadow-sm">
              {/* Theme */}
              <div className="mb-10 pb-8 border-b border-border/50">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Theme</p>
                <h2 className="text-5xl font-display font-bold text-primary">{currentEntry.theme}</h2>
              </div>

              {/* Meaning */}
              <div className="mb-10">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Meaning</p>
                <p className="text-lg text-foreground leading-relaxed">{currentEntry.meaning}</p>
              </div>

              {/* Reflection Question */}
              <div className="mb-10">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Reflection Question</p>
                <p className="text-lg text-foreground leading-relaxed italic">{currentEntry.question}</p>
              </div>

              {/* Micro-Action */}
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Micro-Action</p>
                <p className="text-lg text-foreground leading-relaxed">{currentEntry.action}</p>
              </div>
            </div>

          </div>
        )}

        {/* Prompt when no result yet */}
        {!currentEntry && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Click the Spin button above to begin.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
