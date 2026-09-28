import { ShieldCheck, Building } from "lucide-react";
import { BANK_PARTNERS } from "@/data/siteData";

export default function BankPartnerSlider() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-royal text-xs font-semibold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-3.5 h-3.5 text-royal" />
          <span>Empaneled Lending Network</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-navy-900 font-heading">
          147+ Trusted Banking & NBFC Partners
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm max-w-xl mx-auto mt-1">
          We compare real-time interest rates across India's top institutional lenders to guarantee you the most affordable deal.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden mask-gradient">
        {/* Track with duplicate list for continuous animation */}
        <div className="flex items-center gap-6 animate-marquee py-2 whitespace-nowrap">
          {[...BANK_PARTNERS, ...BANK_PARTNERS].map((bank, index) => (
            <div
              key={`${bank.name}-${index}`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-surface-light border border-gray-200/80 shadow-sm hover:shadow-md hover:border-royal/40 transition-all flex-shrink-0 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-navy-900 group-hover:text-royal group-hover:bg-royal/5 transition-colors font-bold text-xs">
                <Building className="w-5 h-5 text-royal" />
              </div>
              <div>
                <div className="text-sm font-bold text-navy-900 group-hover:text-royal transition-colors">
                  {bank.name}
                </div>
                <div className="text-[11px] font-medium text-gray-500">
                  {bank.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
