import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  UserCheck, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  ArrowRight,
  Zap,
  Clock,
  Coins
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmiCalculatorWidget from "@/components/EmiCalculatorWidget";
import ContactForm from "@/components/ContactForm";
import BankPartnerSlider from "@/components/BankPartnerSlider";
import { SERVICES, SITE_CONFIG } from "@/data/siteData";

const service = SERVICES.find((s) => s.slug === "personal-loan")!;

export const metadata: Metadata = {
  title: "Personal Loan in Udaipur | Instant 24-Hour Approval | Loan Samadhan",
  description:
    "Quick collateral-free Personal Loans up to ₹40 Lakh in Udaipur with lowest interest starting 10.49% p.a. Minimal paperwork, same-day bank disbursal.",
  keywords: [
    "Personal Loan Udaipur",
    "Instant Loan Udaipur",
    "Emergency Loan Rajasthan",
    "Salary Loan Udaipur",
    "Debt consolidation loan Udaipur"
  ],
  alternates: {
    canonical: "https://www.loan-samadhan.in/services/personal-loan",
  },
};

export default function PersonalLoanPage() {
  const highlights = [
    {
      icon: <Zap className="w-6 h-6 text-royal" />,
      title: "Same Day Fast-Track Disbursal",
      description: "Direct tie-ups with leading digital banks in Udaipur ensure rapid verification and credit to your account within 24 hours."
    },
    {
      icon: <FileText className="w-6 h-6 text-emerald" />,
      title: "100% Paperless Minimal Documentation",
      description: "Simply share your PAN, Aadhaar, and last 3 months salary slips. No tedious bank paperwork or in-person branch queues."
    },
    {
      icon: <Coins className="w-6 h-6 text-royal" />,
      title: "No Collateral or Guarantor",
      description: "Completely unsecured funds. Pledging property, gold, or investment policies is not required."
    }
  ];

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
            alt="Personal Loan Udaipur"
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

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/15 backdrop-blur-sm">
                  <div className="text-[11px] text-blue-200 uppercase font-medium">Interest Rate</div>
                  <div className="text-base sm:text-lg font-bold text-emerald-400">{service.interestRate}</div>
                </div>
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/15 backdrop-blur-sm">
                  <div className="text-[11px] text-blue-200 uppercase font-medium">Max Amount</div>
                  <div className="text-base sm:text-lg font-bold text-white">{service.maxAmount}</div>
                </div>
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/15 backdrop-blur-sm col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-blue-200 uppercase font-medium">Approval Speed</div>
                  <div className="text-base sm:text-lg font-bold text-white">{service.approvalTime}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <a
                  href="#apply-form"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-banking text-white font-bold rounded-xl shadow-lg transition-all hover:shadow-xl"
                >
                  <span>Apply for Personal Loan</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Instant Call Support</span>
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 text-white space-y-4">
              <h3 className="text-xl font-bold font-heading">
                Ideal For Every Urgent Need
              </h3>
              <ul className="space-y-3 text-sm text-blue-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Medical emergencies & hospital treatment funding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Wedding celebrations, destination events & family expenses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Higher education, foreign studies, or career skill courses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>High-interest credit card debt consolidation at lower monthly EMI.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus: Quick Approval & Minimal Docs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              Quick Approval & Frictionless Experience
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Engineered for speed, privacy, and absolute peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-light p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-surface-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              Personal Loan Advantages
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Transparent terms, zero hidden charges, and honest advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-royal/30 transition-all"
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

      {/* Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-royal text-xs font-semibold uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Minimal Paper Trail</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              Simple 3-Item Document Checklist
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              All documents can be submitted via WhatsApp or collected from your residence in Udaipur.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {service.documents.map((docCategory, idx) => (
              <div
                key={idx}
                className="bg-surface-light p-6 sm:p-8 rounded-3xl border border-gray-200"
              >
                <h3 className="text-lg font-bold text-navy-900 font-heading mb-4 pb-3 border-b border-gray-200">
                  {docCategory.category}
                </h3>
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

      {/* Process */}
      <section className="py-16 bg-surface-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              4 Steps to Same-Day Disbursal
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Fast, digital, and zero physical branch visits required.
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

      {/* Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmiCalculatorWidget
            initialAmount={500000}
            initialRate={10.5}
            initialTenure={3}
            loanTypeName="Personal Loan"
          />
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply-form" className="py-16 bg-surface-light border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <BankPartnerSlider />
    </>
  );
}
