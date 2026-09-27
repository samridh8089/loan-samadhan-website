"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, ShieldCheck, Send, Sparkles, PhoneCall, MessageCircle } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/data/siteData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    loanType: "Home Loan",
    city: "Udaipur",
    amount: "₹25,00,000",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageLines = [
      `*New Loan Consultation Request - Loan Samadhan*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `*Applicant Name:* ${formData.name}`,
      `*Mobile Number:* +91 ${formData.mobile}`,
      `*City / Location:* ${formData.city}`,
      `*Loan Product:* ${formData.loanType}`,
      `*Required Amount:* ${formData.amount}`,
      formData.message ? `*Notes / Requirements:* ${formData.message}` : null,
      `━━━━━━━━━━━━━━━━━━━━`,
      `"लोन नहीं तो कोई फीस नहीं"`,
      `Loan Samadhan Udaipur | Office: Riddhi Siddhi Complex`
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsappNumber}&text=${encodeURIComponent(messageLines)}`;
    setWaLink(whatsappUrl);

    if (typeof window !== "undefined") {
      try {
        window.open(whatsappUrl, "_blank");
      } catch (err) {
        console.error("Popup window error:", err);
      }
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/90 shadow-xl relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 rounded-full blur-2xl pointer-events-none" />

      {isSubmitted ? (
        <div className="text-center py-10 space-y-5 animate-fadeIn">
          <div className="w-16 h-16 bg-emerald-100 text-emerald rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase">
              Application Dispatched
            </span>
            <h3 className="text-2xl font-bold text-navy-900 font-heading">
              परामर्श अनुरोध प्राप्त हुआ!
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Our senior credit advisor will call you within <strong>15 minutes</strong> with customized quotes across our 25+ partner banks.
            </p>
          </div>

          <div className="bg-surface-light border border-gray-200 rounded-2xl p-4 text-xs text-left max-w-sm mx-auto space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Applicant:</span>
              <span className="font-semibold text-navy-900">{formData.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Mobile:</span>
              <span className="font-semibold text-navy-900">+91 {formData.mobile}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Loan Product:</span>
              <span className="font-semibold text-navy-900">{formData.loanType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Location:</span>
              <span className="font-semibold text-navy-900">{formData.city}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2.5 max-w-sm mx-auto">
            {waLink && (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald text-white font-bold text-sm shadow-lg shadow-emerald/20 hover:bg-emerald-hover transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp पर विवरण भेजें (+91 89492 66064)</span>
              </a>
            )}
            <div className="flex gap-2">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-navy-900 text-white font-semibold text-xs transition-colors hover:bg-navy-800"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald" />
                <span>Call Udaipur Office</span>
              </a>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gray-100 text-gray-700 font-semibold text-xs hover:bg-gray-200 transition-colors"
              >
                New Inquiry (नया आवेदन)
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-b border-gray-100 pb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald" />
              <span>{SITE_CONFIG.taglineHindi}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-heading">
              Get Free Loan Consultation
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Fill your requirement below. We guarantee 100% privacy and zero upfront charges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Full Name (नाम) *
              </label>
              <input
                type="text"
                required
                placeholder="Ramesh Patel"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Mobile Number (मोबाइल) *
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-sm text-gray-400 font-semibold">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="9876543210"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-sm outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Loan Type (लोन प्रकार) *
              </label>
              <select
                value={formData.loanType}
                onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-sm outline-none transition-all bg-white"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name} ({s.hindiName})
                  </option>
                ))}
                <option value="Balance Transfer & Top-Up">Balance Transfer & Top-Up</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                City / Location (शहर) *
              </label>
              <input
                type="text"
                required
                placeholder="Udaipur, Rajsamand, etc."
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-sm outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Required Loan Amount
            </label>
            <input
              type="text"
              placeholder="e.g. ₹35,00,000"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Message / Notes (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Any details on your employment (Salaried / Self-Employed), property status, or special timeline..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-sm outline-none transition-all resize-none"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <ShieldCheck className="w-4 h-4 text-emerald flex-shrink-0" />
            <span>Strict privacy assurance. No sales robocalls or spam.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-banking hover:bg-gradient-banking-hover shadow-lg shadow-royal/20 hover:shadow-xl hover:shadow-royal/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-75 cursor-pointer"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Get Loan Consultation on WhatsApp</span>
              </>
            )}
          </button>
          <p className="text-center text-xs text-gray-400">
            Form details are sent directly to our credit advisor on WhatsApp (+91 89492 66064).
          </p>
        </form>
      )}
    </div>
  );
}
