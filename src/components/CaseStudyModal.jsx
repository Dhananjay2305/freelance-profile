import React, { useEffect } from "react";
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function CaseStudyModal({ project, onClose }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            {project.category}
          </div>
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {project.name}
          </h3>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1">
            {caseStudy.tagline}
          </p>
        </div>

        {/* Action Links Bar */}
        <div className="flex flex-wrap items-center gap-3 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
          {project.hasLiveDemo && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
            >
              <span>Visit Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-medium cursor-not-allowed">
              Demo Coming Soon
            </span>
          )}

          {project.hasGitHub && project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-medium cursor-not-allowed">
              GitHub Coming Soon
            </span>
          )}
        </div>

        {/* Modal Body */}
        <div className="space-y-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          
          {/* Project Video (if available) */}
          {project.videoUrl && (
            <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-100 dark:bg-slate-900">
              <video 
                src={project.videoUrl} 
                controls 
                autoPlay 
                muted 
                loop 
                className="w-full h-auto max-h-[450px] object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Overview
            </h4>
            <p>{caseStudy.overview}</p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <h5 className="font-bold text-amber-700 dark:text-amber-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> The Problem
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {caseStudy.problem}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <h5 className="font-bold text-emerald-700 dark:text-emerald-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> The Solution
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Technology Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {caseStudy.technologiesUsed.map((tech, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{tech.name}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-[11px]">{tech.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Development Process
            </h4>
            <ol className="space-y-2">
              {caseStudy.developmentProcess.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Challenges & Outcome */}
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <div>
              <span className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Technical Challenge
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{caseStudy.challenges}</p>
            </div>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60">
              <span className="font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                Outcome
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{caseStudy.outcome}</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
