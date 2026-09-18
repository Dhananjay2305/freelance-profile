import React from "react";
import { siteConfig } from "../config/site";
import { 
  GraduationCap, 
  Code, 
  Bot, 
  Briefcase, 
  CheckCircle2, 
  Terminal, 
  Compass 
} from "lucide-react";

export default function About() {
  const roleBadges = [
    { title: "B.Tech Student", icon: GraduationCap, note: "Computer Science background" },
    { title: "Full-Stack Developer", icon: Code, note: "React, Java & REST architecture" },
    { title: "AI Application Developer", icon: Bot, note: "LLM APIs & Automation" },
    { title: "Freelance Developer", icon: Briefcase, note: "Available for client projects" }
  ];

  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual/Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-7 relative border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white text-2xl font-bold font-mono shadow-md">
                  D
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {siteConfig.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {siteConfig.roleSubtitle}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                    Available for Remote Contracts
                  </span>
                </div>
              </div>

              {/* Verified Attributes */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                {roleBadges.map((role, idx) => {
                  const Icon = role.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-xs text-slate-800 dark:text-slate-200">
                          {role.title}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {role.note}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Background & Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 mb-6">
              About Me
            </h2>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I'm Dhananjay, a Full-Stack Developer interested in building practical web applications and AI-powered products.
              </p>
              <p>
                My experience includes developing projects across web development, AI, smart farming and startup-focused applications.
              </p>
              <p>
                I enjoy turning ideas into working products and continuously improving my skills in modern software development.
              </p>
            </div>

            {/* Philosophy highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white mb-1">
                  <Terminal className="w-4 h-4 text-emerald-500" />
                  <span>Pragmatic Engineering</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Focusing on simple architectures that solve real operational friction without unnecessary bloat.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white mb-1">
                  <Compass className="w-4 h-4 text-teal-500" />
                  <span>Continuous Learning</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Staying on top of contemporary AI APIs, frontend frameworks, and cloud deployment pipelines.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
