# Dhananjay.dev — Freelance Full-Stack & AI Developer Portfolio

A modern, high-converting, professional freelance developer portfolio website designed for **Dhananjay** (Full-Stack & AI Developer). Built to showcase real-world projects, demonstrate technical capability, and convert visitors into freelance clients.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ⚙️ Central Configuration (Easy Updates)

All personal data, links, contact info, and projects are centralized in dedicated files:

### 1. Personal & Contact Settings
**File:** `src/config/site.js`
```javascript
export const siteConfig = {
  name: "Dhananjay",
  title: "Full-Stack Developer & AI Developer",
  email: "YOUR_EMAIL@gmail.com",
  whatsappNumber: "919876543210", // International format without + or spaces
  whatsappDisplay: "+91 98765 43210",
  github: "https://github.com/Dhananjay2305",
  linkedin: "https://www.linkedin.com/in/YOUR_PROFILE",
  availability: true,
  availabilityBadge: "Available for Freelance Projects",
  // ...
};
```

### 2. Adding / Modifying Projects
**File:** `src/data/projects.js`
To add a new project, simply append an object to the `projectsData` array:
```javascript
{
  id: "new-project",
  name: "Your Project Name",
  category: "Full-Stack / SaaS",
  filterCategories: ["Web", "Full-Stack"],
  description: "Brief overview of what this application does.",
  technologies: ["React", "Spring Boot", "PostgreSQL"],
  liveUrl: "https://your-demo-url.vercel.app", // Set to null if pending
  githubUrl: "https://github.com/YourUsername/repo", // Set to null if private
  featured: true,
  hasLiveDemo: true,
  hasGitHub: true,
  caseStudy: {
    tagline: "...",
    overview: "...",
    problem: "...",
    solution: "...",
    keyFeatures: [...],
    technologiesUsed: [...],
    developmentProcess: [...],
    challenges: "...",
    outcome: "..."
  }
}
```
The portfolio will automatically render the project card, enable filter tags, and wire up the interactive case study modal.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism System
- **Icons**: Lucide React + Custom SVG Brand Logos
- **Fonts**: Plus Jakarta Sans + JetBrains Mono
- **Deployment**: Vercel ready (`vercel.json` included)

---

## 📋 Features Included

1. **Sticky Glass Navbar**: Scroll-aware blur effect, active navigation, Dark/Light mode toggle, and mobile drawer.
2. **High-Converting Hero**: Clear value proposition, availability badge with live ping, primary & secondary CTAs, WhatsApp quick chat, and modern code architecture visualization.
3. **Core Freelance Services**: 5 service offerings (Business Websites, React Web Apps, Java & Spring Boot, AI Applications, Website Improvements) with tailored action triggers.
4. **Client-Focused Solutions**: 10 distinct business use cases ("What Can I Build For Your Business?") with direct discussion prompts.
5. **Featured Projects**: Real project links for KisanBazaar, Bhoomi AI, and DayPilot AI with active/disabled state handling (no fake URLs).
6. **Case Study Modal**: Comprehensive modal with Problem, Solution, Key Features, Architecture, Challenges, and Outcomes.
7. **Transparent Skills**: Grouped technical badges without misleading percentage bars.
8. **Development Roadmap**: 4-phase "How I Work" process (Understand, Plan, Build, Launch).
9. **Transparent Scoping**: Honest explanation of project estimation with estimate request CTA.
10. **Dual-Dispatch Contact Form**: Direct pre-filled Mailto or instant 1-click WhatsApp messaging.
11. **Mobile Floating WhatsApp**: Accessible floating trigger for mobile visitors.
