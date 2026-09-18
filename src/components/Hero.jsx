import React from "react";
import { siteConfig } from "../config/site";
import { getWhatsAppUrl } from "../config/contact";
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Globe, 
  Server, 
  Cpu, 
  Zap, 
  Rocket, 
  Heart,
  Database,
  Cloud,
  BrainCircuit,
  Code
} from "lucide-react";

export default function Hero({ onOpenContact }) {
  const whatsappLink = getWhatsAppUrl(
    `Hi ${siteConfig.name}, I found your portfolio and would like to discuss a freelance project.`
  );

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white dark:bg-[#0b1120]">
      {/* Background ambient lighting & gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 blur-[100px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] rounded-full bg-teal-500/10 dark:bg-teal-500/20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left animate-in fade-in slide-in-from-bottom-8 duration-700">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold tracking-wide mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              AVAILABLE FOR FREELANCE PROJECTS
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101828] dark:text-white leading-[1.1] mb-6">
              Building Modern <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                Web & AI Solutions
              </span> <br className="hidden sm:block" />
              for Businesses
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-[650px] mb-8 font-medium">
              I'm Dhananjay, a Full-Stack Developer specializing in React, Java, Spring Boot and AI-powered applications. I help startups and businesses turn ideas into modern, responsive digital products.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#101828] hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-emerald-500 bg-transparent hover:bg-emerald-50 text-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-500/10 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <span>Hire Me</span>
                <Sparkles className="w-4 h-4" />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm shadow-sm transition-all hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-emerald-500" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Credibility Indicators */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 w-full flex flex-col sm:flex-row gap-6 sm:gap-8">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-bold text-sm">
                  <Zap className="w-4 h-4 text-emerald-500" />
                  Clean Code
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">Scalable & Maintainable</span>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-800"></div>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-bold text-sm">
                  <Rocket className="w-4 h-4 text-emerald-500" />
                  Fast Delivery
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">On Time, Every Time</span>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-800"></div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-bold text-sm">
                  <Heart className="w-4 h-4 text-emerald-500" />
                  Client Satisfaction
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">Your Success, My Priority</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Dashboard Card */}
          <div className="lg:col-span-5 w-full relative perspective-1000 mt-10 lg:mt-0 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none transform transition-transform duration-700 lg:rotate-y-[-10deg] lg:rotate-x-[5deg] hover:rotate-0">
              
              {/* Handwritten annotation (desktop only) */}
              <div className="absolute -top-10 -right-8 text-emerald-600 dark:text-emerald-400 font-['Caveat',cursive,sans-serif] text-sm -rotate-12 hidden lg:block italic">
                Turning ideas into real products ↗
              </div>

              {/* Glow backdrop */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-20 blur-2xl"></div>
              
              {/* Terminal / System Architecture Card */}
              <div className="relative rounded-2xl border border-slate-700/50 bg-[#0f172a]/95 backdrop-blur-sm shadow-2xl overflow-hidden font-mono text-xs">
                
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#1e293b]/90 border-b border-slate-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>&gt;_ dhananjay-runtime.sh</span>
                  </div>
                  <div className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                    STATUS: READY
                  </div>
                </div>

                {/* Architecture Pipeline */}
                <div className="p-5 space-y-4">
                  
                  {/* Layer 1: Frontend */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between text-white font-semibold mb-1.5">
                      <span className="flex items-center gap-2 text-emerald-400">
                        <Globe className="w-4 h-4" /> Frontend Tier
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">React + Vite + Tailwind</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                      Modern, responsive UI, client-side caching & instant page transitions.
                    </p>
                  </div>

                  {/* Layer 2: Backend */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between text-white font-semibold mb-1.5">
                      <span className="flex items-center gap-2 text-teal-400">
                        <Server className="w-4 h-4" /> Backend & APIs
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">Java / Spring Boot / REST</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                      Clean REST endpoints, transactional database queries & secure auth tokens.
                    </p>
                  </div>

                  {/* Layer 3: AI Layer */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between text-white font-semibold mb-1.5">
                      <span className="flex items-center gap-2 text-cyan-400">
                        <Cpu className="w-4 h-4" /> AI Integration Layer
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">LLM APIs & Automation</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                      Context-aware assistant pipelines, semantic processing & smart workflows.
                    </p>
                  </div>

                  {/* Live Metrics Footer */}
                  <div className="pt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-700/50 mt-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                      Deployment: Vercel / Cloud
                    </span>
                    <span className="font-mono text-emerald-400">0ms Latency</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* TECH STACK SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2">
            Tech Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Technologies I Work With
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mx-auto">
            Modern tools and frameworks to build scalable, high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {/* React */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all group">
            <Code className="w-8 h-8 text-[#61DAFB] mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">React</span>
          </div>

          {/* Java */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all group">
            <Server className="w-8 h-8 text-[#ED8B00] mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Java</span>
          </div>

          {/* Spring Boot */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all group">
            <Database className="w-8 h-8 text-[#6DB33F] mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Spring Boot</span>
          </div>

          {/* MySQL / PostgreSQL */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all group">
            <Database className="w-8 h-8 text-[#336791] mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">SQL Databases</span>
          </div>

          {/* AI / LLMs */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all group">
            <BrainCircuit className="w-8 h-8 text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">AI / LLMs</span>
          </div>

          {/* Vercel / Cloud */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all group">
            <Cloud className="w-8 h-8 text-slate-900 dark:text-white mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Vercel / Cloud</span>
          </div>
        </div>
      </div>

    </section>
  );
}
