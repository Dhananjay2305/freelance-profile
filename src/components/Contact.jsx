import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { contactConfig, getWhatsAppUrl, getMailtoUrl } from "../config/contact";
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  AlertCircle 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const projectTypes = [
  "Business Website",
  "React Web Application",
  "Java & Spring Boot Backend",
  "AI-Powered Feature / Chatbot",
  "Website Improvement / Bug Fix",
  "Other / Custom Project"
];

const budgetRanges = [
  "Under $500 / ₹40,000",
  "$500 - $1,500 / ₹40,000 - ₹1,20,000",
  "$1,500 - $3,000 / ₹1,20,000 - ₹2,50,000",
  "$3,000+ / Custom Scope",
  "Flexible / Need Scoping First"
];

export default function Contact({ selectedTopic }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Business Website",
    budgetRange: "Under $500 / ₹40,000",
    message: ""
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Auto-fill project type if selected from another section
  useEffect(() => {
    if (selectedTopic) {
      setFormData((prev) => ({
        ...prev,
        projectType: selectedTopic,
        message: prev.message || `Hi Dhananjay, I'm reaching out regarding ${selectedTopic}.`
      }));
    }
  }, [selectedTopic]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Prepares the formatted message
  const inquirySummary = `Hi ${siteConfig.name},\n\nI'm ${formData.name} (${formData.email}).\nI'd like to discuss a project:\n- Project Type: ${formData.projectType}\n- Budget Range: ${formData.budgetRange}\n\nProject Overview:\n${formData.message || "Looking forward to hearing your suggestions."}`;

  const directMailtoUrl = getMailtoUrl({
    subject: `[Freelance Inquiry] ${formData.projectType} - ${formData.name}`,
    body: inquirySummary
  });

  const directWhatsAppUrl = getWhatsAppUrl(
    `Hi ${siteConfig.name}, I am ${formData.name || "a client"} (${formData.email || "Email pending"}). I'm inquiring about: ${formData.projectType} (Budget: ${formData.budgetRange}). Details: ${formData.message || "Let's connect"}`
  );

  return (
    <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Let's Build Something
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Have a project in mind, need a quote, or want to discuss technical feasibility? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Direct Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 flex items-start justify-between group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400">Email Me</div>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors break-all"
                  >
                    {contactConfig.email}
                  </a>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Typically replies within 12-24 hours
                  </div>
                </div>
              </div>
              <button
                onClick={copyEmail}
                title="Copy email to clipboard"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <a
              href={getWhatsAppUrl(`Hi ${siteConfig.name}, I found your portfolio and would like to discuss a project.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 sm:p-6 flex items-center justify-between group hover:border-emerald-500/50 transition-all block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400">Direct WhatsApp</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {contactConfig.whatsappDisplay}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Fastest for quick project chats
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={contactConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 sm:p-6 flex items-center justify-between group hover:border-emerald-500/50 transition-all block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400">LinkedIn Profile</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    Connect on LinkedIn
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Professional networking & endorsements
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={contactConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 sm:p-6 flex items-center justify-between group hover:border-emerald-500/50 transition-all block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-500/10 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400">GitHub Repositories</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    github.com/Dhananjay2305
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Explore code, commits & implementations
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </a>

          </div>

          {/* Right: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill in the details below to dispatch your message directly via Email or WhatsApp.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Project Type & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300 mb-1.5">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300 mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300 mb-1.5">
                    Project Overview / Message *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what you're looking to build, desired timeline, or any reference links..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 resize-y"
                  ></textarea>
                </div>

                {/* Action Confirmation / Launchers */}
                <div className="pt-2">
                  {!submitted ? (
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all active:scale-[0.99]"
                    >
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 space-y-3 animate-in fade-in duration-150">
                      <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>Ready to send! Choose your preferred channel:</span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <a
                          href={directWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Send via WhatsApp</span>
                        </a>

                        <a
                          href={directMailtoUrl}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 text-white text-xs font-bold transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Open in Email App</span>
                        </a>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-[11px] text-slate-500 dark:text-slate-400 hover:underline block text-center w-full pt-1"
                      >
                        Edit inquiry details
                      </button>
                    </div>
                  )}
                </div>

                {/* Transparency Notice */}
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                  <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span>Your message is generated directly with zero tracking or unsolicited follow-ups.</span>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
