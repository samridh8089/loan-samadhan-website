import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  ArrowRight,
  UserCheck,
  Building,
  Clock,
  Percent
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmiCalculatorWidget from "@/components/EmiCalculatorWidget";
import ContactForm from "@/components/ContactForm";
import BankPartnerSlider from "@/components/BankPartnerSlider";
import { SERVICES, SITE_CONFIG } from "@/data/siteData";

const service = SERVICES.find((s) => s.slug === "home-loan")!;

export const metadata: Metadata = {
  title: "Home Loan in Udaipur | Best Rates starting 8.35% p.a. | Loan Samadhan",
  description:
    "Affordable Home Loan assistance in Udaipur. Compare HDFC, SBI, ICICI & 25+ banks. Doorstep documentation, PMAY subsidy support, zero consultation fees.",
  keywords: [
    "Home Loan Udaipur",
    "Housing Loan Rajasthan",
    "Best Home Loan Interest Rate Udaipur",
    "Plot purchase loan Udaipur",
    "Home construction loan Rajasthan"
  ],
  alternates: {
    canonical: "https://www.loansamadhan.in/services/home-loan",
  },
};

export default function HomeLoanPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt="Home Loan Udaipur"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-royal/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.taglineHindi}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading leading-tight">
                {service.heroHeadline}
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                {service.heroSubheadline}
              </p>

              {/* Rate Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/15 backdrop-blur-sm">
                  <div className="text-[11px] text-blue-200 uppercase font-medium">Interest Rate</div>
                  <div className="text-base sm:text-lg font-bold text-emerald-400">{service.interestRate}</div>
                </div>
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/15 backdrop-blur-sm">
                  <div className="text-[11px] text-blue-200 uppercase font-medium">Max Tenure</div>
                  <div className="text-base sm:text-lg font-bold text-white">{service.maxTenure}</div>
                </div>
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/15 backdrop-blur-sm col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-blue-200 uppercase font-medium">Max Loan Amount</div>
                  <div className="text-base sm:text-lg font-bold text-white">{service.maxAmount}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <a
                  href="#apply-form"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-banking text-white font-bold rounded-xl shadow-lg transition-all hover:shadow-xl"
                >
                  <span>Apply for Home Loan</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call Advisor</span>
                </a>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 text-white space-y-4">
              <h3 className="text-xl font-bold font-heading">
                Why Apply Home Loan via Loan Samadhan?
              </h3>
              <ul className="space-y-3 text-sm text-blue-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Compare rate quotes from 25+ lenders including SBI, HDFC, ICICI, LIC HFL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Doorstep pickup of legal, technical, and property registry records in Udaipur.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Expert assistance for Pradhan Mantri Awas Yojana (PMAY) subsidies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Zero consultation fee under our pledge 'लोन नहीं तो कोई फीस नहीं'.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who Can Apply (Eligibility) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-royal text-xs font-semibold uppercase tracking-wider mb-2">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Eligibility Norms</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              Who Can Apply for a Home Loan in Udaipur?
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Whether you are salaried, self-employed, or a professional, we match your profile to the bank offering the highest sanction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whoCanApply.map((item, index) => (
              <div
                key={index}
                className="bg-surface-light p-6 rounded-2xl border border-gray-200/80 flex items-start gap-3 hover:border-royal/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-royal/10 text-royal flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Benefits */}
      <section className="py-16 bg-surface-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              Key Advantages & Benefits
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Experience frictionless home loan processing designed around your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2 font-heading">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Required Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-royal text-xs font-semibold uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Document Checklist</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              Documents Required for Home Loan
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Our team assists in collecting, photocopying, and validating documents directly at your doorstep in Udaipur.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {service.documents.map((docCategory, idx) => (
              <div
                key={idx}
                className="bg-surface-light p-6 sm:p-8 rounded-3xl border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 font-heading">
                    {docCategory.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {docCategory.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-emerald mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Simple 4-Step Process */}
      <section className="py-16 bg-surface-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              Simple 4-Step Home Loan Disbursal Process
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              From application to receiving your house keys, our advisors steer the process smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative group hover:border-royal/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold mb-4">
                  0{p.step}
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2 font-heading">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Real Interactive Home Loan EMI Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmiCalculatorWidget
            initialAmount={3500000}
            initialRate={8.35}
            initialTenure={20}
            loanTypeName="Home Loan"
          />
        </div>
      </section>

      {/* Section 7: Apply Form */}
      <section id="apply-form" className="py-16 bg-surface-light border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <BankPartnerSlider />
    </>
  );
}
