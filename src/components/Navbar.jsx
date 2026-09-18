import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Menu, X, Sun, Moon, Sparkles, ArrowRight } from "lucide-react";

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", target: "hero" },
    { label: "Services", target: "services" },
    { label: "Projects", target: "projects" },
    { label: "Skills", target: "skills" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "pt-4 px-4 sm:px-6 lg:px-8" : "pt-6 px-4 sm:px-6 lg:px-8"
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled 
            ? "glass-nav bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl py-2.5 px-4 sm:px-6" 
            : "bg-transparent py-2 px-2"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold font-mono text-base shadow-sm group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white font-mono group-hover:text-emerald-500 transition-colors">
              {siteConfig.navBrand || "Dhananjay.dev"}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium -mt-1 hidden sm:inline-block">
              Full-Stack & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              className="relative px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group"
            >
              {link.label}
              {/* Subtle active indicator under Home (mocked as always active for demonstration on Home, but hidden otherwise) */}
              {link.label === "Home" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Action Area */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          {/* Hire Me CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm shadow-sm hover:shadow-emerald-500/20 hover:shadow-lg transition-all active:scale-95"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile controls: Theme toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-4 sm:mx-6 rounded-2xl glass-nav bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 px-4 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-200/50 dark:border-slate-800/50">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm shadow-sm transition-all"
              >
                <span>Hire Me for a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
