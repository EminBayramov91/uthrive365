import { Link, useLocation } from "wouter";
import { Menu, X, Compass } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Start Here", path: "/start" },
    { label: "About", path: "/about" },
    { label: "Foundational Resources", path: "/resources" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 w-full z-50 transition-all duration-300 bg-[#EEF3F1] border-b border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.06)] py-3.5 md:py-[18px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Compass className="w-8 h-8 text-[#3F5F56] group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-display font-bold text-xl tracking-tight text-[#3F5F56]">
              uThrive 365
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-[#2D453E] hover:underline underline-offset-4 decoration-2 ${
                  location === link.path ? "text-[#3F5F56] underline" : "text-[#3F5F56]/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/spin"
              role="button"
              className="bg-[#3F5E54] text-[#F4F1EA] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3F5E54]/90 hover:text-[#F4F1EA] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md"
            >
              Daily Spin
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#3F5F56] p-2"
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
            className="absolute top-full left-0 w-full bg-background border-b border-border shadow-xl md:hidden"
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
