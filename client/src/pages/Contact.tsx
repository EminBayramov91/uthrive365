import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Mock submission
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <MainLayout>
      <PageHeader 
        title="Connect & Collaborate" 
        description="Whether you're looking for speaking engagements, workshops, or 1:1 recalibration."
      />

      <div className="max-w-5xl mx-auto px-4 pb-24 flex flex-col md:flex-row gap-16">
        {/* Contact Info */}
        <div className="w-full md:w-1/3 space-y-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Direct Lines</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-accent" />
                <span>hello@recalibrate.os</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="w-5 h-5 text-accent" />
                <span>@recalibrate.os</span>
              </a>
            </div>
          </div>
          
          <div className="p-6 bg-secondary/30 rounded-2xl border border-border">
            <h4 className="font-bold text-foreground mb-2">Speaking Inquiries</h4>
            <p className="text-sm text-muted-foreground mb-4">Looking for a paradigm-shifting talk on sustainable performance?</p>
            <a href="#" className="text-sm font-bold text-primary hover:text-accent transition-colors underline underline-offset-4">
              Download Media Kit
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-2/3 bg-background border border-border rounded-3xl p-8 shadow-sm">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-6">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold text-primary mb-2">Message Sent</h3>
              <p className="text-muted-foreground text-lg">I'll get back to you within 48 hours.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-primary font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="jane@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Inquiry Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option>General Question</option>
                  <option>Speaking Engagement</option>
                  <option>1:1 Coaching</option>
                  <option>Corporate Workshop</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="Tell me about your current operating system..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 hover:shadow-lg transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
