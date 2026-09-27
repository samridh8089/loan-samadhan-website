import type { Metadata } from "next";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Building2,
  ExternalLink,
  PhoneCall,
  MessageCircle
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import BankPartnerSlider from "@/components/BankPartnerSlider";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact Us | Loan Samadhan Udaipur | Chetak Road, Madhuban",
  description:
    "Contact Loan Samadhan Udaipur: 214, 2nd Floor, Riddhi Siddhi Complex, Chetak Road, Madhuban. Phone: 08949266064. Get free loan consultation with zero upfront fees.",
  keywords: [
    "Contact Loan Samadhan Udaipur",
    "Loan Samadhan Chetak Road",
    "Loan consultant office Udaipur",
    "Loan office Madhuban Udaipur"
  ],
  alternates: {
    canonical: "https://www.loan-samadhan.in/contact",
  },
};

export default function ContactPage() {
  const contactCards = [
    {
      icon: <MapPin className="w-6 h-6 text-royal" />,
      title: "Our Registered Office",
      line1: SITE_CONFIG.address.office,
      line2: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, Rajasthan – ${SITE_CONFIG.address.pincode}`,
      actionLabel: "View on Google Maps",
      actionHref: SITE_CONFIG.address.googleMapsEmbed,
      isExternal: true
    },
    {
      icon: <Phone className="w-6 h-6 text-emerald" />,
      title: "Direct Phone Helpline",
      line1: SITE_CONFIG.phoneDisplay,
      line2: "Direct calling for fast loan sanctions",
      actionLabel: `Call: ${SITE_CONFIG.phone}`,
      actionHref: `tel:${SITE_CONFIG.phone}`,
      isExternal: false
    },
    {
      icon: <Mail className="w-6 h-6 text-royal" />,
      title: "Email Correspondence",
      line1: SITE_CONFIG.email,
      line2: "Send loan requirements & scanned documents",
      actionLabel: "Send Email",
      actionHref: `mailto:${SITE_CONFIG.email}`,
      isExternal: false
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald" />,
      title: "Consultation Working Hours",
      line1: "Monday to Saturday",
      line2: SITE_CONFIG.workingHours,
      actionLabel: "Open 6 Days a Week",
      actionHref: "#contact-form",
      isExternal: false
    }
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Header Banner */}
      <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.taglineHindi}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Get in Touch with Loan Samadhan
            </h1>
            <p className="text-slate-200 text-base sm:text-lg mt-3 leading-relaxed">
              Visit our central Udaipur office at Chetak Road, Madhuban, or submit your details online for a free callback within 15 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((c, i) => (
              <div
                key={i}
                className="bg-surface-light p-6 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-gray-200 shadow-sm mb-4">
                    {c.icon}
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-1 font-heading">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800">
                    {c.line1}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                    {c.line2}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/60">
                  <a
                    href={c.actionHref}
                    target={c.isExternal ? "_blank" : undefined}
                    rel={c.isExternal ? "noopener noreferrer" : undefined}
                    className="text-xs font-bold text-royal hover:text-royal-hover inline-flex items-center gap-1"
                  >
                    <span>{c.actionLabel}</span>
                    {c.isExternal && <ExternalLink className="w-3 h-3" />}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Split: Form (Left) & Google Map + Office Info (Right) */}
      <section id="contact-form" className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (6 cols) */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>

            {/* Google Map & Office Details (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-royal text-xs font-semibold uppercase tracking-wider mb-2">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Headquarters Location</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-heading">
                    Loan Samadhan Udaipur
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    Conveniently located on Chetak Road in Madhuban, easily accessible from all commercial hubs of Udaipur.
                  </p>
                </div>

                {/* Google Map Embed */}
                <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                  <iframe
                    title="Loan Samadhan Office Location Riddhi Siddhi Complex Chetak Road Udaipur"
                    src="https://maps.google.com/maps?q=214,%202nd%20Floor,%20Riddhi%20Siddhi%20Complex,%20Chetak%20Road,%20Madhuban,%20Udaipur,%20Rajasthan%20313001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                {/* Direct Action Bar */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-navy-900 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-navy-800 transition-all shadow-sm"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <span>Direct Call: {SITE_CONFIG.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Namaste%20Loan%20Samadhan%2C%20I%20am%20in%20Udaipur%20and%20need%20a%20loan%20consultation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-emerald-hover transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 pt-2 border-t border-gray-100">
                  <ShieldCheck className="w-4 h-4 text-emerald flex-shrink-0" />
                  <span>Ample vehicle parking available at Riddhi Siddhi Complex, Chetak Road.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BankPartnerSlider />
    </>
  );
}
