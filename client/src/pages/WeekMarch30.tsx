import MainLayout from "@/components/layout/MainLayout";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function WeekMarch30() {
  const articles = [
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
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12">
          Week of March 30, 2026
        </h1>

        <div className="space-y-4">
          {articles.map((article, idx) => (
            <Link
              key={idx}
              href={article.path}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-background border border-border p-6 rounded-3xl hover:border-primary hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                  {article.title}
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
    </MainLayout>
  );
}
