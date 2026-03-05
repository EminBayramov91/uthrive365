import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <MainLayout>
      <PageHeader 
        title="About the Method" 
        description="The story behind Recalibrate OS and why standard self-care isn't enough."
      />

      <div className="max-w-3xl mx-auto px-4 pb-24 space-y-12 text-lg text-muted-foreground leading-relaxed">
        <section className="prose prose-lg prose-headings:font-display prose-headings:text-primary max-w-none">
          <p className="text-xl font-medium text-foreground">
            It started with a systemic crash. After years of running at peak capacity, my own "operating system" failed.
          </p>
          <p>
            I realized that taking a vacation or doing a face mask wasn't going to fix a fundamental architectural flaw in how I was living. We are told to "push through" or "take a break," but neither addresses the core mechanics of our daily energy expenditure.
          </p>
          <p>
            I spent the next three years studying somatic experiencing, behavioral psychology, and systems design. The goal wasn't just to feel better temporarily—it was to build a sustainable machine.
          </p>
        </section>

      <section className="bg-gradient-to-b from-[#E6F0EA] to-[#DDE8E2] p-8 md:p-12 rounded-3xl border border-border">
          <h3 className="text-2xl font-bold font-display text-primary mb-6">Why this works (The Credibility)</h3>
          <ul className="space-y-4">
            {[
              "Rooted in somatic psychology, not just mindset shifts.",
              "Designed as a system, meaning it scales with your complexity.",
              "Tested by 500+ high-performers recovering from burnout.",
              "Focuses on micro-shifts (2mm changes) that compound effortlessly."
            ].map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center pt-8">
          <h3 className="text-3xl font-display font-bold text-primary mb-6">Ready to redesign?</h3>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 hover:shadow-lg transition-all"
          >
            Start the Process <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </MainLayout>
  );
}
