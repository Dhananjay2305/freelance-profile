import React from "react";
import { Cpu, Target, Smartphone, MessageCircle } from "lucide-react";

export default function WhyWorkWithMe() {
  const cards = [
    {
      icon: Cpu,
      title: "Modern Technology",
      description: "React, Java, Spring Boot and AI. Using contemporary, battle-tested tools to build fast, scalable applications.",
      color: "emerald"
    },
    {
      icon: Target,
      title: "Business-Focused",
      description: "I focus on solving the actual business requirement, not just writing code. Every feature serves a clear user or commercial purpose.",
      color: "teal"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Websites work across mobile, tablet and desktop. Meticulously designed for touch devices, compact screens, and desktops alike.",
      color: "cyan"
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Simple and clear communication throughout the project. Regular updates, transparent timelines, and prompt responses.",
      color: "indigo"
    }
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Client Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Why Work With Me?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A developer who values clear delivery, code quality, and honest partnership.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 flex flex-col justify-start group hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
