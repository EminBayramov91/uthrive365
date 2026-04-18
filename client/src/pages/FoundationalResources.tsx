import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import foundationalHero from "@assets/foundational-resources-hero_1776342701114.webp";

export default function FoundationalResources() {
  const modules = [
    {
      number: "Intro",
      title: "Energy Gain / Energy Drain — Where It All Begins",
      description: "Before anything changes, something must be seen. This introduction invites you to start noticing what fills you and what quietly empties you — and why that distinction changes everything.",
      path: "/energy",
      available: true
    },
    {
      number: "01",
      title: "The Patterns That Keep You Here",
      description: "Most people aren't stuck because they lack willpower. They're held in place by invisible patterns — inherited beliefs, old identities, and well-practiced habits mistaken for truth. This module names them so they lose their grip.",
      path: "/resources/module-01",
      available: true
    },
    {
      number: "02",
      title: "What Is Actually Running Your Life",
      description: "Beneath your schedule, your decisions, and your daily reactions lives a deeper architecture — one most people never examine. This module helps you see the forces shaping your life so you can begin choosing differently.",
      path: "/resources/module-02",
      available: true
    },
    {
      number: "03",
      title: "Small Shifts, Sacred Change",
      description: "Transformation rarely arrives as a dramatic moment. It accumulates — quietly, consistently, in the small choices most people overlook. This module shows you why the ordinary moments are the ones that matter most.",
      path: "/resources/module-03",
      available: true
    }
  ];

  return (
    <MainLayout>
      <div className="w-full max-w-[79%] mx-auto overflow-hidden rounded-3xl">
        <img
          src={foundationalHero}
          alt="Foundational resources hero image"
          className="w-full h-[368px] md:h-[414px] lg:h-[442px] object-cover object-center"
        />
      </div>
      <PageHeader
        className="mt-8"
        title="Foundational Resources"
        description="These resources are your starting point — practical, grounded, and designed to cut through the noise, name what's actually running your life, and give you the clarity to move forward with intention."
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
                  className="px-6 py-3 bg-primary text-[#F4F1EA] font-bold rounded-xl hover:bg-primary/90 transition-colors w-full md:w-auto text-center shadow-md flex items-center justify-center gap-2"
                >
                  {module.number === "Intro" ? "Read Introduction" : `Read Module ${module.number}`} <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <button disabled className="px-6 py-3 bg-muted text-[#F4F1EA] font-bold rounded-xl cursor-not-allowed w-full md:w-auto flex items-center justify-center gap-2 opacity-60">
                  <Clock className="w-4 h-4" /> Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Featured Quote Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <p 
            className="text-xl md:text-2xl font-semibold leading-relaxed text-foreground italic"
            style={{
              letterSpacing: '0.01em'
            }}
          >
            "What feels small today may be the beginning of everything."
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
