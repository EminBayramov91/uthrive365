import { Link } from "wouter";
import { Compass, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 mt-24 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-accent" />
              <span className="font-display font-bold text-2xl tracking-tight">
                Recalibrate
              </span>
            </Link>
            <p className="text-primary-foreground/80 max-w-sm text-lg leading-relaxed">
              Reduce energy leaks, restore flow, and thrive 365—one small shift at a time.
            </p>
            <div className="flex gap-4 pt-2">
              <button className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-accent">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/start" className="text-primary-foreground/80 hover:text-white transition-colors">Start Here</Link></li>
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">About the Method</Link></li>
              <li><Link href="/blog" className="text-primary-foreground/80 hover:text-white transition-colors">Journal & Insights</Link></li>
              <li><Link href="/spin" className="text-primary-foreground/80 hover:text-white transition-colors">Daily Spin</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-accent">Connect</h4>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">Work with Me</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">Speaking</Link></li>
              <li className="flex items-center gap-2 text-primary-foreground/80 mt-6 pt-6 border-t border-white/10">
                <Mail className="w-4 h-4" />
                <span>hello@recalibrate.os</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Recalibrate OS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
