import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { PieChart, RefreshCcw, BookOpen } from "lucide-react";
import hikerImage from "@assets/iStock-687519852_1776255504610.jpg";

export default function StartHere() {
  const steps = [
    {
      number: "01",
      title: "Take the PEM Wheel Assessment",
      description: "The first act of change is seeing clearly. The Personal Energy Map gives you an honest snapshot of where your energy is actually going — what matters most, what's being neglected, and where the quiet drain is coming from.",
      icon: PieChart,
      action: "Take Assessment",
      link: "#pem-section",
      disabled: false
    },
    {
      number: "02",
      title: "Explore the Foundational Resources",
      description: "Once you can see the pattern, you can begin to understand it. These short, grounded modules explain why change feels hard, what's really running your life beneath the surface, and how small shifts accumulate into something real.",
      icon: BookOpen,
      action: "Explore Resources",
      link: "/start",
      disabled: false
    },
    {
      number: "03",
      title: "Use the Daily Recalibration",
      description: "Transformation lives in the ordinary moments — not the dramatic ones. The Daily Spin offers a simple prompt, reflection, or nudge to help you return to yourself, reset your focus, and take one aligned step forward.",
      icon: RefreshCcw,
      action: "Spin the Wheel",
      link: "/spin",
      disabled: false
    }
  ];

  return (
    <MainLayout>
      <div className="w-full max-w-[86%] mx-auto overflow-hidden rounded-3xl">
        <img
          src={hikerImage}
          alt="Hiker on a mountain trail"
          className="w-full h-[360px] md:h-[410px] lg:h-[430px] object-cover object-[left_40%]"
        />
      </div>
      <PageHeader 
        className="mt-8"
        title="Start Here" 
        description="You've already tried things. You know something needs to shift. You're just not sure what or why nothing has fully landed yet. These three steps cut through that. No hand-holding, just clarity."
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
                  role="button"
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
            The Personal Energy Map (PEM) Wheel: A Practical Guide by Lisa Fitzharris offers additional reflection, interpretation, and support for anyone who wants a fuller understanding of what their Wheel is revealing. Available on Amazon for $4.99.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
