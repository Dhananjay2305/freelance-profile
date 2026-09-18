/**
 * Centralized Project Architecture
 * 
 * To add a new project, simply add an object to this array.
 * The UI, category filter, and modal will automatically update.
 */
export const projectsData = [
  {
    id: "kisanbazaar",
    name: "KisanBazaar",
    category: "Full-Stack / Startup Platform",
    filterCategories: ["Web", "Full-Stack"],
    description: "A farmer-to-market platform designed to connect farmers directly with buyers, improve price transparency and simplify produce ordering.",
    image: "/images/kisanbazaar-preview.webp", // Fallback generated UI visual provided in component
    imageAlt: "KisanBazaar Farmer-to-Market Web Platform Interface",
    videoUrl: "/videos/kisanbazaar-video.mp4",
    technologies: ["React", "JavaScript", "Supabase", "PostgreSQL", "Vercel"],
    liveUrl: "https://kisanbazaar-five.vercel.app/",
    githubUrl: "https://github.com/Dhananjay2305/Farmer-to-Market-Web-Platform",
    featured: true,
    hasLiveDemo: true,
    hasGitHub: true,
    caseStudy: {
      tagline: "Connecting agriculture with modern digital commerce",
      overview: "KisanBazaar is a responsive farmer-to-market digital platform designed to bridge the gap between rural agricultural producers and urban buyers, facilitating direct transactions with clear price visibility.",
      problem: "Agricultural producers often struggle to reach buyers directly, facing fragmented market channels, lack of transparent pricing, and intermediary dependencies that diminish farmer returns.",
      solution: "KisanBazaar provides a digital marketplace where farmers can directly list produce with harvest details, while wholesale and retail buyers can discover fresh stock, review pricing, and initiate orders seamlessly.",
      keyFeatures: [
        "Farmer Listings: Easy publish flow for crops, quantity, and pricing",
        "Buyer Browsing: Clean categorized search for vegetables, fruits, and grains",
        "Transparent Produce Info: Harvest dates, shelf life, and location details",
        "Ordering Flow: Streamlined cart and checkout mechanism",
        "Farmer Profiles: Dedicated profile pages showcasing produce catalog and history",
        "Responsive Mobile-First UI: Optimized for farmers on smartphones in low-bandwidth conditions"
      ],
      technologiesUsed: [
        { name: "React.js", role: "Component-driven interactive frontend" },
        { name: "JavaScript (ES6+)", role: "Client-side state & business logic" },
        { name: "Supabase", role: "Postgres database, real-time subscriptions, and auth" },
        { name: "Vercel", role: "Edge deployment and continuous delivery" }
      ],
      developmentProcess: [
        "Identified key friction points in local farmer-buyer communications.",
        "Prototyped a mobile-first UI with straightforward navigation.",
        "Built schema in Supabase for farmers, listings, categories, and orders.",
        "Integrated client-side state handling and optimistic UI updates for instant feedback.",
        "Deployed to Vercel with automated continuous integration."
      ],
      challenges: "Designing an interface accessible to users with varying levels of digital literacy while ensuring snappy performance on 4G/3G mobile devices.",
      outcome: "Successfully launched a functional web platform connecting sellers with buyers with zero server maintenance overhead."
    }
  },
  {
    id: "bhoomi-ai",
    name: "Bhoomi AI",
    category: "AI + IoT / Smart Farming",
    filterCategories: ["AI", "IoT"],
    description: "An AI-powered smart farming assistant combining sensor data and intelligent recommendations to help farmers understand soil conditions, crop suitability and irrigation needs.",
    image: "/images/bhoomi-ai-preview.webp",
    imageAlt: "Bhoomi AI Smart Agriculture Sensor and AI Dashboard",
    videoUrl: "/videos/bhoomi-video.mp4",
    technologies: ["React", "AI", "IoT", "ESP32", "Sensors", "REST APIs"],
    liveUrl: "https://bhoomi-ai-seven.vercel.app",
    githubUrl: "https://github.com/Dhananjay2305/Bhoomi-AI",
    featured: true,
    hasLiveDemo: true,
    hasGitHub: true,
    caseStudy: {
      tagline: "Bridging hardware telemetry with intelligent agricultural advisory",
      overview: "Bhoomi AI is an intelligent agricultural advisory system that synthesizes environmental telemetry collected from IoT microcontrollers (ESP32) with AI model inferences to provide actionable crop and soil insights.",
      problem: "Traditional farming often relies on guesswork or generalized weather forecasts, leading to over-irrigation, suboptimal fertilizer usage, and unexpected crop stress.",
      solution: "Bhoomi AI combines real-time sensor measurements (soil moisture, temperature, humidity) with AI advisory models to deliver tailored recommendations for irrigation intervals and crop care.",
      keyFeatures: [
        "Hardware Integration: ESP32 telemetry ingestion for moisture and ambient metrics",
        "AI Diagnostic Assistant: Natural language insights explaining current soil status",
        "Irrigation Advisor: Data-driven recommendations to conserve water",
        "Crop Suitability Analysis: Suggestions matched to recorded soil parameters",
        "Diagnostic Dashboard: Intuitive visual trends for immediate decision making"
      ],
      technologiesUsed: [
        { name: "React.js", role: "Analytical dashboard and interactive query interface" },
        { name: "AI Advisory Integration", role: "Generative guidance based on structured soil inputs" },
        { name: "ESP32 & Sensors", role: "Physical hardware telemetry capture" },
        { name: "REST APIs", role: "Data communication bridge between hardware and frontend" }
      ],
      developmentProcess: [
        "Configured ESP32 microcontroller with sensor probes for telemetry capture.",
        "Engineered API pipeline to ingest and normalize sensor readings.",
        "Developed prompt engineering & reasoning layer to convert telemetry into non-technical advisory.",
        "Built responsive web dashboard for real-time monitoring and chat queries."
      ],
      challenges: "Ensuring fault tolerance against sensor noise and intermittent connectivity from rural agricultural hardware nodes.",
      outcome: "Demonstrated end-to-end telemetry-to-AI reasoning pipeline providing clear, non-technical agronomic advice."
    }
  },
  {
    id: "daypilot-ai",
    name: "DayPilot AI",
    category: "AI / Productivity",
    filterCategories: ["AI", "Web"],
    description: "An AI-powered executive assistant designed to help users understand meetings, schedules and daily tasks through a conversational interface.",
    image: "/images/daypilot-ai-preview.webp",
    imageAlt: "DayPilot AI Productivity Assistant Interface",
    videoUrl: "/videos/daypilot-video.mp4",
    technologies: ["React", "AI", "Google OAuth", "APIs", "Vercel"],
    liveUrl: "https://daypilot-ai-33xn.vercel.app/",
    githubUrl: null, // Configurable placeholder - button will say "GitHub Coming Soon"
    featured: true,
    hasLiveDemo: true,
    hasGitHub: false,
    caseStudy: {
      tagline: "Intelligent daily orchestration and schedule intelligence",
      overview: "DayPilot AI acts as a personal chief-of-staff, transforming scattered calendar events, meeting notes, and action items into a prioritized, conversational daily agenda.",
      problem: "Knowledge workers spend significant mental bandwidth managing calendars across multiple apps, preparing for upcoming meetings, and extracting follow-ups from notes.",
      solution: "DayPilot AI unifies daily schedule visibility with an AI conversational agent that can summarize upcoming meetings, detect scheduling conflicts, and generate priority checklists.",
      keyFeatures: [
        "Conversational Schedule Query: Ask 'What do I need to prepare for my 2 PM meeting?'",
        "Calendar & Task Synthesis: Synthesizes commitments into time-blocked priorities",
        "Google OAuth Security: Secure sign-in and permissions scope",
        "Smart Action Item Extraction: Automatically drafts follow-up todos from meeting briefs",
        "Focused Daily Dashboard: Minimalist view emphasizing only current and immediate next obligations"
      ],
      technologiesUsed: [
        { name: "React.js", role: "Fast, keyboard-friendly modern user interface" },
        { name: "AI APIs", role: "Contextual understanding and agenda synthesis" },
        { name: "Google OAuth", role: "Secure authentication and calendar integration" },
        { name: "Vercel Edge", role: "High-speed serverless deployment" }
      ],
      developmentProcess: [
        "Outlined user workflows for daily planning and calendar triage.",
        "Built chat UI optimized for rapid inputs, suggestions, and quick actions.",
        "Integrated AI API pipelines with strict context budgeting.",
        "Refined responsive layout for both desktop dual-pane and mobile single-column modes."
      ],
      challenges: "Handling calendar edge cases (time zone discrepancies, recurring overlapping events) while keeping AI responses concise and latency low.",
      outcome: "A functional, responsive executive assistant prototype delivering rapid schedule intelligence without clutter."
    }
  },
  {
    id: "bachelor-journey",
    name: "Bachelor's Journey",
    category: "Web Application",
    filterCategories: ["Web", "Full-Stack"],
    description: "A comprehensive platform designed for bachelors to manage daily tasks, track expenses, and find roommates.",
    image: "/images/bachelor-journey-preview.webp",
    imageAlt: "Bachelor's Journey Web Interface",
    technologies: ["React", "JavaScript", "Vercel"],
    liveUrl: "https://bachelorhub.vercel.app/",
    githubUrl: "https://github.com/Dhananjay2305/Bachelor-s-Journey",
    featured: true,
    hasLiveDemo: true,
    hasGitHub: true,
    caseStudy: {
      tagline: "Simplifying bachelor life",
      overview: "Bachelor's Journey is a web platform aimed at simplifying the lives of bachelors by providing tools for expense tracking, roommate finding, and task management.",
      problem: "Bachelors often face challenges in managing shared expenses, finding reliable roommates, and organizing daily chores.",
      solution: "A unified dashboard offering tools to track shared costs, browse roommate profiles, and manage household tasks.",
      keyFeatures: [
        "Expense Tracking: Easy logging and splitting of shared bills",
        "Roommate Finder: Connect with potential roommates based on preferences",
        "Task Management: Shared chore lists for the household"
      ],
      technologiesUsed: [
        { name: "React.js", role: "Frontend UI" },
        { name: "Vercel", role: "Deployment platform" }
      ],
      developmentProcess: [
        "Designed UI for dashboard and main features",
        "Implemented expense tracking and roommate finder logic",
        "Deployed on Vercel"
      ],
      challenges: "Creating an intuitive interface for managing shared finances and tasks.",
      outcome: "A functional platform helping bachelors manage their daily lives more efficiently."
    }
  },
  {
    id: "ai-interviewer",
    name: "AI Interviewer",
    category: "AI / Productivity",
    filterCategories: ["AI", "Web"],
    description: "An AI-driven platform that conducts mock interviews, providing real-time feedback and analysis to help users prepare for job interviews.",
    image: "/images/ai-interviewer-preview.webp",
    imageAlt: "AI Interviewer Platform Interface",
    videoUrl: "/videos/ai-interview.mp4",
    technologies: ["React", "AI", "Vercel"],
    liveUrl: "https://ai-interviewer-drab-beta.vercel.app/",
    githubUrl: "https://github.com/Dhananjay2305/AI-interviewer",
    featured: true,
    hasLiveDemo: true,
    hasGitHub: true,
    caseStudy: {
      tagline: "Ace your next interview with AI",
      overview: "AI Interviewer simulates real interview scenarios, asking context-aware questions and providing constructive feedback on responses.",
      problem: "Job seekers often lack realistic practice environments and actionable feedback before actual interviews.",
      solution: "An intelligent mock interview platform that adapts to the user's field and experience level, offering personalized feedback.",
      keyFeatures: [
        "Dynamic Questioning: AI generates questions based on role and experience",
        "Real-time Feedback: Analysis of answers for clarity, completeness, and tone",
        "Performance Analytics: Track progress over multiple mock interviews"
      ],
      technologiesUsed: [
        { name: "React.js", role: "Interactive user interface" },
        { name: "AI Integration", role: "Natural language processing for questions and feedback" },
        { name: "Vercel", role: "Application hosting" }
      ],
      developmentProcess: [
        "Integrated AI APIs for natural language understanding and generation",
        "Built chat-based interface for interview flow",
        "Developed feedback scoring mechanism"
      ],
      challenges: "Ensuring AI feedback is constructive, accurate, and delivered in a natural conversational tone.",
      outcome: "A robust tool that helps candidates build confidence and improve their interview skills."
    }
  }
];

export const projectFilterCategories = ["All", "Web", "AI", "Full-Stack", "IoT"];
