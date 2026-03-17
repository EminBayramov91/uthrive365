import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const weeks = [
    {
      label: "Week of March 30, 2026",
      path: "/blog/week-march-30",
      available: true
    },
    {
      label: "Week of April 6, 2026",
      path: "#",
      available: false
    },
    {
      label: "Week of April 13, 2026",
      path: "#",
      available: false
    },
    {
      label: "Week of April 20, 2026",
      path: "#",
      available: false
    },
    {
      label: "Week of April 27, 2026",
      path: "#",
      available: false
    },
    {
      label: "Week of May 4, 2026",
      path: "#",
      available: false
    }
  ];

  return (
    <MainLayout>
      <PageHeader 
        title="Articles & Insights" 
        description="Short articles and practical insights for building a stronger, clearer, more intentional life."
      />

      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="space-y-4">
          {weeks.map((week, idx) => (
            <div key={idx}>
              {week.available ? (
                <Link
                  href={week.path}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-background border border-border p-6 rounded-3xl hover:border-primary hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                      {week.label}
                    </h3>
                  </div>
                  <div className="shrink-0">
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ) : (
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-background border border-border p-6 rounded-3xl opacity-60">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-display text-foreground">
                      {week.label}
                    </h3>
                  </div>
                  <div className="shrink-0">
                    <span className="text-sm font-medium text-muted-foreground">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
