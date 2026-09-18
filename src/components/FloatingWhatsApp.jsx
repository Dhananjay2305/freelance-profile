import React from "react";
import { siteConfig } from "../config/site";
import { getWhatsAppUrl } from "../config/contact";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl(
    `Hi ${siteConfig.name}, I'm browsing your portfolio and would like to chat about a freelance project.`
  );

  return (
    <aside aria-label="Floating WhatsApp Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with Dhananjay"
        className="fixed bottom-5 right-5 z-40 md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-emerald-500/30 transition-all active:scale-95"
      >
        <span className="relative flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-40"></span>
          <MessageSquare className="w-6 h-6 text-white" />
        </span>
      </a>
    </aside>
  );
}
