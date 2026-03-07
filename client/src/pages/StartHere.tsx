import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { PieChart, RefreshCcw, BookOpen } from "lucide-react";

export default function StartHere() {
  const steps = [
    {
      number: "01",
      title: "Take the PEM Wheel Assessment",
      description: "Get a quick, practical snapshot of where your life stands right now—what matters most, where your focus or energy is going, and which areas may need attention, support, or change.",
      icon: PieChart,
      action: "Take Assessment",
      link: "#pem-section",
      disabled: false
    },
    {
      number: "02",
      title: "Explore the Foundational Resources",
      description: "Once you have a clearer picture of where you are, begin with the short, practical resources that explain the core ideas behind U Thrive 365 and how meaningful change begins.",
      icon: BookOpen,
      action: "Explore Resources",
      link: "/start",
      disabled: false
    },
    {
      number: "03",
      title: "Use the Daily Recalibration",
      description: "Use the Daily Spin whenever you want a simple prompt, reflection, or nudge to help you reset, refocus, and take one supportive step forward.",
      icon: RefreshCcw,
      action: "Spin the Wheel",
      link: "/spin",
      disabled: false
    }
  ];

  return (
    <MainLayout>
      <PageHeader 
        title="Start Here" 
        description="If you're wondering where to begin, begin simply. Follow these first steps to understand where you are now, what may be asking for attention, and how to move forward with greater clarity and intention."
      />

      <div className="max-w-4xl mx-auto px-4 pb-12 space-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 bg-background border border-border p-8 rounded-3xl shadow-sm hover-elevate">
            <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center shrink-0">
              <span className="font-display font-bold text-xl text-primary">{step.number}</span>
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <step.icon className="w-6 h-6 text-[#B8A58C]" />
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
                <Link 
                  href={step.link} 
                  {...(step.link === "#pem-section" && {
                    onClick: (e: React.MouseEvent) => {
                      e.preventDefault();
                      const element = document.getElementById('pem-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  })}
                  className="px-6 py-3 bg-primary text-[#EDE8DE] font-semibold rounded-xl hover:bg-primary/90 transition-colors w-full md:w-auto text-center shadow-md"
                >
                  {step.action}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Go Deeper Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center bg-secondary/20 border border-border rounded-2xl p-8">
          <p className="text-lg text-foreground leading-relaxed">
            <span className="font-semibold">Want to go deeper?</span><br />
            The book <em>The Personal Energy Map (PEM) Wheel: A Practical Guide</em> by Lisa Fitzharris offers additional guidance, reflection, and support for people who want a fuller understanding of the framework behind the Wheel. Look for it on Amazon for $4.99.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
