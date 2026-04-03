import MainLayout from "@/components/layout/MainLayout";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">
          About U Thrive 365
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mb-8 tracking-wide">
          Created by Lisa Fitzharris
        </p>
        <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
          You are not broken. You may have simply lost touch with the part of you that knows what is true. U Thrive 365 exists to help you find your way back.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 pb-24 space-y-20">
        
        {/* Section 1: Why U Thrive 365 Exists */}
        <section>
          <h2 className="text-3xl font-display font-bold text-primary mb-8">
            Why U Thrive 365 Exists
          </h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Most high-performing people don't arrive here because life fell apart. They arrive because something quieter happened — a growing sense that the life they built, the roles they accepted, and the version of themselves they've been presenting to the world no longer fully fits.
            </p>
            <p>
              They are capable. Accomplished. Often admired. And quietly running on empty.
            </p>
            <p>
              U Thrive 365 exists for that moment — when the external metrics look fine but something internal is signaling otherwise. When rest doesn't restore you. When success doesn't satisfy you. When you can feel the gap between the life you're living and the one pulling at you from somewhere deeper.
            </p>
            <p>
              This work begins with one simple, honest question: where is your energy actually going — and is it taking you where you truly want to go?
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border/50" />

        {/* Section 2: My Story */}
        <section>
          <h2 className="text-3xl font-display font-bold text-primary mb-8">
            My Story / What Led Me Here
          </h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              I come to this work from an unusual intersection: more than three decades in engineering and highly analytical, structured environments, alongside decades of exploration in healing, personal growth, and holistic modalities.
            </p>
            <p>
              For much of my life, I worked in systems that valued logic, performance, discipline, and problem-solving. That part of me is real, and it has served me well. But the deeper turning point in my life came in my early forties.
            </p>
            <p>
              At the time, I was running an engineering consulting company and found myself under an intense level of stress almost overnight. I was working hard, pushing past warning signs, and not taking care of myself the way I should have been. Then I got very sick.
            </p>
            <p>
              What followed was not a quick fix. Over the next several months, I was in and out of hospitals, searching for answers, trying different doctors, and realizing that the problems were not going away. In many ways, it felt like the life I had built had shattered, and rebuilding it would take years.
            </p>
            <p>
              That experience changed me. I had to let go of old identities, face fears, and begin looking at health, stress, and life itself in a very different way. During those years, I immersed myself in holistic healing, learning from books, teachers, seminars, retreats, and lived experience. I saw enough real shifts—both in my body and in my life—to convince my engineering mind that there was something here worth paying close attention to.
            </p>
            <p>
              Over time, I began to see that people are shaped by patterns, pressures, habits, and internal signals just as powerfully as any external system. That realization changed how I understood health, healing, and transformation.
            </p>
            <p>
              I rebuilt my life with more awareness, more honesty, and a greater sense of freedom. U Thrive 365 grew out of that journey. This work is deeply personal. It is rooted not only in study, but in lived transformation and in the belief that when we learn to recognize what is no longer working, meaningful change becomes possible.
            </p>
            <p>
              One of the clearest lessons I took from that season was this: I wish I had listened sooner. Part of why I do this work now is to help others recognize the signs earlier—before stress, disconnection, or health challenges take more from them than they need to.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border/50" />

        {/* Section 3: Why This Approach Is Different */}
        <section>
          <h2 className="text-3xl font-display font-bold text-primary mb-8">
            Why This Approach Is Different
          </h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              U Thrive 365 is not built from a methodology borrowed from someone else's experience. It is built from three lived archetypes that converge in one person.
            </p>
            <p>
              The Engineer — 30 years designing complex hydraulic systems from the ground up. Every variable specified. Every sub-system tested. Every system tuned for peak performance. That same precision now applies to human systems — because the patterns shaping your life are as mappable as any mechanical one, once you know how to look.
            </p>
            <p>
              The Athlete — A natural competitor from the start. Collegiate soccer player, all-state softball player, and a woman currently training to compete at 58. Not coaching from memory. Coaching from the arena.
            </p>
            <p>
              The Self-Healer — Facing health challenges that medicine could not resolve, the deeper lesson learned was this: healing is not something you force. It is something you allow — by removing what is blocking the system and trusting what the body was always designed to do. That insight runs through everything taught here.
            </p>
            <p>
              Together these three archetypes produce something genuinely rare: a guide who speaks fluent engineer, athlete, and mystic simultaneously — and who has applied all three to her own life in real time.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border/50" />

        {/* Section 4: Who This Is For */}
        <section>
          <h2 className="text-3xl font-display font-bold text-primary mb-8">
            Who This Is For
          </h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              This work is for thoughtful, growth-oriented people who sense they have outgrown the life they built — the roles they accepted, the patterns they inherited, the version of themselves they were told to be.
            </p>
            <p>
              You may be outwardly successful and inwardly hollow. You may be facing a health challenge conventional medicine hasn't resolved. You may be emerging from grief, burnout, or a transition that stripped away the old identity before a new one was ready. Or you may simply feel a quiet but persistent pull — toward more aliveness, more truth, more purpose.
            </p>
            <p>
              The common thread is not demographic. It is energetic. Something is draining you in a way you can feel but haven't yet been able to map.
            </p>
            <p>
              That mapping is where this work begins.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border/50" />

        {/* Section 5: What You'll Find Here */}
        <section>
          <h2 className="text-3xl font-display font-bold text-primary mb-8">
            What You'll Find Here
          </h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              At U Thrive 365, you'll find practical tools, reflections, and resources designed to help you understand what is shaping your life and begin making meaningful, sustainable shifts.
            </p>
            <p>
              That includes:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>the PEM Wheel, a practical tool for seeing where your energy is going, what may be out of balance, and where to begin</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>foundational resources that introduce the core ideas behind U Thrive 365 and explain how small shifts can build real momentum for change</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>reflections and teachings on patterns, healing, self-awareness, personal growth, and transformation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>future tools and resources designed to support daily recalibration, better choices, and more intentional living</span>
              </li>
            </ul>
            <p>
              This is not about fixing yourself. It is about learning to understand yourself more clearly, respond to life with greater awareness, and build a healthier, more honest, more sustainable way of living—one meaningful shift at a time.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border/50" />

        {/* Section 6: Invitation to Begin */}
        <section>
          <h2 className="text-3xl font-display font-bold text-primary mb-8">
            Invitation to Begin
          </h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              You do not need to have everything figured out before you begin.
            </p>
            <p>
              You only need a willingness to pause, look honestly at what is no longer working, and consider that a different way of living may be possible.
            </p>
            <p>
              If something in your life is not sitting right—if "fine" no longer feels good enough, and some part of you is ready for more—pay attention to that. There may be a reason you found your way here. Not because everything is clear yet, but because you may be more ready than you think to begin making meaningful changes.
            </p>
            <p>
              U Thrive 365 is here to help you begin.
            </p>
            <p className="font-medium">
              Start with the PEM Wheel. Explore the foundational resources. Take the next small step that helps you move forward with more clarity, energy, and intention.
            </p>
            
            {/* Optional CTA */}
            <div className="pt-8 flex gap-4 flex-col sm:flex-row">
              <Link
                href="#pem-section"
                role="button"
                onClick={() => {
                  const element = document.getElementById('pem-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Start with the PEM Wheel <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/start"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Explore Foundational Resources <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
