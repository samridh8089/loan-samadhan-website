import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Car, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  ArrowRight,
  Gauge,
  KeyRound,
  Check
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmiCalculatorWidget from "@/components/EmiCalculatorWidget";
import ContactForm from "@/components/ContactForm";
import BankPartnerSlider from "@/components/BankPartnerSlider";
import { SERVICES, SITE_CONFIG } from "@/data/siteData";

const service = SERVICES.find((s) => s.slug === "car-loan")!;

export const metadata: Metadata = {
  title: "Car Loan in Udaipur | New & Used Car Financing | Loan Samadhan",
  description:
    "Up to 100% on-road funding for brand new and pre-owned cars in Udaipur. Interest rates from 8.75% p.a., same-day delivery order, zero consultancy fee.",
  keywords: [
    "Car Loan Udaipur",
    "Used Car Finance Udaipur",
    "Auto Loan Rajasthan",
    "100% On-road car loan Udaipur",
    "Second hand car loan Udaipur"
  ],
  alternates: {
    canonical: "https://www.loan-samadhan.in/services/car-loan",
  },
};

export default function CarLoanPage() {
  const vehicleCategories = [
    {
      icon: <KeyRound className="w-6 h-6 text-royal" />,
      title: "New Car Financing (Brand New)",
      subtitle: "Up to 100% On-Road Funding",
      description: "Finance ex-showroom price, road tax (RTO), car insurance, and warranty package. Direct delivery order issued to Udaipur authorized dealerships for immediate car key handover.",
      features: [
        "Starting 8.75% p.a. interest rates",
        "Tenure up to 7 years for low EMIs",
        "Zero foreclosure charges after 12 months",
        "Special concessions on Electric Vehicles (EV)"
      ]
    },
    {
      icon: <Gauge className="w-6 h-6 text-emerald" />,
      title: "Used / Pre-Owned Car Financing",
      subtitle: "Up to 90% Valuation Funding",
      description: "Buy certified second-hand sedans, SUVs, or luxury vehicles with fast title transfer assistance, official valuation checks, and transparent interest terms.",
      features: [
        "Financing on models up to 10 years old",
        "Tenure up to 5 years",
        "Quick technical inspection & RC verification",
        "Balance transfer & refinance on existing cars"
      ]
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
            alt="Car Loan Udaipur"
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
                  <div className="text-[11px] text-blue-200 uppercase font-medium">Max Tenure</div>
                  <div className="text-base sm:text-lg font-bold text-white">{service.maxTenure}</div>
                </div>
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/15 backdrop-blur-sm col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-blue-200 uppercase font-medium">Delivery Speed</div>
                  <div className="text-base sm:text-lg font-bold text-white">{service.approvalTime}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <a
                  href="#apply-form"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-banking text-white font-bold rounded-xl shadow-lg transition-all hover:shadow-xl"
                >
                  <span>Apply for Vehicle Loan</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call Auto Desk</span>
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 text-white space-y-4">
              <h3 className="text-xl font-bold font-heading">
                All Showrooms in Udaipur Covered
              </h3>
              <ul className="space-y-3 text-sm text-blue-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Fast Delivery Order (DO) directly to Tata, Hyundai, Maruti, Mahindra, Kia, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Funding options up to 100% of on-road vehicle cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Doorstep documentation collection across Udaipur & Rajsamand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Zero upfront charges: 'लोन नहीं तो कोई फीस नहीं'.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* New Car vs Used Car Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              New Car & Pre-Owned Car Solutions
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Flexible loan schemes catering to new registrations as well as certified pre-owned purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicleCategories.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-light p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-premium transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 font-heading">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-gray-200/70 space-y-2">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                      <Check className="w-4 h-4 text-emerald flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 bg-surface-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-royal text-xs font-semibold uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Required Paperwork</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              Car Loan Document Checklist
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Minimum papers needed to issue your vehicle delivery order today.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {service.documents.map((docCategory, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm"
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              4-Step Vehicle Delivery Process
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Drive your dream car out of the showroom without paperwork delays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="bg-surface-light p-6 rounded-2xl border border-gray-200 shadow-sm relative group hover:border-royal/40 transition-all"
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
      <section className="py-16 bg-surface-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmiCalculatorWidget
            initialAmount={1200000}
            initialRate={8.8}
            initialTenure={5}
            loanTypeName="Car Loan"
          />
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <BankPartnerSlider />
    </>
  );
}
