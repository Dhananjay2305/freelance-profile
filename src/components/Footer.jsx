import React from "react";
import { siteConfig } from "../config/site";
import { contactConfig, getWhatsAppUrl } from "../config/contact";
import { MessageSquare, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", target: "hero" },
    { label: "Services", target: "services" },
    { label: "Projects", target: "projects" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" }
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold font-mono text-sm">
                D
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white font-mono">
                {siteConfig.navBrand}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-sm mb-4">
              {siteConfig.roleSubtitle}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              Available for freelance contracts, full-stack web builds, backend systems in Java & Spring Boot, and AI integrations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <a
                    href={`#${link.target}`}
                    onClick={(e) => handleNavClick(e, link.target)}
                    className="hover:text-emerald-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Social */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Connect Directly
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={contactConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={contactConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl(`Hi ${siteConfig.name}, I'm reaching out through your website.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
