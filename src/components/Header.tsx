"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  Home, 
  Briefcase, 
  UserCheck, 
  Car, 
  Building2, 
  Calculator, 
  HelpCircle, 
  MapPin,
  Clock,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/data/siteData";
import { openApplyModal } from "@/components/ApplyModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [pathname]);

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "home-loan":
        return <Home className="w-4 h-4 text-royal" />;
      case "business-loan":
        return <Briefcase className="w-4 h-4 text-emerald" />;
      case "personal-loan":
        return <UserCheck className="w-4 h-4 text-royal" />;
      case "car-loan":
        return <Car className="w-4 h-4 text-emerald" />;
      case "loan-against-property":
        return <Building2 className="w-4 h-4 text-royal" />;
      default:
        return <Sparkles className="w-4 h-4 text-royal" />;
    }
  };

  return (
    <>
      {/* Top Banking Info Bar */}
      <div className="bg-navy-900 text-white text-xs py-2 px-4 border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              {SITE_CONFIG.taglineHindi}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-emerald-400" />
              Riddhi Siddhi Complex, Chetak Road, Udaipur
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-emerald-400" />
              {SITE_CONFIG.workingHours}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-300 hidden sm:inline">Expert Loan Advisory:</span>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-gray-100"
            : "bg-white py-3.5 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-48 sm:h-14 sm:w-52">
              <Image
                src="/images/logo.png"
                alt="Loan Samadhan Logo"
                fill
                priority
                sizes="(max-width: 640px) 192px, 208px"
                className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-200"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-royal font-semibold bg-royal/5"
                  : "text-gray-700 hover:text-royal hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/about"
                  ? "text-royal font-semibold bg-royal/5"
                  : "text-gray-700 hover:text-royal hover:bg-gray-50"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-royal font-semibold bg-royal/5"
                    : "text-gray-700 hover:text-royal hover:bg-gray-50"
                }`}
                aria-expanded={isServicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesDropdownOpen ? "rotate-180 text-royal" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2.5 overflow-hidden">
                    <div className="px-3 py-2 border-b border-gray-100 bg-gray-50/70 rounded-xl mb-1.5">
                      <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                        Tailored Finance Solutions
                      </div>
                      <div className="text-xs text-navy-900 font-semibold mt-0.5">
                        Lowest ROI & 147+ Bank Options
                      </div>
                    </div>
                    <div className="space-y-1">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-royal/5 group transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-royal/10 transition-colors">
                              {getServiceIcon(service.slug)}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-royal transition-colors">
                                {service.name}
                              </div>
                              <div className="text-[11px] text-gray-500">
                                {service.interestRate}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-royal group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <Link
                        href="/services"
                        className="block text-center text-xs font-semibold text-royal hover:text-royal-hover py-1"
                      >
                        View All Services & Compare &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/emi-calculator"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/emi-calculator"
                  ? "text-royal font-semibold bg-royal/5"
                  : "text-gray-700 hover:text-royal hover:bg-gray-50"
              }`}
            >
              <Calculator className="w-4 h-4 text-emerald" />
              <span>EMI Calculator</span>
            </Link>

            <Link
              href="/faq"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/faq"
                  ? "text-royal font-semibold bg-royal/5"
                  : "text-gray-700 hover:text-royal hover:bg-gray-50"
              }`}
            >
              <HelpCircle className="w-4 h-4 text-gray-400" />
              <span>FAQ</span>
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-royal font-semibold bg-royal/5"
                  : "text-gray-700 hover:text-royal hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-navy-900 hover:text-royal bg-gray-100 hover:bg-gray-200/80 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-emerald" />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            <button
              onClick={() => openApplyModal()}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-banking hover:bg-gradient-banking-hover rounded-xl shadow-md hover:shadow-lg hover:shadow-royal/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openApplyModal()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-banking rounded-lg shadow-sm"
            >
              Apply Now
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-royal hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[90px] z-40 lg:hidden bg-navy-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border-b border-gray-200 max-h-[85vh] overflow-y-auto p-5 shadow-2xl space-y-4">
            <div className="pb-3 border-b border-gray-100">
              <div className="text-xs font-bold text-emerald tracking-wide uppercase">
                {SITE_CONFIG.taglineHindi}
              </div>
              <div className="text-sm text-gray-500 mt-0.5">
                Udaipur's Trusted Loan Consultancy
              </div>
            </div>

            <nav className="space-y-1">
              <Link
                href="/"
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-gray-900 hover:bg-royal/5 hover:text-royal"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-gray-900 hover:bg-royal/5 hover:text-royal"
              >
                About Us
              </Link>

              <div className="pt-2 pb-1">
                <div className="px-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                  Loan Services
                </div>
                <div className="mt-1 space-y-1 pl-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-royal/5 hover:text-royal"
                    >
                      {getServiceIcon(s.slug)}
                      <span>{s.name} ({s.hindiName})</span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block px-3 py-2 text-xs font-semibold text-royal hover:underline"
                  >
                    View All Services Overview &rarr;
                  </Link>
                </div>
              </div>

              <Link
                href="/emi-calculator"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-base font-semibold text-gray-900 hover:bg-royal/5 hover:text-royal"
              >
                <Calculator className="w-5 h-5 text-emerald" />
                <span>EMI Calculator</span>
              </Link>

              <Link
                href="/faq"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-base font-semibold text-gray-900 hover:bg-royal/5 hover:text-royal"
              >
                <HelpCircle className="w-5 h-5 text-gray-500" />
                <span>Frequently Asked Questions</span>
              </Link>

              <Link
                href="/contact"
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-gray-900 hover:bg-royal/5 hover:text-royal"
              >
                Contact Us
              </Link>
            </nav>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-navy-900 text-white font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-emerald" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openApplyModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-banking text-white font-semibold text-sm shadow-md"
              >
                Apply for Loan Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
