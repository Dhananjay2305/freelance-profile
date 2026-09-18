import React, { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BusinessSolutions from "./components/BusinessSolutions";
import Projects from "./components/Projects";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Skills from "./components/Skills";
import HowIWork from "./components/HowIWork";
import PricingEstimate from "./components/PricingEstimate";
import FreelanceCTA from "./components/FreelanceCTA";
import About from "./components/About";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSelectServiceOrTopic = (topicName) => {
    setSelectedTopic(topicName);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Sticky Glass Navbar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        {/* 1. Hero Section */}
        <Hero onOpenContact={() => handleSelectServiceOrTopic("")} />

        {/* 2. Core Services Section */}
        <Services onSelectService={handleSelectServiceOrTopic} />

        {/* 3. Business Solutions ("What Can I Build For Your Business?") */}
        <BusinessSolutions onSelectTopic={handleSelectServiceOrTopic} />

        {/* 4. Featured Projects with Filter and Case Studies */}
        <Projects />

        {/* 5. Why Work With Me */}
        <WhyWorkWithMe />

        {/* 6. Skills / Technology Stack */}
        <Skills />

        {/* 7. How I Work Process */}
        <HowIWork onStartProject={() => handleSelectServiceOrTopic("Custom Project")} />

        {/* 8. Starting Project Budget & Scoping Philosophy */}
        <PricingEstimate onGetEstimate={() => handleSelectServiceOrTopic("Project Scoping & Estimate")} />

        {/* 9. Freelance Call To Action */}
        <FreelanceCTA onHireClick={() => handleSelectServiceOrTopic("")} />

        {/* 10. About Me Section */}
        <About />

        {/* 11. Contact & Inquiry Section */}
        <Contact selectedTopic={selectedTopic} />
      </main>

      {/* 12. Floating WhatsApp for Mobile */}
      <FloatingWhatsApp />

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
