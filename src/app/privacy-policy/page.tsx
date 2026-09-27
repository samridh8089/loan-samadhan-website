import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy | Loan Samadhan Financial Services",
  description:
    "Privacy Policy for Loan Samadhan Udaipur. Details regarding information collection, security, and banking compliance.",
  alternates: {
    canonical: "https://www.loansamadhan.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-heading">
              Privacy Policy & Client Data Protection
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Last Updated: March 2026 | Loan Samadhan Financial Services, Udaipur
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
            <h2 className="text-xl font-bold text-navy-900">1. Commitment to Privacy</h2>
            <p>
              At <strong>Loan Samadhan</strong>, accessible from https://www.loansamadhan.in, we understand that financial documents and personal records (such as PAN cards, Aadhaar cards, ITR returns, and bank statements) are extremely sensitive. We are dedicated to ensuring the highest standards of data confidentiality, encryption, and institutional compliance.
            </p>

            <h2 className="text-xl font-bold text-navy-900">2. Information We Collect</h2>
            <p>
              When you submit a consultation request or contact us for loan assistance, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Full name, telephone/mobile number, email address, and residential city.</li>
              <li>Required loan type (Home Loan, Business Loan, Personal Loan, Car Loan, or LAP) and desired loan amount.</li>
              <li>Employment profile (salaried or self-employed), company name, and approximate monthly/annual income.</li>
              <li>Financial dossiers, property title papers, or dealership quotations provided voluntarily for bank loan processing.</li>
            </ul>

            <h2 className="text-xl font-bold text-navy-900">3. Purpose of Data Utilization</h2>
            <p>
              We utilize client information solely for:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Evaluating loan eligibility across our 25+ partner banks and NBFCs.</li>
              <li>Negotiating optimal interest rate concessions on your behalf with bank credit managers.</li>
              <li>Submitting formal loan dossiers to designated financial institutions with your explicit consent.</li>
              <li>Communicating updates, sanction letter terms, and disbursal milestones.</li>
            </ul>

            <h2 className="text-xl font-bold text-navy-900">4. Zero Data Selling & Anti-Spam Guarantee</h2>
            <p>
              Loan Samadhan has never sold, leased, or traded applicant data to telemarketers or third-party marketing companies, and never will. Your records are shared strictly with verified RBI-licensed banks where you have consented to submit a loan file.
            </p>

            <h2 className="text-xl font-bold text-navy-900">5. Contact Our Privacy Officer</h2>
            <p>
              If you have queries or request data removal, write to us at:
              <br />
              <strong>Loan Samadhan Financial Services</strong>
              <br />
              214, 2nd Floor, Riddhi Siddhi Complex, Chetak Road, Madhuban, Udaipur, Rajasthan – 313001
              <br />
              Email: {SITE_CONFIG.email} | Helpline: {SITE_CONFIG.phoneDisplay}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
