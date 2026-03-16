import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { BookOpen, ArrowRight, Clock } from "lucide-react";

export default function FoundationalResources() {
  const modules = [
    {
      number: "01",
      title: "Why Change Feels Hard — and Where to Begin",
      description: "A grounded introduction to why so many people stay stuck in old patterns, why change can feel harder than it should, and how to begin without pressure or overwhelm.",
      path: "/resources/module-01",
      available: false
    },
    {
      number: "02",
      title: "How to See What's Really Shaping Your Life",
      description: "A practical guide to recognizing the habits, pressures, reactions, and assumptions that may be influencing your life more than you realize.",
      path: "/resources/module-02",
      available: false
    },
    {
      number: "03",
      title: "Small Shifts, Real Change",
      description: "An encouraging explanation of how meaningful transformation begins through small, sustainable changes that build momentum over time.",
      path: "/resources/module-03",
      available: false
    }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Foundational Resources"
        description="Start with the core ideas and practical tools that help you understand where you are, make meaningful shifts, and begin building momentum for real change."
      />

      <div className="max-w-4xl mx-auto px-4 pb-24 space-y-8">
        {modules.map((module, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 bg-background border border-border p-8 rounded-3xl shadow-sm hover-elevate">
            <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center shrink-0">
              <span className="font-display font-bold text-xl text-primary">{module.number}</span>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#B8A58C]" />
                <h3 className="text-2xl font-bold text-foreground">{module.title}</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {module.description}
              </p>
            </div>

            <div className="flex items-center md:items-start shrink-0 pt-2">
              {module.available ? (
                <Link
                  href={module.path}
                  role="button"
                  className="px-6 py-3 bg-primary text-[#EDE8DE] font-semibold rounded-xl hover:bg-primary/90 transition-colors w-full md:w-auto text-center shadow-md flex items-center justify-center gap-2"
                >
                  Read Module <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <button disabled className="px-6 py-3 bg-muted text-muted-foreground font-semibold rounded-xl cursor-not-allowed w-full md:w-auto flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" /> Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
