"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { X, CheckCircle, ShieldCheck, PhoneCall, Sparkles, Send } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/data/siteData";

export interface ModalPayload {
  loanType?: string;
  amount?: string | number;
}

export function openApplyModal(payload?: ModalPayload) {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("open-apply-modal", { detail: payload });
    window.dispatchEvent(event);
  }
}

export default function ApplyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    loanType: "Home Loan",
    amount: "₹25,00,000",
    city: "Udaipur",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<ModalPayload | undefined>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          loanType: customEvent.detail?.loanType || prev.loanType,
          amount: customEvent.detail?.amount ? String(customEvent.detail.amount) : prev.amount
        }));
      }
      setIsSuccess(false);
      setIsOpen(true);
    };

    window.addEventListener("open-apply-modal", handleOpen);
    return () => window.removeEventListener("open-apply-modal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 900);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setIsSuccess(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-navy-900/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-navy-900 via-royal to-emerald p-6 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wide uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>{SITE_CONFIG.taglineHindi}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-heading">
            निःशुल्क लोन परामर्श (Free Consultation)
          </h3>
          <p className="text-blue-100 text-sm mt-1">
            Compare 25+ Bank options with zero upfront fees in Udaipur.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-navy-900 font-heading">
                आवेदन सफलतापूर्वक प्राप्त हुआ!
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our senior loan advisor will contact you within <strong>15 minutes</strong> with the best bank interest rate quotes.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-left text-xs text-gray-700 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-gray-500">Loan Type:</span>
                  <span className="font-semibold text-navy-900">{formData.loanType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Required Amount:</span>
                  <span className="font-semibold text-navy-900">{formData.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Contact Number:</span>
                  <span className="font-semibold text-navy-900">+91 {formData.mobile}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-navy-900 hover:bg-navy-800 text-white rounded-xl font-medium text-sm transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call Us Directly</span>
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-medium text-sm transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Full Name (पूरा नाम) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none text-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-sm text-gray-500 font-medium">
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
                      className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    City (शहर) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Loan Type (लोन प्रकार) *
                  </label>
                  <select
                    value={formData.loanType}
                    onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none text-sm transition-all bg-white"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.hindiName})
                      </option>
                    ))}
                    <option value="Loan Transfer / Top-Up">Balance Transfer & Top-Up</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Estimated Amount *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₹25,00,000"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Any Specific Requirement (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need lowest interest rate, quick disbursal, or salaried/business details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none text-sm transition-all resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald flex-shrink-0" />
                <span>100% Confidential. Zero spam. We never share your data.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-banking hover:bg-gradient-banking-hover shadow-lg shadow-royal/20 hover:shadow-xl hover:shadow-royal/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 text-sm md:text-base"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Get Free Loan Sanction Quotes</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
