import React from "react";
import { businessSolutions } from "../data/solutions";
import { ArrowUpRight } from "lucide-react";

export default function BusinessSolutions({ onSelectTopic }) {
  const handleClick = (solutionTitle) => {
    if (onSelectTopic) {
      onSelectTopic(solutionTitle);
    } else {
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Tailored Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              What Can I Build For Your Business?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Select a project type to explore ideas or initiate a scoping discussion.
            </p>
          </div>
        </div>

        {/* 10 Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {businessSolutions.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-5 flex flex-col justify-between group hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all cursor-pointer"
              onClick={() => handleClick(item.title)}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {item.tag}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <button
                type="button"
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 inline-flex items-center gap-1 mt-auto pt-2 border-t border-slate-100 dark:border-slate-800/80 text-left"
              >
                <span>Discuss This Project</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
