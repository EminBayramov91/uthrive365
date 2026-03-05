import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import Newsletter from "@/components/Newsletter";
import { Link } from "wouter";
import { PieChart, RefreshCcw, BookOpen } from "lucide-react";

export default function StartHere() {
  const steps = [
    {
      number: "01",
      title: "Take the PEM Wheel Assessment",
      description: "Map your Physical, Emotional, and Mental states to find your biggest energy leaks. Takes 3 minutes.",
      icon: PieChart,
      action: "Take Assessment",
      link: "#", // Placeholder
      disabled: true,
      note: "Coming soon"
    },
    {
      number: "02",
      title: "The Daily Recalibration",
      description: "Use the Spin feature whenever you feel friction. Get an instant word, meaning, and action to reset.",
      icon: RefreshCcw,
      action: "Spin the Wheel",
      link: "/spin",
      disabled: false
    },
    {
      number: "03",
      title: "Dive into Micro-Modules",
      description: "Learn the foundational frameworks of your new operating system.",
      icon: BookOpen,
      action: "Read Modules",
      link: "/blog",
      disabled: false
    }
  ];

  return (
    <MainLayout>
      <PageHeader 
        title="Your Journey Begins Here" 
        description="Follow this exact sequence to begin recalibrating your personal operating system."
      />

      <div className="max-w-4xl mx-auto px-4 pb-12 space-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 bg-background border border-border p-8 rounded-3xl shadow-sm hover-elevate">
            <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center shrink-0">
              <span className="font-display font-bold text-xl text-primary">{step.number}</span>
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <step.icon className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="flex items-center md:items-start shrink-0 pt-2">
              {step.disabled ? (
                <button disabled className="px-6 py-3 bg-muted text-muted-foreground font-semibold rounded-xl cursor-not-allowed w-full md:w-auto">
                  {step.note}
                </button>
              ) : (
                <Link href={step.link} className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors w-full md:w-auto text-center shadow-md">
                  {step.action}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="py-12">
        <Newsletter />
      </div>
    </MainLayout>
  );
}
