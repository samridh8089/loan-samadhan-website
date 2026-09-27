import type { Metadata } from "next";
import { Calculator, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, HelpCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmiCalculatorWidget from "@/components/EmiCalculatorWidget";
import BankPartnerSlider from "@/components/BankPartnerSlider";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "EMI Calculator | Calculate Home, Business & Car Loan EMI | Loan Samadhan",
  description:
    "Free loan EMI calculator for Home Loans, Business Loans, Car Loans, and LAP. Instant monthly installment, total interest payable & amortization chart.",
  keywords: [
    "Loan EMI Calculator Udaipur",
    "Home Loan EMI Calculator Rajasthan",
    "Business Loan EMI calculator",
    "Car loan interest calculator Udaipur"
  ],
  alternates: {
    canonical: "https://www.loansamadhan.in/emi-calculator",
  },
};

export default function EmiCalculatorPage() {
  const calculationFaqs = [
    {
      q: "How is Loan EMI calculated?",
      a: "EMI (Equated Monthly Installment) is calculated using the standard mathematical formula: E = [P x R x (1+R)^N] / [(1+R)^N - 1], where P is Principal loan amount, R is monthly interest rate, and N is loan tenure in months."
    },
    {
      q: "Does Loan Samadhan charge any fee to calculate or apply for loans?",
      a: "No! True to our primary motto 'लोन नहीं तो कोई फीस नहीं', our entire consultancy, rate comparisons across 25+ banks, and door-to-door assistance is 100% free for applicants."
    },
    {
      q: "How does loan tenure affect my total interest?",
      a: "Choosing a longer loan tenure decreases your monthly EMI amount, making payments more manageable. However, it increases total interest paid over the life of the loan. A shorter tenure increases monthly EMI but significantly cuts down overall interest cost."
    },
    {
      q: "Can I prepay or part-pay my loan to reduce interest?",
      a: "Yes! Floating rate home loans by RBI mandate carry ZERO prepayment or part-payment penalties. You can prepay surplus funds anytime to reduce your remaining principal and total tenure."
    }
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "EMI Calculator" }]} />

      {/* Header Banner */}
      <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.taglineHindi}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Interactive Loan EMI Calculator
            </h1>
            <p className="text-slate-200 text-base sm:text-lg mt-3 leading-relaxed">
              Calculate accurate monthly EMIs, visualize the interest-to-principal ratio, and plan your loan repayment with zero guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Main Real Working Calculator Section */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmiCalculatorWidget
            initialAmount={3000000}
            initialRate={8.5}
            initialTenure={20}
          />
        </div>
      </section>

      {/* Educational Guide on Loan Planning */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-royal text-xs font-semibold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                <span>Financial Wisdom</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
                Smart Tips to Lower Your Monthly Loan EMI
              </h2>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <div className="p-4 rounded-2xl bg-surface-light border border-gray-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900">Compare Across 25+ Banks</h4>
                    <p className="text-xs text-gray-500 mt-1">
                      A difference of even 0.50% in interest rate can save you up to ₹3,50,000 in interest on a 20-year home loan of ₹30 Lakh.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-surface-light border border-gray-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900">Add an Earning Co-Applicant</h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Clubbing spouse or parental income lowers your Fixed Obligation to Income Ratio (FOIR), helping you qualify for prime bank slabs.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-surface-light border border-gray-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900">Maintain a 750+ CIBIL Score</h4>
                    <p className="text-xs text-gray-500 mt-1">
                      High credit scores trigger preferential concessions from PSU and top private banks in Udaipur with lowest processing fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Column */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-navy-900 font-heading mb-4">
                EMI Calculator Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {calculationFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-sm space-y-2"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-navy-900">
                      <HelpCircle className="w-4 h-4 text-royal flex-shrink-0" />
                      <span>{faq.q}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 pl-6 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BankPartnerSlider />
    </>
  );
}
