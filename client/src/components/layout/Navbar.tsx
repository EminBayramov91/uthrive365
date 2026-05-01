import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import navbarLogo from "@assets/Mark-green_1776959949709.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Start Here", path: "/start" },
    { label: "About", path: "/about" },
    { label: "Foundational Resources", path: "/resources" },
    { label: "Book", path: "/book" },
    { label: "Blog", path: "/blog" },
    { label: "PEM Assessment", path: "/pem" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="sticky top-0 w-full z-50 transition-all duration-300 bg-[#EEF3F1] border-b border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.06)] py-3 xl:py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5 group xl:gap-3">
            <img src={navbarLogo} alt="U Thrive 365 logo" className="h-10 w-10 shrink-0 object-contain xl:h-11 xl:w-11" />
            <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-[#3F5F56] xl:text-xl">
              U Thrive 365
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex min-w-0 items-center justify-end gap-3 min-[1180px]:gap-4 xl:gap-5 2xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`whitespace-nowrap text-[0.82rem] font-medium transition-all duration-200 hover:text-[#2D453E] hover:underline underline-offset-4 decoration-2 min-[1180px]:text-[0.88rem] xl:text-[0.9rem] 2xl:text-[0.95rem] ${
                  location === link.path ? "text-[#3F5F56] underline" : "text-[#3F5F56]/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/spin"
              role="button"
              className="shrink-0 whitespace-nowrap bg-[#3F5E54] text-[#F4F1EA] px-4 py-2.5 rounded-full text-[0.82rem] font-semibold hover:bg-[#3F5E54]/90 hover:text-[#F4F1EA] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md min-[1180px]:text-[0.88rem] xl:px-5 xl:text-[0.9rem] 2xl:px-6 2xl:text-[0.95rem]"
            >
              Daily Spin
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden text-[#3F5F56] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full max-h-[calc(100vh-72px)] overflow-y-auto bg-background border-b border-border shadow-xl lg:hidden"
          >
            <nav className="flex flex-col py-4 px-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-4 rounded-xl text-base font-medium transition-colors ${
                    location === link.path
                      ? "bg-primary/5 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/spin"
                onClick={() => setIsMobileMenuOpen(false)}
                role="button"
                className="mt-4 bg-[#3F5E54] text-[#F4F1EA] text-center p-4 rounded-xl text-base font-semibold hover:bg-[#3F5E54]/90 transition-colors shadow-md"
              >
                Daily Spin
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
