import { Link } from "wouter";
import { Mail } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10 mt-24 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-8 mb-8">
          <div className="flex-1 space-y-4">
            <div className="font-display font-bold text-2xl tracking-tight text-accent">
              U Thrive 365
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/uthrive365" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F1EA] text-primary shadow-md hover:bg-white hover:shadow-lg transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/uthrive365" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F1EA] text-primary shadow-md hover:bg-white hover:shadow-lg transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="font-display font-semibold text-base mb-4 text-accent">Get in Touch</h4>
            <div className="flex items-center gap-2 text-primary-foreground/80 text-base">
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
