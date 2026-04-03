import MainLayout from "@/components/layout/MainLayout";
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Quiz() {
  const questions = [
    "Does some part of your life feel off, even if you can't fully explain why?",
    "Do you often feel like you are going through the motions instead of fully living?",
    "Are you less excited about your life than you want to be?",
    "Do you find yourself knowing what needs to change but unable to make it happen?",
    "Are you unclear about what you truly want next?",
    "Do you end most days feeling depleted rather than restored?",
    "Are you willing to look at yourself honestly and try new approaches to create meaningful change?"
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [yesCount, setYesCount] = useState(0);
  const [readinessAnswer, setReadinessAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isYes) => {
    // For questions 0-5, count "Yes" answers for scoring
    if (currentQuestion < 6 && isYes) {
      setYesCount(yesCount + 1);
    }

    // For question 6 (readiness question), track the answer separately
    if (currentQuestion === 6) {
      setReadinessAnswer(isYes);
      setShowResult(true);
    } else if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getResultText = () => {
    if (yesCount <= 2) {
      return "You may be doing fairly well right now. Even so, a little more awareness could help you fine-tune what is working, notice what may be draining you, and make small shifts that support more clarity and energy.";
    } else if (yesCount <= 4) {
      return "There is likely a real opportunity for change. Some part of your life may be feeling off, stuck, or more draining than it needs to be. This is often a sign that it is time to take a closer look at your patterns, your energy, and what may no longer fit.";
    } else {
      return "It may be time for a deeper reset. Your answers suggest that important parts of your life may feel out of sync, draining, or unclear. This is a strong sign that stepping back, building awareness, and looking at your current life direction more honestly could create meaningful change.";
    }
  };

  if (showResult) {
    // If readiness answer is No, show the "not ready" message
    if (readinessAnswer === false) {
      return (
        <MainLayout>
          <div className="max-w-3xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Thank You for Your Honesty
              </h1>
              <p className="text-lg text-foreground leading-relaxed">
                Your answers suggest there may be areas of your life that want attention or change. But real change only happens when you are willing to look honestly at what is not working and try something different. If you are not ready for that right now, that is okay. Come back when you are ready to take a deeper look.
              </p>
            </div>
          </div>
        </MainLayout>
      );
    }

    // If readiness answer is Yes, show the score-based result
    return (
      <MainLayout>
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Your Result
            </h1>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              {getResultText()}
            </p>
          </div>

          <div className="bg-background border border-border p-8 rounded-3xl text-center">
            <h2 className="text-2xl font-display font-bold text-primary mb-4">
              Next step: Explore the PEM Wheel
            </h2>
            <p className="text-foreground leading-relaxed mb-8">
              The PEM Wheel helps you see where your energy, time, and satisfaction may be out of balance so you can start making meaningful shifts.
            </p>
            <Link
              href="/pem"
              role="button"
              className="inline-block px-8 py-4 bg-primary text-[#F4F1EA] font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Explore the PEM Wheel
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Is Something Calling You Forward?
          </h1>
          <p className="text-lg text-foreground leading-relaxed">
            Answer 7 quick yes-or-no questions to see whether something in your life may be asking for change.
          </p>
        </div>

        <div className="bg-background border border-border p-8 rounded-3xl mb-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-primary">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-secondary/20 rounded-full h-2">
              <div
                className="bg-primary rounded-full h-2 transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {questions[currentQuestion]}
          </h2>

          {/* Answer Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => handleAnswer(false)}
              className="flex-1 px-6 py-4 bg-secondary/20 text-primary font-bold rounded-xl hover:bg-secondary/30 transition-colors"
            >
              No
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="flex-1 px-6 py-4 bg-primary text-[#F4F1EA] font-bold rounded-xl hover:bg-primary/90 transition-colors"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
