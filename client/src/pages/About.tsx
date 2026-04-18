import MainLayout from "@/components/layout/MainLayout";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import aboutHero from "@assets/about_page_1776346223470.webp";

export default function About() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-full max-w-[86%] mx-auto overflow-hidden rounded-3xl mb-8">
          <img
            src={aboutHero}
            alt="About U Thrive 365 hero image"
            className="w-full h-[400px] md:h-[450px] lg:h-[480px] object-cover object-center"
          />
        </div>
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
              I didn't come to this work through a curriculum. I came through a breaking point.
            </p>
            <p>
              For most of my adult life I operated in two worlds simultaneously — and kept them carefully separate. By day I was an engineer, eventually running a multi-million dollar hydraulic systems company, managing complex projects and high-stakes delivery environments with the precision and discipline that world demands. Quietly, in parallel, I was beginning a very different kind of education entirely.
            </p>
            <p>
              The turning point came in my early forties. The company I was leading had just lost its founder suddenly, and I found myself carrying more responsibility than I had ever held — while quietly running myself into the ground. Poor nutrition. No real recovery. The kind of sustained depletion that high-performers specialize in ignoring because everything still appears to be functioning.
            </p>
            <p>
              Then my body said no.
            </p>
            <p>
              Three hospitalizations in three months. A racing heart. Blood pressure that wouldn't settle. Doctors who ran every test available and came back with very little to offer. What they did find was significant — and the intervention they recommended sent me into a level of fear I had never experienced before. What followed were years of panic, nervous system dysregulation, and a dismantling of the identity I had spent decades building.
            </p>
            <p>
              I could not engineer my way out of it. That was the first real lesson.
            </p>
            <p>
              What I could do — and did, with everything I had — was begin learning a completely different language. Reiki. Acupuncture. Nutrition. Sound healing. Shamanic practice. Meditation that actually worked. Sedona. Deepak Chopra. Frans Stein. Years of immersion in modalities I would have dismissed entirely five years earlier. I became a Reiki Master. I built a healing practitioner community inside one of our vacant engineering buildings — because by then, both worlds had become equally real.
            </p>
            <p>
              The healing was not linear. It was not dramatic. It was slow, honest, and deeply personal — and it required me to face things I had been avoiding that had nothing to do with medicine.
            </p>
            <p>
              What I know now is this: the body keeps the score, but it also holds the map. When I finally stopped trying to override my system and started learning to work with it — removing what was blocking it, trusting what it was designed to do — things began to shift. Not all at once. One honest step at a time.
            </p>
            <p>
              At 58, I am training to compete in the Ohio State Senior Games. I am building U Thrive 365. I am actively in the arena in every domain I teach.
            </p>
            <p>
              I am not coaching from theory. I am coaching from the other side of the breakdown — and from the quiet, hard-won knowledge of what it actually takes to come back to yourself.
            </p>
            <p className="text-right italic">
              — Lisa
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
              U Thrive 365 offers a structured, soulful path through three phases — each one building on the last.
            </p>
            <p>
              The Personal Energy Map is your starting point. A revealing diagnostic that shows you where your energy is actually going, what matters most to you, where satisfaction is low, and where the quiet drain is coming from. You cannot change what you cannot see. The PEM Wheel helps you see.
            </p>
            <p>
              The Foundational Resources give you language and context for what the map reveals — grounded modules that explain why change feels hard, what is actually running your life beneath the surface, and how small, consistent shifts accumulate into something real.
            </p>
            <p>
              The Daily Recalibration keeps you connected between the bigger work — a simple prompt, reflection, or nudge to help you return to yourself and take one aligned step forward each day.
            </p>
            <p>
              This is not about fixing yourself. It is about remembering who you were before the world told you who to be.
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
              You don't need to have everything figured out before you begin.
            </p>
            <p>
              You only need enough honesty to admit something isn't working and enough courage to look at why.
            </p>
            <p>
              If something in your life is not sitting right. If "fine" no longer feels good enough. If some part of you is ready for more — pay attention to that. There may be a reason you found your way here.
            </p>
            <p>
              Your next chapter isn't out of reach. It's just out of alignment.
            </p>
            <p className="font-medium">
              Start with the PEM Wheel. Explore the Foundational Resources. Take the next small step.
            </p>
            
            {/* Optional CTA */}
            <div className="pt-8 flex gap-4 flex-col sm:flex-row">
              <Link
                href="/pem"
                role="button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                PEM Assessment <ArrowRight className="w-5 h-5" />
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
