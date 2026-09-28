"use client";

import { Check, X, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";
import { openApplyModal } from "@/components/ApplyModal";

export default function ComparisonSection() {
  const comparisonData = [
    {
      parameter: "Choice of Lenders",
      directBank: "Limited to that single bank's strict internal policies & rigid eligibility.",
      loanSamadhan: "147+ Banks & NBFCs compared simultaneously to find the best match for your profile."
    },
    {
      parameter: "Interest Rates & ROI",
      directBank: "Standard rack rates with little or no power for retail negotiation.",
      loanSamadhan: "Special pre-negotiated corporate rates & discounted processing fees."
    },
    {
      parameter: "Documentation Effort",
      directBank: "Multiple physical branch visits, paperwork delays, and counter queues.",
      loanSamadhan: "Doorstep document pickup in Udaipur & 100% digital submission tracking."
    },
    {
      parameter: "Consultancy & Service Charges",
      directBank: "Non-refundable processing fees charged even if your loan file gets rejected.",
      loanSamadhan: `${SITE_CONFIG.taglineHindi} — Zero upfront consultancy charges.`
    },
    {
      parameter: "Dedicated Loan Officer",
      directBank: "Frequent staff transfers; you are passed between desk to desk.",
      loanSamadhan: "Single dedicated Udaipur loan advisor handling your file until disbursal."
    },
    {
      parameter: "Rejection Risk & CIBIL Impact",
      directBank: "Multiple hard enquiries on your CIBIL score if you apply to different branches.",
      loanSamadhan: "Credit score preserved with pre-screened eligibility algorithms."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-royal text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-royal" />
            <span>Smart Borrower Comparison</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 font-heading">
            Direct Bank Visit vs Loan Samadhan Advantage
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            See why over 8,500 borrowers in Udaipur and Rajasthan choose our assisted consultancy over running to individual bank branches.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-navy-900 text-white font-heading">
            <div className="hidden md:block md:col-span-4 p-5 text-sm font-bold uppercase tracking-wider text-slate-300">
              Loan Comparison Feature
            </div>
            <div className="md:col-span-4 p-5 text-sm font-bold bg-navy-950/80 text-gray-400 border-t md:border-t-0 md:border-l border-navy-800 flex items-center justify-between">
              <span>Applying Directly to Bank</span>
              <span className="text-xs px-2 py-0.5 rounded bg-red-900/40 text-red-300 border border-red-800">
                Traditional Way
              </span>
            </div>
            <div className="md:col-span-4 p-5 text-sm font-bold bg-gradient-to-r from-royal to-emerald text-white border-t md:border-t-0 md:border-l border-navy-800 flex items-center justify-between">
              <span className="font-extrabold">Loan Samadhan Advantage</span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/20 text-white border border-white/30">
                Recommended
              </span>
            </div>
          </div>

          <div className="divide-y divide-gray-100 text-sm">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 hover:bg-gray-50/80 transition-colors"
              >
                {/* Feature Name */}
                <div className="md:col-span-4 p-4 sm:p-5 font-bold text-navy-900 flex items-center bg-gray-50/50 md:bg-transparent">
                  {row.parameter}
                </div>

                {/* Direct Bank */}
                <div className="md:col-span-4 p-4 sm:p-5 text-gray-600 flex items-start gap-2.5 md:border-l border-gray-100 bg-red-50/20 md:bg-transparent">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm">{row.directBank}</span>
                </div>

                {/* Loan Samadhan */}
                <div className="md:col-span-4 p-4 sm:p-5 text-navy-900 font-medium flex items-start gap-2.5 md:border-l border-gray-100 bg-emerald-50/30">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm">{row.loanSamadhan}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Card Footer */}
          <div className="p-6 bg-surface-light border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <ShieldCheck className="w-4 h-4 text-emerald" />
              <span>We never ask for cash advances. Transparent banking compliance only.</span>
            </div>

            <button
              onClick={() => openApplyModal()}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-banking hover:bg-gradient-banking-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all"
            >
              <span>Get the Loan Samadhan Advantage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
