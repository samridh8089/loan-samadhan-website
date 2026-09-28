import Link from "next/link";
import Image from "next/image";
import { 
  PhoneCall, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle, 
  Sparkles, 
  Building2, 
  BadgePercent,
  Home as HomeIcon,
  Briefcase,
  UserCheck,
  Car,
  Landmark,
  ChevronRight
} from "lucide-react";
import { SITE_CONFIG, SERVICES, TRUST_POINTS } from "@/data/siteData";
import BankPartnerSlider from "@/components/BankPartnerSlider";
import EmiCalculatorWidget from "@/components/EmiCalculatorWidget";
import WhyChooseUs from "@/components/WhyChooseUs";
import LoanProcessTimeline from "@/components/LoanProcessTimeline";
import ComparisonSection from "@/components/ComparisonSection";
import GoogleReviews from "@/components/GoogleReviews";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
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

  const getTrustIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Clock className="w-6 h-6 text-emerald" />;
      case 1:
        return <ShieldCheck className="w-6 h-6 text-royal" />;
      case 2:
        return <CheckCircle className="w-6 h-6 text-emerald" />;
      case 3:
        return <Landmark className="w-6 h-6 text-royal" />;
      default:
        return <Sparkles className="w-6 h-6 text-royal" />;
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-[620px] lg:min-h-[700px] bg-navy-900 text-white flex items-center overflow-hidden">
        {/* Background Image with Deep Banking Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2000&q=85"
            alt="Banking and Finance Advisory Loan Samadhan Udaipur"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F4D] via-[#0B1F4D]/90 to-[#174EA6]/75" />
        </div>

        {/* Hero Decorative Shapes */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-royal/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Tagline Highlight Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-semibold backdrop-blur-md shadow-lg">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="tracking-wide uppercase font-heading">
                  {SITE_CONFIG.taglineHindi}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-[1.15] text-white">
                हर जरूरत के लिए <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-emerald-400">
                  सही लोन समाधान
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {SITE_CONFIG.subheadlineHindi} Compare interest rates across 147+ trusted banks in Udaipur with zero upfront consultation charges.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-banking hover:bg-gradient-banking-hover text-white font-bold text-base rounded-xl shadow-xl shadow-royal/30 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-base rounded-xl backdrop-blur-md transition-all"
                >
                  <PhoneCall className="w-5 h-5 text-emerald-400" />
                  <span>Call: {SITE_CONFIG.phone}</span>
                </a>
              </div>

              {/* Quick Trust Proof */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-blue-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Zero Upfront Fee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>147+ Bank Options</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Fast Track Sanctions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Udaipur Local Team</span>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Application Form Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 relative">
                <div className="absolute -top-3.5 right-6 bg-emerald text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Instant Assessment
                </div>

                <div className="mb-5">
                  <h3 className="text-xl font-bold text-navy-900 font-heading">
                    Check Your Loan Eligibility
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Takes under 60 seconds. Our experts call you back with lowest bank rates.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-white py-10 border-b border-gray-100 relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_POINTS.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-surface-light transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-surface-light group-hover:bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200 transition-colors">
                  {getTrustIcon(index)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900 font-heading group-hover:text-royal transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bank Partner Slider */}
      <BankPartnerSlider />

      {/* 4. Services Section */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-royal text-xs font-semibold uppercase tracking-wider mb-2">
              <BadgePercent className="w-3.5 h-3.5 text-royal" />
              <span>Comprehensive Loan Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 font-heading">
              Tailored Financing for Every Life Milestone
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Explore our spectrum of loan products designed for salaried, self-employed, and enterprise borrowers across Udaipur and Rajasthan.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-premium hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                    
                    {/* Rate Tag */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-navy-900 shadow-sm border border-gray-100">
                      {service.interestRate}
                    </div>

                    {/* Hindi Subtitle */}
                    <div className="absolute bottom-3 left-4 text-white text-xs font-semibold">
                      {service.hindiName}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                        {getServiceIcon(service.slug)}
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 group-hover:text-royal transition-colors font-heading">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Key Attributes */}
                    <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                      <div className="flex justify-between text-gray-600">
                        <span className="text-gray-400">Max Tenure:</span>
                        <span className="font-semibold text-navy-900">{service.maxTenure}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span className="text-gray-400">Max Funding:</span>
                        <span className="font-semibold text-navy-900">{service.maxAmount}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span className="text-gray-400">Approval Speed:</span>
                        <span className="font-semibold text-emerald">{service.approvalTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-surface-light group-hover:bg-gradient-banking text-gray-800 group-hover:text-white font-semibold text-xs transition-all shadow-sm"
                  >
                    <span>View Eligibility & Apply</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-royal hover:text-royal-hover group"
            >
              <span>Explore detailed service comparison table</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Before/After Comparison Section */}
      <ComparisonSection />

      {/* 6. Interactive EMI Calculator Section */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmiCalculatorWidget />
        </div>
      </section>

      {/* 7. Why Choose Loan Samadhan (Split Layout) */}
      <WhyChooseUs />

      {/* 8. Loan Process (Horizontal Timeline) */}
      <LoanProcessTimeline />

      {/* 9. Google Reviews Section (5.0 Rating) */}
      <GoogleReviews />

      {/* 10. Final Call to Action Consultation Banner */}
      <section className="py-16 bg-gradient-to-r from-navy-900 via-royal to-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{SITE_CONFIG.taglineHindi}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mb-4 max-w-3xl mx-auto">
            Ready to Unlock the Best Loan Deal in Udaipur?
          </h2>

          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Speak directly with our senior finance specialists at Riddhi Siddhi Complex, Chetak Road. Free profile analysis, zero upfront charges, and doorstep documentation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Get Free Loan Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all"
            >
              <PhoneCall className="w-5 h-5 text-emerald-400" />
              <span>Call Us: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
