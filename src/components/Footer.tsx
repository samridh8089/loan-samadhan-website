import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/data/siteData";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden border-t-4 border-emerald">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/10 rounded-full blur-3xl pointer-events-none" />

      {/* Trust & Tagline Strip */}
      <div className="border-b border-navy-800 bg-navy-900/90 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="text-emerald-400 font-bold text-lg md:text-xl tracking-wide">
              {SITE_CONFIG.taglineHindi}
            </div>
            <p className="text-slate-300 text-sm max-w-xl">
              Transparent, professional banking consultancy in Udaipur. Zero upfront consultation fees — we only succeed when your loan is disbursed.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: {SITE_CONFIG.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-banking hover:bg-gradient-banking-hover text-white font-semibold text-sm shadow-lg shadow-black/20 transition-all"
            >
              <span>Get Free Advice</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: About & Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative h-12 w-48 bg-white p-2 rounded-xl">
              <Image
                src="/images/logo.png"
                alt="Loan Samadhan"
                fill
                sizes="192px"
                className="object-contain"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed pr-4">
              Loan Samadhan is Udaipur's premier loan consultancy, partnering with over 25 leading PSU, private banks and NBFCs. We empower individuals and business owners across Rajasthan with tailored funding solutions at the most competitive interest rates.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Authorized Banking Channel Partner in Udaipur</span>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-heading">
              Our Loan Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-emerald-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{s.name} ({s.hindiName})</span>
                    <span className="text-xs text-slate-500 group-hover:text-emerald-400 transition-colors">
                      {s.approvalTime}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-xs font-semibold text-royal-hover hover:text-white inline-flex items-center gap-1 text-blue-300"
                >
                  <span>Compare All Loan Types</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Tools (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/emi-calculator" className="hover:text-emerald-400 transition-colors">
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Office
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-heading">
              Udaipur Head Office
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  {SITE_CONFIG.address.full}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-xs hover:text-white font-medium"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-xs hover:text-white"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs">
                  {SITE_CONFIG.workingHours}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.address.googleMapsEmbed}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-white border border-navy-700 bg-navy-800/80 px-3 py-1.5 rounded-lg transition-colors"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Disclaimer & Copyright */}
      <div className="border-t border-navy-800 bg-navy-950 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All Rights Reserved. Udaipur, Rajasthan.
          </p>
          <p className="text-[11px] text-slate-500 max-w-xl text-center md:text-right">
            Disclaimer: Loan Samadhan is an independent financial consultancy and direct selling agent (DSA) channel partner. Final loan approval, interest rate, and terms are at the sole discretion of respective RBI-licensed partner banks and NBFCs.
          </p>
        </div>
      </div>
    </footer>
  );
}
