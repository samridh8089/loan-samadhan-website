import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Home as HomeIcon,
  Briefcase,
  UserCheck,
  Car,
  Building2,
  ChevronRight
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import BankPartnerSlider from "@/components/BankPartnerSlider";
import { SERVICES, SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Loan Services in Udaipur | Home, Business, Personal, Car & LAP",
  description:
    "Explore our complete range of loan solutions in Udaipur: Home Loans, Business Loans, Personal Loans, Car Loans, and LAP. 147+ partner banks with lowest ROI.",
  alternates: {
    canonical: "https://www.loan-samadhan.in/services",
  },
};

export default function ServicesOverviewPage() {
  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "home-loan":
        return <HomeIcon className="w-6 h-6 text-royal" />;
      case "business-loan":
        return <Briefcase className="w-6 h-6 text-emerald" />;
      case "personal-loan":
        return <UserCheck className="w-6 h-6 text-royal" />;
      case "car-loan":
        return <Car className="w-6 h-6 text-emerald" />;
      case "loan-against-property":
        return <Building2 className="w-6 h-6 text-royal" />;
      default:
        return <Sparkles className="w-6 h-6 text-royal" />;
    }
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />

      {/* Header Banner */}
      <section className="py-16 md:py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.taglineHindi}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Our Comprehensive Loan Solutions
            </h1>
            <p className="text-slate-200 text-base sm:text-lg mt-4 leading-relaxed">
              We partner with over 25 premier banks and NBFCs across India to deliver competitive interest rates, maximum loan sanctions, and doorstep service in Udaipur.
            </p>
          </div>
        </div>
      </section>

      {/* Service Grid Section */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-premium overflow-hidden transition-all duration-300"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                    {/* Image Column (5 cols) */}
                    <div className={`lg:col-span-5 relative h-72 sm:h-96 w-full ${isEven ? "lg:order-2" : ""}`}>
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                      
                      {/* Floating Rate Tag */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-navy-900 shadow-md">
                        {service.interestRate}
                      </div>

                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                          {service.hindiName}
                        </span>
                        <h3 className="text-xl font-bold font-heading">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content Column (7 cols) */}
                    <div className={`lg:col-span-7 p-6 sm:p-10 space-y-6 ${isEven ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">
                          {getServiceIcon(service.slug)}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-navy-900 font-heading">
                            {service.name}
                          </h2>
                          <p className="text-xs text-emerald-700 font-semibold">
                            {service.heroHeadline}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Key Parameters */}
                      <div className="grid grid-cols-3 gap-3 bg-surface-light p-4 rounded-2xl border border-gray-100 text-center">
                        <div>
                          <div className="text-[11px] text-gray-500 uppercase">Rate of Interest</div>
                          <div className="text-xs sm:text-sm font-bold text-navy-900 mt-0.5">{service.interestRate}</div>
                        </div>
                        <div className="border-x border-gray-200">
                          <div className="text-[11px] text-gray-500 uppercase">Max Tenure</div>
                          <div className="text-xs sm:text-sm font-bold text-navy-900 mt-0.5">{service.maxTenure}</div>
                        </div>
                        <div>
                          <div className="text-[11px] text-gray-500 uppercase">Turnaround Time</div>
                          <div className="text-xs sm:text-sm font-bold text-emerald mt-0.5">{service.approvalTime}</div>
                        </div>
                      </div>

                      {/* Top Benefits snippet */}
                      <div className="space-y-2">
                        {service.benefits.slice(0, 2).map((b, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5" />
                            <span><strong>{b.title}:</strong> {b.description}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row gap-3">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-banking text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all hover:shadow-lg"
                        >
                          <span>Full Eligibility, Documents & Apply</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href="/emi-calculator"
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-100 text-gray-800 text-xs sm:text-sm font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                        >
                          <span>Calculate EMI</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              Quick Comparison of Loan Types
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Select the optimal funding avenue based on collateral requirement and tenure.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-2xl overflow-hidden border border-gray-200">
              <thead className="bg-navy-900 text-white font-heading">
                <tr>
                  <th className="p-4">Loan Type</th>
                  <th className="p-4">Interest Rate</th>
                  <th className="p-4">Collateral Required?</th>
                  <th className="p-4">Max Tenure</th>
                  <th className="p-4">Max Amount</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {SERVICES.map((s) => (
                  <tr key={s.id} className="hover:bg-surface-light transition-colors">
                    <td className="p-4 font-bold text-navy-900">{s.name}</td>
                    <td className="p-4 font-semibold text-royal">{s.interestRate}</td>
                    <td className="p-4 text-gray-600">
                      {s.slug === "personal-loan" || s.slug === "business-loan"
                        ? "No (Unsecured options available)"
                        : "Yes (Property / Vehicle)"}
                    </td>
                    <td className="p-4 text-gray-600">{s.maxTenure}</td>
                    <td className="p-4 font-medium text-navy-900">{s.maxAmount}</td>
                    <td className="p-4">
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-xs font-bold text-royal hover:underline flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <BankPartnerSlider />
    </>
  );
}
