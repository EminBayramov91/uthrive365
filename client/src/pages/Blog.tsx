import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const weeklyPosts = [
    {
      title: "Do Not Confuse Familiar with Right",
      path: "/blog/post-1"
    },
    {
      title: "Why Clarity Matters More Than Motivation",
      path: "/blog/post-2"
    },
    {
      title: "A Life Can Look Successful and Still Feel Wrong",
      path: "/blog/post-3"
    },
    {
      title: "Small Shifts Build the Life Big Promises Never Could",
      path: "/blog/post-4"
    },
    {
      title: "What You Keep Tolerating Will Keep Writing Your Future",
      path: "/blog/post-5"
    }
  ];

  return (
    <MainLayout>
      <PageHeader 
        title="Articles & Insights" 
        description="Short articles and practical insights for building a stronger, clearer, more intentional life."
      />

      <div className="max-w-4xl mx-auto px-4 pb-24">
        {/* Weekly Block */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-primary mb-8">
            Week of March 30, 2026
          </h2>
          
          <div className="space-y-4">
            {weeklyPosts.map((post, idx) => (
              <Link
                key={idx}
                href={post.path}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-background border border-border p-6 rounded-3xl hover:border-primary hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    2-minute read
                  </p>
                </div>
                <div className="shrink-0">
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
