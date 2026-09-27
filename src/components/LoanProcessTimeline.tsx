"use client";

import { FileText, PhoneCall, ShieldCheck, Landmark, CheckCircle, ArrowRight } from "lucide-react";
import { LOAN_PROCESS_STEPS } from "@/data/siteData";
import { openApplyModal } from "@/components/ApplyModal";

export default function LoanProcessTimeline() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileText className="w-5 h-5 text-white" />;
      case 1:
        return <PhoneCall className="w-5 h-5 text-white" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-white" />;
      case 3:
        return <Landmark className="w-5 h-5 text-white" />;
      case 4:
        return <CheckCircle className="w-5 h-5 text-white" />;
      default:
        return <CheckCircle className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-surface-light border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-royal text-xs font-semibold uppercase tracking-wider mb-2">
            <span>Fast, Hassle-Free Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 font-heading">
            Simple 5-Step Loan Approval Process
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            From initial enquiry to final bank credit, our streamlined process saves your valuable time and minimizes paperwork.
          </p>
        </div>

        {/* Timeline Desktop & Tablet View */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-1 bg-gradient-to-r from-royal via-blue-400 to-emerald z-0 rounded-full" />

          {/* Grid of Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {LOAN_PROCESS_STEPS.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Bubble & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy-900 to-royal group-hover:from-royal group-hover:to-emerald transition-all flex items-center justify-center shadow-md">
                      {getStepIcon(index)}
                    </div>
                    <span className="text-xs font-extrabold text-gray-300 font-heading tracking-widest">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-navy-900 group-hover:text-royal transition-colors mb-2 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-emerald">
                  <span>Step {index + 1} of 5</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner below timeline */}
        <div className="mt-14 text-center">
          <button
            onClick={() => openApplyModal()}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-banking hover:bg-gradient-banking-hover text-white font-bold rounded-xl shadow-lg shadow-royal/20 transition-all transform hover:-translate-y-0.5"
          >
            <span>Start Step 1: Submit Application Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
