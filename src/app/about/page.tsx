import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Target,
  Eye,
  HeartHandshake
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import BankPartnerSlider from "@/components/BankPartnerSlider";
import GoogleReviews from "@/components/GoogleReviews";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Us | Loan Samadhan - Udaipur's Premier Finance Consultant",
  description:
    "Learn about Loan Samadhan, our 12+ years journey in Udaipur, Rajasthan, and our foundational ethos 'लोन नहीं तो कोई फीस नहीं'. Trusted by over 8,500 happy borrowers.",
  alternates: {
    canonical: "https://www.loansamadhan.in/about",
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-royal" />,
      title: "100% Client-First Transparency",
      description: "No hidden charges, no false promises. Every rate, processing clause, and foreclosure norm is presented clearly upfront."
    },
    {
      icon: <Award className="w-6 h-6 text-emerald" />,
      title: "Our Guiding Promise",
      description: `"${SITE_CONFIG.taglineHindi}" — We firmly believe in earning through successful disbursals, never by burdening applicants with upfront charges.`
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-royal" />,
      title: "Relationship-Driven Advisory",
      description: "We don't treat you as a file number. Our Udaipur team personally assists you with paperwork, legal approvals, and technical valuations."
    },
    {
      icon: <Building2 className="w-6 h-6 text-emerald" />,
      title: "Institutional Clout",
      description: "Direct ties with 25+ leading banks and NBFCs enable us to negotiate preferential interest rates and expedite credit committee sanctions."
    }
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero Banner */}
      <section className="relative py-16 md:py-24 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="About Loan Samadhan Udaipur"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-royal/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-4 border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.taglineHindi}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Empowering Udaipur's Financial Dreams Since 2014
            </h1>
            <p className="text-slate-200 text-base sm:text-lg mt-4 leading-relaxed">
              We bridge the gap between borrowers and India's finest banking institutions. Transparent advice, zero upfront fees, and personalized doorstep service across Rajasthan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image & Stats Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  alt="Loan Samadhan team and office consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-gradient-to-r from-navy-900 to-royal text-white p-5 rounded-2xl shadow-xl border border-white/20 max-w-xs">
                <div className="text-xs uppercase tracking-wider text-emerald-300 font-bold">
                  Udaipur Headquarters
                </div>
                <div className="text-sm font-semibold mt-1">
                  214, Riddhi Siddhi Complex, Madhuban, Chetak Road
                </div>
              </div>
            </div>

            {/* Right Story Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-royal text-xs font-semibold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-royal" />
                <span>Our Roots & Story</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
                Transforming How Mewar & Rajasthan Borrow Capital
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Founded with a mission to eliminate the confusion, rejection anxiety, and exorbitant commissions pervasive in traditional loan brokerage, <strong>Loan Samadhan</strong> was established in Udaipur as a modern, corporate-grade loan advisory.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Over the past 12+ years, we have built trusted relationships with more than 25 leading PSU and private commercial banks. Today, whether an entrepreneur in Sukher requires a ₹10 Crore MSME machinery loan, a doctor in Shobhagpura needs an attractive Home Loan, or a family requires urgent medical funds, Loan Samadhan is their most trusted ally.
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald flex-shrink-0" />
                  <span>Authorized DSA Channel Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald flex-shrink-0" />
                  <span>Doorstep Documentation in Udaipur</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald flex-shrink-0" />
                  <span>Special Nodal Bank Escalations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald flex-shrink-0" />
                  <span>Zero Upfront Advisory Fee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-surface-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 font-heading">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To simplify and democratize access to institutional finance across Rajasthan by pairing technological convenience with authentic, face-to-face consultation — ensuring every deserving borrower gets the lowest possible interest rate with zero upfront stress.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald/10 text-emerald flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 font-heading">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be Rajasthan's most respected financial consultancy, recognized for ethical transparency under our creed "लोन नहीं तो कोई फीस नहीं", and facilitating over ₹1,000 Crore in cumulative community wealth generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 font-heading">
              Our Core Guiding Principles
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              The values that dictate how we interact with every bank officer, applicant, and partner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-surface-light p-6 rounded-2xl border border-gray-200 hover:shadow-premium hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 border border-gray-200 shadow-sm">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2 font-heading">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Partners Marquee */}
      <BankPartnerSlider />

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
            Visit Our Udaipur Office or Consult Online
          </h2>
          <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
            Our doors are open Monday to Saturday at Chetak Road, Madhuban. Have a cup of tea while we analyze your loan profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-banking text-white font-bold rounded-xl shadow-lg text-sm"
            >
              <span>Schedule Free Office Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl text-sm border border-white/20"
            >
              <span>Call: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
