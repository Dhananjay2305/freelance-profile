import React, { useState } from "react";
import { projectsData, projectFilterCategories } from "../data/projects";
import CaseStudyModal from "./CaseStudyModal";
import { 
  ExternalLink, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Code2, 
  Sprout, 
  Bot, 
  Calendar 
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";

// Visual preview banner for each project
function ProjectHeaderVisual({ project }) {
  const getIcon = () => {
    if (project.id === "kisanbazaar") return <Sprout className="w-8 h-8 text-emerald-500" />;
    if (project.id === "bhoomi-ai") return <Bot className="w-8 h-8 text-teal-400" />;
    return <Calendar className="w-8 h-8 text-indigo-400" />;
  };

  const getGradient = () => {
    if (project.id === "kisanbazaar") return "from-emerald-900/40 via-slate-900 to-slate-950";
    if (project.id === "bhoomi-ai") return "from-teal-900/40 via-slate-900 to-slate-950";
    return "from-indigo-900/40 via-slate-900 to-slate-950";
  };

  return (
    <div className={`relative h-44 w-full bg-gradient-to-br ${getGradient()} p-5 flex flex-col justify-between overflow-hidden border-b border-slate-200 dark:border-slate-800`}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Top badges */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 text-white text-[11px] font-medium">
          <Layers className="w-3 h-3 text-emerald-400" />
          {project.category}
        </span>

        {project.hasLiveDemo ? (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            LIVE
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 text-[10px] font-semibold">
            IN DEV
          </span>
        )}
      </div>

      {/* Center Icon & Branding */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-lg">
          {getIcon()}
        </div>
        <div>
          <h4 className="font-bold text-lg text-white font-mono tracking-tight">
            {project.name}
          </h4>
          <span className="text-xs text-slate-400">
            {project.technologies.slice(0, 3).join(" • ")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === "All") return true;
    return project.filterCategories.includes(selectedFilter);
  });

  return (
    <section id="projects" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Featured Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects I've Built
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real applications demonstrating my experience in web development, AI and full-stack technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectFilterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedFilter === category
                  ? "bg-emerald-600 dark:bg-emerald-500 text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200"
            >
              {/* Card Media Header */}
              <ProjectHeaderVisual project={project} />

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  {/* Primary Link Row: Live Demo + GitHub */}
                  <div className="grid grid-cols-2 gap-2">
                    {project.hasLiveDemo && project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-medium cursor-not-allowed opacity-75"
                        title="Live demo link is not currently deployed"
                      >
                        <Clock className="w-3 h-3" />
                        <span>Demo Soon</span>
                      </button>
                    )}

                    {project.hasGitHub && project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-medium cursor-not-allowed opacity-75"
                        title="Repository link is private or pending release"
                      >
                        <GithubIcon className="w-3 h-3" />
                        <span>GitHub Soon</span>
                      </button>
                    )}
                  </div>

                  {/* Case Study Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setActiveCaseStudy(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                    <span>View Case Study</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeCaseStudy && (
        <CaseStudyModal
          project={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
        />
      )}
    </section>
  );
}
