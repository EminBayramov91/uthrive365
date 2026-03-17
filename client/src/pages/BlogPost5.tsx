import MainLayout from "@/components/layout/MainLayout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function BlogPost5() {
  return (
    <MainLayout>
      {/* Back Link */}
      <div className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-border">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            What You Keep Tolerating Will Keep Writing Your Future
          </h1>
          <p className="text-lg text-muted-foreground">
            2-minute read
          </p>
        </div>

        {/* Content Area */}
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          {/* Content will be added here */}
        </div>
      </article>
    </MainLayout>
  );
}
