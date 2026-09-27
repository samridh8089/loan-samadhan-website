"use client";

import { 
  Users, 
  ShieldCheck, 
  Building, 
  FileCheck, 
  BadgePercent, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { WHY_CHOOSE_US, SITE_CONFIG } from "@/data/siteData";
import { openApplyModal } from "@/components/ApplyModal";

export default function WhyChooseUs() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Users className="w-6 h-6 text-royal" />;
      case 1:
        return <ShieldCheck className="w-6 h-6 text-emerald" />;
      case 2:
        return <Building className="w-6 h-6 text-royal" />;
      case 3:
        return <CheckCircle2 className="w-6 h-6 text-emerald" />;
      case 4:
        return <FileCheck className="w-6 h-6 text-royal" />;
      case 5:
        return <BadgePercent className="w-6 h-6 text-emerald" />;
      default:
        return <Sparkles className="w-6 h-6 text-royal" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Impact Metrics (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald" />
              <span>The Loan Samadhan Edge</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-heading leading-tight">
              Why Borrowers in Udaipur Trust Loan Samadhan
            </h2>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-navy-900 via-royal to-navy-900 text-white shadow-lg">
              <div className="text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                Foundational Pledge
              </div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                "{SITE_CONFIG.taglineHindi}"
              </div>
              <p className="text-blue-100 text-xs mt-1.5 leading-relaxed">
                Zero upfront consultancy charges. We only earn our commission directly from the lending institution upon successful disbursal.
              </p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Navigating multiple bank branches, complex eligibility algorithms, and endless paperwork is daunting. We simplify the entire lending journey with direct nodal banking access and seasoned local finance experts.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-surface-light p-4 rounded-xl border border-gray-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading">
                  {SITE_CONFIG.totalDisbursed}
                </div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">
                  Loans Disbursed
                </div>
              </div>

              <div className="bg-surface-light p-4 rounded-xl border border-gray-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-royal font-heading">
                  {SITE_CONFIG.happyCustomers}
                </div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">
                  Satisfied Borrowers
                </div>
              </div>

              <div className="bg-surface-light p-4 rounded-xl border border-gray-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald font-heading">
                  {SITE_CONFIG.bankPartnersCount}
                </div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">
                  Partner Banks & NBFCs
                </div>
              </div>

              <div className="bg-surface-light p-4 rounded-xl border border-gray-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading">
                  {SITE_CONFIG.experienceYears}
                </div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">
                  Years Banking Acumen
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openApplyModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-banking hover:bg-gradient-banking-hover text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span>Request Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 6 Core Value Points (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:shadow-premium hover:border-royal/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-royal/10 flex items-center justify-center transition-colors mb-4 border border-gray-100">
                    {getIcon(index)}
                  </div>
                  <h3 className="text-base font-bold text-navy-900 group-hover:text-royal transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-royal group-hover:translate-x-1 transition-transform">
                  <span>Guaranteed Commitment</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
