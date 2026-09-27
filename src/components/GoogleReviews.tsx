import { Star, CheckCircle, ShieldCheck, Quote } from "lucide-react";
import { TESTIMONIALS, SITE_CONFIG } from "@/data/siteData";

export default function GoogleReviews() {
  return (
    <section className="py-16 md:py-24 bg-surface-light border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Google Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
            {/* Google 'G' badge icon SVG */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="text-xs font-bold text-gray-800">
              Google Customer Reviews
            </span>
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-extrabold text-navy-900">
              {SITE_CONFIG.googleRating} / 5.0
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 font-heading">
            What Udaipur Borrowers Say About Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Real feedback from local business owners, home buyers, and salaried professionals in Udaipur who secured loans through Loan Samadhan.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-royal/15" />
                </div>

                {/* Loan Tag */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-royal/10 text-royal text-xs font-semibold mb-3">
                  {item.loanType}
                </div>

                {/* Comment */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-navy-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {item.location}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald font-semibold bg-emerald-50 px-2 py-1 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy-900">
                100% Genuine Client Satisfaction
              </div>
              <div className="text-xs text-gray-500">
                Over {SITE_CONFIG.googleReviewsCount} 5-star ratings across Google and local trade associations in Udaipur.
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-royal hover:underline whitespace-nowrap"
          >
            Read All Reviews on Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
