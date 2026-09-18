import React from "react";
import { siteConfig } from "../config/site";
import { getWhatsAppUrl, getMailtoUrl } from "../config/contact";
import { Sparkles, MessageSquare, Mail, ArrowRight } from "lucide-react";

export default function FreelanceCTA({ onHireClick }) {
  const whatsappUrl = getWhatsAppUrl(
    `Hi ${siteConfig.name}, I have a project in mind and would love to get your thoughts on it.`
  );

  const emailUrl = getMailtoUrl({
    subject: `Project Inquiry for ${siteConfig.name}`,
    body: `Hi ${siteConfig.name},\n\nI have a project requirement and would like to discuss working together.\n\nProject details:\n\nLooking forward to hearing from you!`
  });

  const handleHire = (e) => {
    e.preventDefault();
    if (onHireClick) {
      onHireClick();
    } else {
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{siteConfig.availabilityBadge}</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Have a Project in Mind?
        </h2>

        {/* Supporting description */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you need a business website, React application, Java backend or AI-powered feature, let's discuss your idea and get it off the ground.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleHire}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-semibold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span>Hire Me</span>
            <Sparkles className="w-4 h-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-semibold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-emerald-500" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={emailUrl}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>Send Email</span>
          </a>
        </div>

      </div>
    </section>
  );
}
