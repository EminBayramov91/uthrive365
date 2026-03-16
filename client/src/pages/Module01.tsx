import MainLayout from "@/components/layout/MainLayout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Module01() {
  return (
    <MainLayout>
      {/* Back Link */}
      <div className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Foundational Resources
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-border">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Why Change Feels Hard — and Where to Begin
          </h1>
          <p className="text-lg text-muted-foreground">
            Module 01: A grounded introduction to patterns, resistance, and how to start without pressure.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-primary">
              The Weight of Old Patterns
            </h2>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Most people know what they should change. They know they work too hard, sleep too little, worry too much. They know they've drifted from what matters, settled into routines that no longer fit, or stayed loyal to versions of themselves that no longer serve them well.
              </p>
              <p>
                And yet, despite knowing this, change feels impossibly hard.
              </p>
              <p>
                This isn't weakness. It isn't lack of willpower or motivation. It's the reality of how change actually works. We are not machines that can simply reprogram ourselves with enough discipline. We are complex systems shaped by years of habit, conditioning, reward patterns, identity, and neurobiology. Old patterns are wired deep—sometimes so deep we don't even notice them until we're already moving through the same cycle again.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-primary">
              Why Willpower Alone Doesn't Work
            </h2>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Willpower is real, but it's also finite. And when we approach change through pure force—through "discipline," "pushing through," or "just trying harder"—we're working against our own system rather than with it.
              </p>
              <p>
                Real, sustainable change requires something different. It requires clarity about what is actually driving our current patterns. It requires understanding the habits, beliefs, pressures, and reactions that keep us stuck. And it requires approaching change not as a battle to win through sheer force, but as a process of learning to respond differently—with awareness, honesty, and intention.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-primary">
              Where to Begin
            </h2>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                The beginning is not a grand overhaul. It's not fixing everything at once or becoming a completely different person. The beginning is much simpler:
              </p>
              <p>
                <span className="font-semibold">See clearly.</span> Understand what is actually shaping your life right now—what patterns, pressures, and assumptions have become invisible through repetition.
              </p>
              <p>
                <span className="font-semibold">Make small shifts.</span> Change doesn't need to be dramatic to be meaningful. Small, intentional shifts that align with what you genuinely want will build momentum over time.
              </p>
              <p>
                <span className="font-semibold">Move without pressure.</span> You don't need to achieve perfection or change everything at once. You need to begin—to take one small step forward from exactly where you are now.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-primary">
              What Comes Next
            </h2>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                This module is the foundation. It's about understanding that change is possible, that you're not broken or failing—you're just working with a system (your life) that's been shaped by years of patterns and conditioning.
              </p>
              <p>
                The next steps are to understand those patterns more clearly, to begin making small shifts, and to build a life that feels more honest and more aligned with who you actually are becoming.
              </p>
              <p>
                That's where the rest of U Thrive 365 comes in. With the PEM Wheel, the daily recalibration, and the resources to support your journey, you have the tools to move forward—not with pressure, but with clarity, intention, and support.
              </p>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="space-y-6 text-center">
            <p className="text-lg text-foreground">
              Ready to take the next step?
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-[#F4F1EA] font-bold rounded-xl hover:bg-primary/90 transition-colors"
            >
              Take the PEM Wheel Assessment
            </Link>
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
