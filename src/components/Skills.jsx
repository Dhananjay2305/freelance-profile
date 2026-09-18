import React from "react";
import { skillsData } from "../data/skills";
import { Code, Database, Server, Cpu, Wrench } from "lucide-react";

const categoryIcons = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  "AI & Automation": Cpu,
  "Tools & Workflow": Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Skills & Technology Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A practical, modern toolkit selected for high developer velocity, reliability, and enterprise maintainability.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryGroup, idx) => {
            const Icon = categoryIcons[categoryGroup.category] || Code;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {categoryGroup.category}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {categoryGroup.description}
                      </p>
                    </div>
                  </div>

                  {/* Badges/Skill Items */}
                  <div className="space-y-2.5">
                    {categoryGroup.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 flex items-center justify-between hover:border-emerald-500/40 transition-colors"
                      >
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                          {skill.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
