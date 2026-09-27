"use client";

import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";
import { openApplyModal } from "@/components/ApplyModal";

export default function FloatingCtaBar() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20Loan%20Samadhan%2C%20I%20am%20looking%20for%20a%20loan%20consultation%20in%20Udaipur.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl px-3 py-2">
      <div className="flex items-center gap-2">
        {/* Instant Click to Call */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-navy-900 text-white rounded-xl text-xs font-semibold shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald text-white rounded-xl text-xs font-semibold shadow-sm active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>WhatsApp</span>
        </a>

        {/* Apply Now CTA */}
        <button
          onClick={() => openApplyModal()}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 bg-gradient-banking text-white rounded-xl text-xs font-bold shadow-md shadow-royal/20 active:scale-95 transition-transform"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
