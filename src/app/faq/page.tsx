import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Sparkles, PhoneCall, ArrowRight, MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import BankPartnerSlider from "@/components/BankPartnerSlider";
import { FAQS, SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Loan Samadhan Udaipur",
  description:
    "Find answers to all your loan questions in Udaipur: Home loan eligibility, business loan documents, personal loan approval time, car loans, and LAP.",
  keywords: [
    "Loan FAQ Udaipur",
    "Home loan eligibility questions Rajasthan",
    "Business loan documents FAQ",
    "लोन नहीं तो कोई फीस नहीं FAQ"
  ],
  alternates: {
    canonical: "https://www.loan-samadhan.in/faq",
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

      {/* Header Banner */}
      <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.taglineHindi}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-200 text-base sm:text-lg mt-3 leading-relaxed">
              Clear, transparent answers regarding loan eligibility, documentation, interest rates, and banking procedures across Udaipur & Rajasthan.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion Container */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion />

          {/* Still Have Questions Box */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-gray-200 shadow-md text-center space-y-4">
            <div className="w-14 h-14 bg-navy-50 text-royal rounded-2xl flex items-center justify-center mx-auto">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 font-heading">
              Have a Specific Question About Your Profile?
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
              Every applicant has unique financial nuances. Speak directly with our senior credit consultant in Udaipur with zero upfront fees.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-navy-800 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20Loan%20Samadhan%2C%20I%20have%20a%20question%20about%20a%20loan%20in%20Udaipur.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-emerald-hover transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-xl text-xs sm:text-sm font-semibold hover:bg-gray-200 transition-colors"
              >
                <span>Write to Office</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BankPartnerSlider />
    </>
  );
}
