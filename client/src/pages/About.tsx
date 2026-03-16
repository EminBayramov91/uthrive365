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
          A practical, holistic path for people ready to understand what is no longer working, make meaningful shifts, and move toward a healthier, more intentional way of living.
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
              U Thrive 365 exists to help people notice what is no longer working, understand the patterns and pressures shaping their lives, and begin making healthier, more honest changes. Many of us learn to override our own signals—pushing past exhaustion, ignoring dissatisfaction, and staying loyal to ways of living that no longer fit who we are becoming. This work is about helping people slow down enough to see clearly, reconnect with themselves, and begin moving forward with more intention.
            </p>
            <p>
              Many people who find their way here are highly motivated, capable, and outwardly functional, yet quietly aware that something no longer fits. They may feel drained, stuck, disconnected, or increasingly aware that the life they built no longer reflects who they are now—or who they are beginning to become. Others may be navigating unresolved health challenges, chronic stress, burnout, or the growing realization that they want more from life than simply managing what has always been.
            </p>
            <p>
              U Thrive 365 was created for that moment—the moment when you begin to wonder whether it is still possible to feel better, live more honestly, and create a healthier, more fulfilling future. Whether someone is looking to improve one area of life or begin a much larger transformation, this work begins by helping them see clearly, make meaningful shifts, and build momentum from there.
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
              U Thrive 365 is different because it blends systems thinking with holistic transformation.
            </p>
            <p>
              This is not generic life coaching, empty motivation, or a collection of disconnected wellness ideas. It is a structured, reflective approach designed to help you understand your patterns, notice where your energy is going, and begin making meaningful changes from the inside out.
            </p>
            <p>
              My approach brings together:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>analytical thinking and pattern recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>self-awareness tools and structured reflection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>practical support for healing and personal growth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>a broader view of change that includes the body, mind, habits, identity, and overall direction of your life</span>
              </li>
            </ul>
            <p>
              In other words, this approach is both grounded and expansive. It is practical enough for thoughtful people who want clarity and structure, but deep enough for those who know real change requires more than surface-level productivity hacks.
            </p>
            <p>
              The deeper question is not how to become someone else. It is whether this might be the right time to go after what has been calling you—to change direction, pursue what matters more, and create a life with more joy, more ease, and more truth than you once thought possible.
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
              U Thrive 365 is for thoughtful, growth-oriented people who sense there is more life in them than the roles, identities, or expectations they've been living.
            </p>
            <p>
              This work resonates especially with women in midlife and beyond—women who have spent years being responsible, capable, successful, and outwardly functional while quietly carrying old conditioning about what they should be, want, or settle for.
            </p>
            <p>
              It also speaks to others who feel constrained by social expectations, chronic stress, unresolved health challenges, burnout, or a growing sense that the life they built no longer fully fits who they are becoming.
            </p>
            <p>
              Many people arrive here because something inside them knows there is more to life, even if they cannot fully name it yet. They may not feel they are where they thought they would be by this stage of life. They may sense they have drifted from themselves, postponed what mattered, or settled into ways of living that no longer feel fully alive. This space is for people who are ready to be more honest about what they want, clearer about what is getting in the way, and more deliberate about creating a life that feels more true.
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
              At U Thrive 365, you'll find tools, reflections, and resources designed to help you better understand yourself and begin making meaningful, sustainable shifts.
            </p>
            <p>
              That includes:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>the PEM Wheel, a practical tool for seeing where your focus or energy is going and where life may be out of balance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>foundational resources that introduce the core ideas behind U Thrive 365</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>reflections and teachings on patterns, healing, vitality, personal growth, and reinvention</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>future tools and resources designed to support daily awareness, better choices, and more intentional living</span>
              </li>
            </ul>
            <p>
              This is not about fixing yourself. It is about learning to understand yourself more deeply, respond to your life with greater awareness, and create a way of living that feels healthier, truer, and more sustainable—one meaningful shift at a time.
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
              You only need a willingness to pause, look honestly at what is no longer working, and consider that another way of living may be possible.
            </p>
            <p>
              If something in your life is not sitting right—if "fine" no longer feels good enough, and some part of you is daring to want more—pay attention to that. There may be a reason you found your way here. Another doorway, another opportunity, and another chance to create a life that feels more true to who you are and who you may be destined to become may be opening now.
            </p>
            <p>
              U Thrive 365 is here to help you begin.
            </p>
            <p className="font-medium">
              Start with the PEM Wheel. Explore the foundational resources. Take the next small step that feels true.
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
