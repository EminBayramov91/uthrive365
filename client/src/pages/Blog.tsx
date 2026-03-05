import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";

export default function Blog() {
  const posts = [
    {
      title: "The Architecture of a Shutdown Sequence",
      date: "Oct 12, 2023",
      category: "Frameworks",
      isWitty: true
    },
    {
      title: "Why 'Just Pushing Through' is Bad Math",
      date: "Oct 05, 2023",
      category: "Mental State",
      isWitty: false
    },
    {
      title: "Somatic Anchoring for High-Stress Scenarios",
      date: "Sep 28, 2023",
      category: "Physical State",
      isWitty: false
    },
    {
      title: "Auditing Your Energy Portfolio",
      date: "Sep 21, 2023",
      category: "Frameworks",
      isWitty: true
    },
    {
      title: "The Myth of Balance (And What to Seek Instead)",
      date: "Sep 14, 2023",
      category: "Philosophy",
      isWitty: false
    },
    {
      title: "Micro-Dosing Rest Throughout the Day",
      date: "Sep 07, 2023",
      category: "Habits",
      isWitty: true
    }
  ];

  return (
    <MainLayout>
      <PageHeader 
        title="Journal & Insights" 
        description="Essays, frameworks, and micro-modules to upgrade your system."
      />

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article 
              key={idx} 
              className="group flex flex-col bg-background border border-border p-6 rounded-3xl hover-elevate cursor-pointer h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-secondary text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              
              <h3 className="text-2xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              
              <div className="mt-auto pt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">2-minute read</span>
                {post.isWitty && (
                  <span className="text-xs font-medium text-accent italic bg-accent/10 px-2 py-1 rounded-md">
                    Witty Wednesday
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
