import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";
import { useState } from "react";
import { AlertCircle, Mail, Send } from "lucide-react";
import { api } from "@shared/routes";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      inquiryType: String(formData.get("inquiryType") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch(api.contact.path, {
        method: api.contact.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || "Message could not be sent. Please try again.");
      }

      api.contact.responses[200].parse(data);
      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Message could not be sent. Please try again.");
      setStatus("error");
    }
  };

  return (
    <MainLayout>
      <PageHeader 
        title="Contact U Thrive 365" 
        description="Questions, ideas, or simply want to reach out? I'd love to hear from you."
      />

      <div className="max-w-5xl mx-auto px-4 pb-24 flex flex-col md:flex-row gap-16">
        {/* Contact Info */}
        <div className="w-full md:w-1/3 space-y-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <a href="mailto:hello@uthrive365.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-[#B8A58C]" />
                <span>hello@uthrive365.com</span>
              </a>
            </div>
          </div>
          
          <div className="p-8 bg-secondary/30 rounded-2xl border border-border space-y-4">
            <h4 className="font-bold text-foreground text-lg">A Thoughtful Space</h4>
            <p className="text-base text-foreground leading-relaxed">Whether you have a question about the PEM Wheel, foundational resources, future offerings, or simply want to connect, feel free to reach out.</p>
            <p className="text-sm text-foreground/80 leading-relaxed">This space is being built thoughtfully and intentionally. Thank you for your patience as U Thrive 365 grows.</p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-2/3 bg-background border border-border rounded-3xl p-8 shadow-sm">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-[#B8A58C]/20 text-[#B8A58C] rounded-full flex items-center justify-center mb-6">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold text-primary mb-2">Message Sent</h3>
              <p className="text-muted-foreground text-lg">Thank you. I'll be in touch soon.</p>
              <button 
                onClick={() => {
                  setErrorMessage("");
                  setStatus("idle");
                }}
                className="mt-8 text-primary font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-semibold text-foreground">Name</label>
                  <input id="contact-name" name="name" required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-semibold text-foreground">Email</label>
                  <input id="contact-email" name="email" required type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="jane@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="contact-inquiry-type" className="text-sm font-semibold text-foreground">Inquiry Type</label>
                <select id="contact-inquiry-type" name="inquiryType" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option>General Question</option>
                  <option>PEM Wheel</option>
                  <option>Foundational Resources</option>
                  <option>Future Offerings</option>
                  <option>Collaboration / Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-semibold text-foreground">Message</label>
                <textarea id="contact-message" name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="How can I help?"></textarea>
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 hover:shadow-lg transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              <p className="text-xs text-muted-foreground/60 text-center">
                I may not be able to respond immediately, but every message is read with care.
              </p>
            </form>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
