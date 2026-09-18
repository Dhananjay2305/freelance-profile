import React from "react";
import { workProcess } from "../data/process";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HowIWork({ onStartProject }) {
  const handleCta = (e) => {
    e.preventDefault();
    if (onStartProject) {
      onStartProject();
    } else {
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Development Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            How I Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A transparent four-phase process ensuring zero surprises, continuous feedback, and reliable deployment.
          </p>
        </div>

        {/* 4 Steps Horizontal / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {workProcess.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                    Phase {idx + 1}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Sub-details */}
              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                {item.details}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleCta}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
