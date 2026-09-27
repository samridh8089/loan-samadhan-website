"use client";

import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Namaste%20Loan%20Samadhan%2C%20I%20would%20like%20to%20inquire%20about%20a%20loan%20in%20Udaipur.`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 group">
      {/* Tooltip on Desktop hover */}
      <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-navy-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-navy-900" />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Loan Samadhan"
        className="w-13 h-13 p-3.5 bg-emerald hover:bg-emerald-hover text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center relative"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white border-2 border-emerald rounded-full" />
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}
