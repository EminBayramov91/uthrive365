import { Link } from "wouter";
import { Compass, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10 mt-24 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-8">
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-accent" />
              <span className="font-display font-bold text-2xl tracking-tight">
                uThrive 365
              </span>
            </Link>
            <p className="text-primary-foreground/80 max-w-lg text-sm leading-relaxed">
              Is there more life in you than the life you're living right now?
            </p>
          </div>

          <div className="min-w-0">
            <h4 className="font-display font-semibold text-base mb-4 text-accent">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Home</Link></li>
              <li><Link href="/start" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Start Here</Link></li>
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-4 text-accent">Get in Touch</h4>
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <Mail className="w-4 h-4" />
              <span>hello@uthrive365.com</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} U Thrive 365. All rights reserved.
          </p>
          <div className="flex gap-6 text-primary-foreground/60">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
