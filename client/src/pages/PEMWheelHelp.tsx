import MainLayout from "@/components/layout/MainLayout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PEMWheelHelp() {
  return (
    <MainLayout>
      {/* Back Link */}
      <div className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <Link
          href="/pem"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to PEM Wheel
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-border">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            How to Read Your PEM Wheel
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <p>
            A PEM Wheel is not about making every area of life perfect. It is a simple way to notice where your energy, attention, and satisfaction are working together—and where they may be out of sync.
          </p>

          <div>
            <h2 className="text-2xl font-bold font-display text-primary mb-4">Rounder wheels tend to feel smoother</h2>
            <p>A more balanced shape often reflects a life where your energy is being supported across several areas, not just one or two.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-display text-primary mb-4">Uneven is normal</h2>
            <p>Life moves in seasons. At different times, some areas naturally need more attention—such as work, family, healing, or finances. A wheel does not need to look perfectly even to be healthy or meaningful.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-display text-primary mb-4">Repeating low areas matter</h2>
            <p>If the same areas stay low over time, your wheel may be showing you something important. It can be a sign that an area of life is consistently under-supported, neglected, or quietly draining your energy.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-display text-primary mb-4">Three common patterns to notice</h2>
            
            <div className="space-y-4 ml-4 border-l-2 border-accent pl-6">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">1. The scores are aligned</h3>
                <p>If Priority, Time, and Satisfaction are fairly similar in one area—even if the numbers are lower—that often means: "This is okay for now."</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">2. Priority is high, but Time is low</h3>
                <p>This often means: "This matters to me, but it is not getting enough attention."</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">3. Time is high, but Satisfaction is low</h3>
                <p>This often means: "This is taking a lot from me, but not giving much back."</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-display text-primary mb-4">Ebb and flow</h2>
            <p>A balanced life does not mean every area is a 10 all the time. Your wheel will shift as life shifts. The value of the PEM is that it helps you notice whether an imbalance is seasonal and intentional—or chronic and draining.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-display text-primary mb-4">A simple rhythm</h2>
            <p>Try filling out your PEM once a week for four weeks. Patterns become easier to see with repetition. If you want a deeper view, repeat it weekly for three months.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-display text-primary mb-4">Quick scan</h2>
            <ul className="space-y-3 ml-6">
              <li><span className="font-semibold">High Priority + Low Time + Low Satisfaction</span> = an important area that may be neglected</li>
              <li><span className="font-semibold">High Time + Low Satisfaction</span> = a possible drain, obligation, or misalignment</li>
              <li><span className="font-semibold">Low Time + High Satisfaction</span> = something nourishing that gives a lot back</li>
              <li><span className="font-semibold">Similar scores across all three</span> = an area that may feel stable and integrated</li>
            </ul>
          </div>

          <p className="text-foreground">
            For a deeper explanation of how to use and interpret the PEM Wheel, see <em className="italic text-foreground">The Personal Energy Map (PEM) Wheel: A Practical Guide</em>, available on Amazon.
          </p>
        </div>
      </article>
    </MainLayout>
  );
}
