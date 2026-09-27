import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Terms of Service | Loan Samadhan Financial Services",
  description:
    "Terms of Service for Loan Samadhan Udaipur. Understand our consultancy relationship and banking channel partner policies.",
  alternates: {
    canonical: "https://www.loansamadhan.in/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-heading">
              Terms of Service & Advisory Policy
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Last Updated: March 2026 | Loan Samadhan, Udaipur
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
            <h2 className="text-xl font-bold text-navy-900">1. Nature of Advisory Services</h2>
            <p>
              <strong>Loan Samadhan</strong> acts as an authorized direct selling agent (DSA) and channel partner connecting prospective loan borrowers with Indian banking institutions and Non-Banking Financial Companies (NBFCs). Loan Samadhan does not directly issue capital or operate as a deposit-taking non-banking entity.
            </p>

            <h2 className="text-xl font-bold text-navy-900">2. Our Core Pledge: "लोन नहीं तो कोई फीस नहीं"</h2>
            <p>
              Loan Samadhan does not demand upfront consultation charges, appraisal fees, or hidden advisory commissions from applicants. Borrowers are only liable for mandatory bank processing fees, legal search fees, or stamp duties payable directly to lending institutions or government revenue offices.
            </p>

            <h2 className="text-xl font-bold text-navy-900">3. Sanction & Disbursal Discretion</h2>
            <p>
              While our consultants work diligently to prepare robust loan dossiers and negotiate preferential interest rates, final credit underwriting, loan eligibility limits, applicable interest rates, and final disbursal approvals remain at the sole and unfettered discretion of the respective RBI-regulated lending bank or NBFC.
            </p>

            <h2 className="text-xl font-bold text-navy-900">4. Applicant Accuracy</h2>
            <p>
              Applicants certify that all information, identification credentials, banking statements, and property title records furnished to Loan Samadhan and partner banks are authentic and accurate. Providing counterfeit documentation is prohibited by law.
            </p>

            <h2 className="text-xl font-bold text-navy-900">5. Jurisdiction</h2>
            <p>
              Any legal disagreements or matters arising out of our advisory consultations shall be governed under the exclusive jurisdiction of the competent courts of <strong>Udaipur, Rajasthan, India</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
