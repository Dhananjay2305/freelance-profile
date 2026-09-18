import React from "react";
import { Calculator, ArrowRight, ShieldAlert, Check } from "lucide-react";

export default function PricingEstimate({ onGetEstimate }) {
  const handleEstimateClick = () => {
    if (onGetEstimate) {
      onGetEstimate();
    } else {
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-200 dark:border-slate-800">
          
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Calculator className="w-3.5 h-3.5 text-emerald-500" />
                <span>Transparent Scoping</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Every project is different.
              </h2>
              
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Rather than generic fixed packages that don't fit your scope, share your specific requirements and I'll suggest a realistic technical approach, timeline, and upfront estimate.
              </p>

              <div className="mt-5 flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> Fixed-price milestones
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> No hidden fees
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> Clear code ownership
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={handleEstimateClick}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-semibold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Get a Project Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
