export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  interestRate: string;
  maxTenure: string;
  maxAmount: string;
  approvalTime: string;
  image: string;
  whoCanApply: string[];
  benefits: { title: string; description: string }[];
  documents: { category: string; items: string[] }[];
  process: { step: number; title: string; description: string }[];
  features?: string[];
}

export const SITE_CONFIG = {
  name: "Loan Samadhan",
  legalName: "Loan Samadhan Financial Services",
  taglineHindi: "लोन नहीं तो कोई फीस नहीं",
  taglineEnglish: "Expert Loan Solutions with Zero Upfront Charges",
  subheadlineHindi: "Home Loan, Business Loan, Personal Loan, Car Loan और Loan Against Property के लिए विशेषज्ञ सलाह।",
  phone: "08949266064",
  phoneDisplay: "+91 89492 66064",
  whatsappNumber: "918949266064",
  email: "contact@loan-samadhan.in",
  address: {
    office: "214, 2nd Floor, Riddhi Siddhi Complex",
    street: "Chetak Road, Madhuban",
    city: "Udaipur",
    state: "Rajasthan",
    pincode: "313001",
    country: "India",
    full: "214, 2nd Floor, Riddhi Siddhi Complex, Chetak Road, Madhuban, Udaipur, Rajasthan – 313001",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.8797880790103!2d73.69348987595304!3d24.59336185589139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56598c19957%3A0xe744e83711915998!2sRiddhi%20Siddhi%20Complex!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
  },
  workingHours: "Monday – Saturday: 9:30 AM to 7:00 PM",
  experienceYears: "12+",
  totalDisbursed: "₹450+ Cr",
  happyCustomers: "8,500+",
  bankPartnersCount: "147+",
  googleRating: "5.0",
  googleReviewsCount: "230+"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "home-loan",
    slug: "home-loan",
    name: "Home Loan",
    hindiName: "होम लोन",
    shortDescription: "Affordable housing finance assistance with lowest interest rates and flexible tenures.",
    heroHeadline: "अपना सपनों का घर बनाएं आसान किस्तों में",
    heroSubheadline: "Best Home Loan interest rates from 8.35% p.a. through 147+ trusted banking partners in Udaipur.",
    interestRate: "Starting 8.35% p.a.",
    maxTenure: "Up to 30 Years",
    maxAmount: "Up to ₹10 Crore",
    approvalTime: "48 - 72 Hours",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    whoCanApply: [
      "Salaried individuals working with private/public sector or MNCs (Min. ₹20,000 monthly income)",
      "Self-employed professionals (Doctors, Chartered Accountants, Architects, Consultants)",
      "Self-employed businessmen, traders, and SME owners with 2+ years of business vintage",
      "Age group between 21 to 65 years with Indian citizenship",
      "CIBIL score of 650 and above (special assistance for first-time borrowers)"
    ],
    benefits: [
      {
        title: "Lowest Bank Rates Comparison",
        description: "We compare rates across HDFC, SBI, ICICI, Axis and other leading lenders to ensure you secure the most competitive ROI."
      },
      {
        title: "Maximum Loan Eligibility",
        description: "Club co-applicant income (spouse, parents, working child) to unlock higher loan amounts and lower debt-to-income ratios."
      },
      {
        title: "Doorstep Documentation",
        description: "Our dedicated loan consultant collects and verifies legal, technical, and property documents right at your home or office in Udaipur."
      },
      {
        title: "PMAY & Tax Subsidies Assistance",
        description: "Guidance on tax deductions up to ₹2 Lakh on interest under Section 24 and ₹1.5 Lakh under Section 80C."
      },
      {
        title: "Balance Transfer & Top-Up",
        description: "Transfer your existing high-cost home loan to lower interest rates with zero processing hassle and get quick additional top-up cash."
      },
      {
        title: "Zero Consultancy Fee",
        description: "True to our core promise 'लोन नहीं तो कोई फीस नहीं' — complete transparent advisory without hidden commissions."
      }
    ],
    documents: [
      {
        category: "Salaried Applicants",
        items: [
          "PAN Card & Aadhaar Card (KYC)",
          "Last 3 Months Salary Slips",
          "Last 6 Months Bank Account Statement",
          "Form 16 or Income Tax Returns for last 2 years",
          "Copy of Property Agreement / Allotment Letter / Title Deed"
        ]
      },
      {
        category: "Self-Employed / Business",
        items: [
          "PAN Card, Aadhaar Card, Business Registration Certificate (GST/MSME)",
          "Last 3 Years Audited Balance Sheet & Profit-Loss Statements",
          "Last 2 Years Income Tax Returns with Computation of Income",
          "Last 12 Months Current & Savings Bank Account Statements",
          "Chain of Title Deeds & Approved Building Plan"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Free Profile Assessment",
        description: "Share your requirements, income, and preferred property details. Our experts evaluate eligibility across multiple banks."
      },
      {
        step: 2,
        title: "Document Collection",
        description: "We collect legal and financial documents from your doorstep and prepare a water-tight loan application."
      },
      {
        step: 3,
        title: "Bank Approval & Sanction",
        description: "Application is expedited through our direct nodal banking channels for prompt sanction letter issuance."
      },
      {
        step: 4,
        title: "Disbursal & Key Handover",
        description: "Following technical valuation and legal clearance, funds are disbursed directly to the seller/builder."
      }
    ]
  },
  {
    id: "business-loan",
    slug: "business-loan",
    name: "Business Loan",
    hindiName: "बिजनेस लोन",
    shortDescription: "Customized funding solutions for working capital, machinery, expansion, and MSME growth.",
    heroHeadline: "व्यापार के विस्तार के लिए तुरंत पूंजी समाधान",
    heroSubheadline: "Collateral-free and secured business loans up to ₹50 Crore for entrepreneurs and enterprises across Rajasthan.",
    interestRate: "Starting 11.25% p.a.",
    maxTenure: "Up to 7 Years (Unsecured) / 15 Years (Secured)",
    maxAmount: "Up to ₹50 Crore",
    approvalTime: "24 - 48 Hours",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    whoCanApply: [
      "Sole Proprietorships, Partnership firms, and LLPs",
      "Private Limited and Public Limited companies",
      "Manufacturers, Traders, Retailers, Wholesalers, and Service Providers",
      "Minimum 2 years of active business operations with annual turnover above ₹20 Lakh",
      "Valid GST registration and clean banking repayment track record"
    ],
    benefits: [
      {
        title: "Working Capital & Cash Credit",
        description: "Overdraft (OD) and Cash Credit (CC) limits tailored to fulfill immediate cash flow gaps, vendor payables, and inventory purchase."
      },
      {
        title: "Unsecured Collateral-Free Loans",
        description: "Fast funds up to ₹75 Lakh without pledging commercial or residential property assets."
      },
      {
        title: "CGTMSE & MSME Scheme Benefits",
        description: "Special priority sector lending under Government-backed credit guarantee schemes with discounted interest charges."
      },
      {
        title: "Machinery & Equipment Financing",
        description: "High LTV financing for industrial machinery, commercial vehicles, solar plants, and office infrastructure."
      },
      {
        title: "Flexible Repayment Schedules",
        description: "Repay through structured EMI, balloon payments, or seasonal repayment cycles synced with your business turnover."
      },
      {
        title: "No Hidden Costs",
        description: "Zero fees unless loan gets sanctioned and accepted — 100% adherence to 'लोन नहीं तो कोई फीस नहीं'."
      }
    ],
    documents: [
      {
        category: "Financial Documents",
        items: [
          "Last 3 Years Audited Financials (Balance Sheet, P&L with schedules)",
          "Last 12 Months Bank Statements of all active business accounts",
          "GST Returns (GSTR-3B & GSTR-1) for the last 12 months",
          "Provisional Financials / Projected statements for the current year",
          "Existing loan sanction letters and repayment track records"
        ]
      },
      {
        category: "KYC & Business Proof",
        items: [
          "PAN of Promoters & Entity, Aadhaar of Directors / Partners",
          "Certificate of Incorporation, MOA, AOA, Partnership Deed",
          "GST Certificate, Udyam MSME Registration, Shop Act License",
          "Utility bills for business premise and registered office"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Financial Health Analysis",
        description: "We review your balance sheet, DSCR, and banking transaction volumes to determine optimal sanction limit."
      },
      {
        step: 2,
        title: "Custom Proposal Creation",
        description: "Drafting a credit proposal highlighting business strengths to ensure instant credit committee approval."
      },
      {
        step: 3,
        title: "Multi-Lender Bidding",
        description: "Connecting with 15+ PSU and Private Banks, NBFCs, and Fintech lenders for best rate competition."
      },
      {
        step: 4,
        title: "Fast Disbursal",
        description: "Direct credit of funds into your current account with transparent sanction terms and zero surprises."
      }
    ]
  },
  {
    id: "personal-loan",
    slug: "personal-loan",
    name: "Personal Loan",
    hindiName: "पर्सनल लोन",
    shortDescription: "Quick financial support with minimal documentation for medical emergencies, travel, weddings, or debt consolidation.",
    heroHeadline: "हर व्यक्तिगत जरूरत के लिए तुरंत पर्सनल लोन",
    heroSubheadline: "Fast-track approval within 24 hours with zero collateral and minimal paper trail in Udaipur.",
    interestRate: "Starting 10.49% p.a.",
    maxTenure: "Up to 5 Years",
    maxAmount: "Up to ₹40 Lakh",
    approvalTime: "Same Day Disbursal",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80",
    whoCanApply: [
      "Salaried employees of Government, PSU, MNCs, and Reputed Private Limited firms",
      "Minimum net take-home salary of ₹18,000 per month (Udaipur & Rajasthan region)",
      "Age bracket between 21 and 58 years",
      "Minimum 6 months in current employment and 1 year total work experience",
      "Valid PAN and Aadhaar with mobile number linkage"
    ],
    benefits: [
      {
        title: "No Collateral Required",
        description: "100% unsecured loan. No need to mortgage gold, vehicle, fixed deposit, or property."
      },
      {
        title: "Instant Digital Sanction",
        description: "End-to-end digital processing through instant API verification for salaried individuals."
      },
      {
        title: "Multi-Purpose Usage",
        description: "Complete freedom of utilization — medical expenses, child higher education, wedding celebrations, or home renovation."
      },
      {
        title: "High-Cost Debt Consolidation",
        description: "Combine multiple credit card dues and costly short-term loans into a single affordable monthly EMI."
      },
      {
        title: "Prepayment & Part-Payment Options",
        description: "Banks offering flexible foreclosure and zero foreclosure charges after standard lock-in period."
      },
      {
        title: "Transparent Terms",
        description: "Zero upfront consultation fee. Complete peace of mind guaranteed under 'लोन नहीं तो कोई फीस नहीं'."
      }
    ],
    documents: [
      {
        category: "Essential Documents",
        items: [
          "PAN Card & Aadhaar Card",
          "Last 3 Months Salary Slips with company seal or digital signature",
          "Last 6 Months Bank Statement where salary is credited (PDF format)",
          "Employee Identity Card & Official Email Verification",
          "Proof of Residence (Electricity bill, Rent agreement, or Voter ID)"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Online Inquiry",
        description: "Fill the quick application form or call us directly with your monthly salary and employer details."
      },
      {
        step: 2,
        title: "Credit Evaluation",
        description: "We check bureau score and match with bank eligibility algorithms without negative score impact."
      },
      {
        step: 3,
        title: "One-Click Verification",
        description: "Quick verification of salary statement and KYC through secure banking portals."
      },
      {
        step: 4,
        title: "Account Disbursal",
        description: "Sanction letter approved and amount directly credited to your bank account within 24 hours."
      }
    ]
  },
  {
    id: "car-loan",
    slug: "car-loan",
    name: "Car Loan",
    hindiName: "कार लोन",
    shortDescription: "New and used vehicle financing assistance with up to 100% on-road funding options.",
    heroHeadline: "अपनी मनपसंद कार घर लाएं आकर्षक ब्याज दरों पर",
    heroSubheadline: "Get up to 100% on-road funding for brand new and pre-owned cars with fast showroom delivery.",
    interestRate: "Starting 8.75% p.a.",
    maxTenure: "Up to 7 Years",
    maxAmount: "Up to ₹1.5 Crore",
    approvalTime: "Same Day Approval",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    whoCanApply: [
      "Salaried individuals with stable employment and min. ₹18,000 monthly earnings",
      "Self-employed businessmen, professionals, and agriculturists with ITR records",
      "Buyers planning for New Passenger Cars, Electric Vehicles (EV), or Certified Used Cars",
      "Minimum 18 years of age (at application) to 65 years (at loan maturity)"
    ],
    benefits: [
      {
        title: "Up to 100% On-Road Funding",
        description: "Finance the entire ex-showroom price, RTO road tax, vehicle insurance, and registration fee."
      },
      {
        title: "New & Certified Pre-Owned Cars",
        description: "Attractive schemes for newly launched showroom models as well as verified pre-owned luxury and commercial vehicles."
      },
      {
        title: "Showroom Delivery Coordination",
        description: "We issue Delivery Order (DO) directly to Udaipur authorized automobile dealerships for instant vehicle release."
      },
      {
        title: "Lowest Processing Charges",
        description: "Pre-negotiated corporate rates with leading PSU and private vehicle finance lenders."
      },
      {
        title: "Special Green EV Subsidies",
        description: "Lower interest rate concessions and tax benefits under Section 8B for electric car purchases."
      },
      {
        title: "Zero Consultancy Charges",
        description: "Professional auto loan advisory with 100% transparency. 'लोन नहीं तो कोई फीस नहीं'."
      }
    ],
    documents: [
      {
        category: "Salaried & Self-Employed",
        items: [
          "PAN Card, Aadhaar Card, Driving License / Passport",
          "Latest 3 Months Salary Slips OR 2 Years ITR with Computation",
          "Last 6 Months Bank Statement",
          "Proforma Invoice / Quotation from authorized Car Dealership",
          "RC Copy & Valuation Report (Applicable for used cars only)"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Vehicle Selection & Quote",
        description: "Select your desired car model from any showroom and get the dealer proforma quote."
      },
      {
        step: 2,
        title: "Financing Comparison",
        description: "We compare rates, loan-to-value ratios, and foreclosure norms across top vehicle financiers."
      },
      {
        step: 3,
        title: "Sanction & Delivery Order",
        description: "Loan is sanctioned within hours and Delivery Order (DO) is sent directly to the car showroom."
      },
      {
        step: 4,
        title: "Drive Away",
        description: "Take delivery of your car smoothly while bank completes documentation formalities."
      }
    ]
  },
  {
    id: "loan-against-property",
    slug: "loan-against-property",
    name: "Loan Against Property (LAP)",
    hindiName: "लोन अगेंस्ट प्रॉपर्टी",
    shortDescription: "Unlock the hidden equity in your residential, commercial, or industrial real estate.",
    heroHeadline: "अपनी प्रॉपर्टी की ताकत से पाएं बड़ा लोन आसान किस्तों पर",
    heroSubheadline: "Mortgage finance up to ₹25 Crore with lower interest rates and prolonged repayment tenure up to 15 years.",
    interestRate: "Starting 9.00% p.a.",
    maxTenure: "Up to 15 - 20 Years",
    maxAmount: "Up to ₹25 Crore",
    approvalTime: "3 - 5 Days",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    whoCanApply: [
      "Property owners of freehold residential houses, flats, commercial shops, office spaces, or industrial plots",
      "Salaried professionals requiring large funds for family needs or business ventures",
      "Business owners needing long-term low-cost capital for business expansion or debt restructuring",
      "Clear, marketable property title without active litigations in Udaipur and surrounding districts"
    ],
    benefits: [
      {
        title: "Substantially Lower Interest Rates",
        description: "Because LAP is backed by real estate collateral, interest rates are much lower than unsecured personal or business loans."
      },
      {
        title: "High Loan-to-Value (LTV)",
        description: "Obtain up to 60% to 75% of your property's current verified market valuation."
      },
      {
        title: "Extended Repayment Tenure",
        description: "Long repayment tenure of up to 15 to 20 years ensures monthly EMI remains small and manageable."
      },
      {
        title: "Residential & Commercial Assets",
        description: "Eligible on self-occupied residences, rented residential flats, commercial shops, plots, and industrial sheds."
      },
      {
        title: "Retain Full Ownership & Usage",
        description: "Continue staying in your home or running business from your commercial space throughout the loan tenure."
      },
      {
        title: "Transparent & Ethical Advisory",
        description: "We handle technical valuation, legal scrutiny, and bank liaisoning. 'लोन नहीं तो कोई फीस नहीं'."
      }
    ],
    documents: [
      {
        category: "Property Documents",
        items: [
          "Complete Registered Title Deed / Sale Deed / Conveyance Deed",
          "Chain of prior title deeds for past 13 to 30 years",
          "Approved building plan from UIT / Municipal Corporation Udaipur",
          "Latest House Tax / Municipal Tax paid receipt",
          "Property Encumbrance Certificate (EC) or Patta copy"
        ]
      },
      {
        category: "Financial & KYC Documents",
        items: [
          "PAN Card & Aadhaar Card of all property co-owners",
          "Last 3 Years ITR with Balance Sheet & Profit-Loss Account",
          "Last 12 Months Bank Statements of all primary accounts",
          "Business Registration documents (for self-employed applicants)"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Property & Profile Evaluation",
        description: "Preliminary assessment of property market value and borrower repayment capacity."
      },
      {
        step: 2,
        title: "Technical & Legal Verification",
        description: "Bank-empaneled advocate and civil engineer conduct title clearance and physical site inspection."
      },
      {
        step: 3,
        title: "Credit Sanction",
        description: "Credit committee reviews legal reports and approves loan sanction letter with maximum LTV."
      },
      {
        step: 4,
        title: "Mortgage Registration & Disbursal",
        description: "Equitable mortgage registration at Sub-Registrar office Udaipur followed by immediate loan disbursement."
      }
    ]
  }
];

export const TRUST_POINTS = [
  {
    title: "Fast Approval Assistance",
    description: "Expedited processing with priority bank branch managers for rapid approvals."
  },
  {
    title: "Expert Guidance",
    description: "12+ years of senior banking consultation ensuring accurate financial profiling."
  },
  {
    title: "Secure & Transparent",
    description: "Strict data privacy with absolute transparency at every documentation stage."
  },
  {
    title: "147+ Bank Options",
    description: "Compare multiple PSU, Private banks, and NBFCs under one trusted roof."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Expert Loan Consultants",
    description: "Our senior finance advisors possess in-depth understanding of credit policies across Indian banking institutions."
  },
  {
    title: "Transparent Process",
    description: "No hidden clauses or unexpected charges. Every term and interest computation is shared transparently upfront."
  },
  {
    title: "Multiple Bank Partnerships",
    description: "Direct empanelment with 147+ top lenders like HDFC, ICICI, SBI, Axis, Kotak, and Tata Capital for maximum loan approval."
  },
  {
    title: "Personalized Guidance",
    description: "We don't sell one-size-fits-all loans. We evaluate your unique income, profile, and cash flow to recommend optimal solutions."
  },
  {
    title: "Quick Documentation Assistance",
    description: "Complete doorstep assistance for drafting affidavits, preparing audited financials, and retrieving municipal records."
  },
  {
    title: "No Hidden Charges",
    description: "Our foundational promise: 'लोन नहीं तो कोई फीस नहीं'. You pay zero fee unless you achieve your desired loan."
  }
];

export const LOAN_PROCESS_STEPS = [
  {
    step: "01",
    title: "Quick Application",
    description: "Submit your basic loan requirement online or call our Udaipur office directly."
  },
  {
    step: "02",
    title: "Personalized Consultation",
    description: "Our loan specialist analyzes your income profile and shortlists best bank schemes."
  },
  {
    step: "03",
    title: "Document Verification",
    description: "Doorstep document pickup, verification, and water-tight dossier preparation."
  },
  {
    step: "04",
    title: "Bank Underwriting",
    description: "Direct liaisoning with bank credit officers for swift file clearance and sanction."
  },
  {
    step: "05",
    title: "Loan Disbursal",
    description: "Final execution and funds deposited directly into your bank account."
  }
];

export const BANK_PARTNERS = [
  { name: "HDFC Bank", short: "HDFC", category: "Private Bank" },
  { name: "State Bank of India", short: "SBI", category: "PSU Bank" },
  { name: "ICICI Bank", short: "ICICI", category: "Private Bank" },
  { name: "Axis Bank", short: "Axis", category: "Private Bank" },
  { name: "Kotak Mahindra Bank", short: "Kotak", category: "Private Bank" },
  { name: "Tata Capital", short: "Tata", category: "NBFC" },
  { name: "Bajaj Finserv", short: "Bajaj", category: "NBFC" },
  { name: "Punjab National Bank", short: "PNB", category: "PSU Bank" },
  { name: "Bank of Baroda", short: "BOB", category: "PSU Bank" },
  { name: "IDFC FIRST Bank", short: "IDFC", category: "Private Bank" },
  { name: "IndusInd Bank", short: "IndusInd", category: "Private Bank" },
  { name: "Federal Bank", short: "Federal", category: "Private Bank" }
];

export const TESTIMONIALS = [
  {
    name: "Rajendra Sharma",
    role: "Proprietor, Sharma Marble & Granites, Udaipur",
    loanType: "Business Loan - ₹65 Lakh",
    comment: "Loan Samadhan helped me secure a business expansion loan when two nationalized banks delayed my file. Their team understood my balance sheet and handled the documentation professionally. Very reliable service in Udaipur.",
    rating: 5,
    location: "Sukher Industrial Area, Udaipur"
  },
  {
    name: "Dr. Sunita Mehta",
    role: "Consultant Physician, Udaipur",
    loanType: "Home Loan - ₹85 Lakh",
    comment: "Securing a home loan for our flat in Shobhagpura was smooth and stress-free. The Loan Samadhan advisor got us an 8.4% interest rate with SBI through their nodal contacts. Truly live up to 'लोन नहीं तो कोई फीस नहीं'.",
    rating: 5,
    location: "Shobhagpura, Udaipur"
  },
  {
    name: "Vikram Singh Rathore",
    role: "Hotelier & Heritage Resort Owner",
    loanType: "Loan Against Property - ₹2.5 Crore",
    comment: "Needed substantial capital for resort renovation before tourist season. The team evaluated our commercial property value accurately and completed all legal scrutiny within 5 days. Exceptional professionalism.",
    rating: 5,
    location: "Lake City, Udaipur"
  },
  {
    name: "Pooja Chundawat",
    role: "Senior Software Engineer (Remote)",
    loanType: "Personal Loan - ₹12 Lakh",
    comment: "Got urgent funds for a family medical procedure within 24 hours. The documentation was collected right from my doorstep in Madhuban. Transparent, swift, and completely hassle-free.",
    rating: 5,
    location: "Madhuban, Udaipur"
  },
  {
    name: "Manish Paliwal",
    role: "Auto Parts Distributor",
    loanType: "Car Loan - ₹18 Lakh",
    comment: "Assisted me with 100% on-road financing for my new SUV. Delivery order was sent to the showroom on the very same day. Highly recommended loan consultant in Rajasthan.",
    rating: 5,
    location: "Goverdhan Vilas, Udaipur"
  },
  {
    name: "Kailash Choudhary",
    role: "Managing Director, Agro Food Products",
    loanType: "MSME Machinery Loan - ₹1.2 Crore",
    comment: "Their expertise with CGTMSE government schemes helped us get subsidy benefits on industrial machinery. They truly act as trusted financial partners rather than mere agents.",
    rating: 5,
    location: "Mewar Industrial Area, Udaipur"
  }
];

export const FAQS = [
  {
    category: "General",
    question: "What does 'लोन नहीं तो कोई फीस नहीं' really mean?",
    answer: "It is our steadfast commitment that Loan Samadhan charges zero consultation or service fee upfront. You only pay for legitimate third-party statutory fees (such as official bank processing or stamp duty levied directly by banks). If your loan is not sanctioned and disbursed to your satisfaction, our consultation is 100% free."
  },
  {
    category: "General",
    question: "Why should I apply through Loan Samadhan instead of going directly to a single bank?",
    answer: "When you visit a single bank, you are limited to their rigid credit policies and single interest rate. If they decline, your CIBIL score takes a hit. At Loan Samadhan, we evaluate your profile against 147+ Banks and NBFCs simultaneously, negotiate pre-approved corporate rates, and submit your application only where approval chances are highest."
  },
  {
    category: "Home Loan",
    question: "What is the minimum CIBIL score required for a Home Loan in Udaipur?",
    answer: "While most banks prefer a credit score of 750+ for the lowest interest rates (starting ~8.35%), at Loan Samadhan we work with multiple lenders who accommodate CIBIL scores between 650 to 749 with suitable co-applicants or slightly adjusted LTV terms."
  },
  {
    category: "Home Loan",
    question: "Can I club family income to increase my Home Loan eligibility?",
    answer: "Yes. Adding your spouse, father, mother, or earning son/daughter as a co-applicant substantially increases your collective net monthly income, helping you secure higher loan eligibility for premium properties."
  },
  {
    category: "Business Loan",
    question: "Can I get an unsecured Business Loan without pledging property?",
    answer: "Yes, we facilitate collateral-free business loans up to ₹75 Lakh based on your GST turnover, annual ITR filings, and clean banking cash flow, typically sanctioned within 24 to 48 hours."
  },
  {
    category: "Business Loan",
    question: "What financial documents are needed for MSME business loans?",
    answer: "You typically need 3 years of audited Balance Sheets, Profit & Loss accounts, 12 months of GST returns, last 12 months current account bank statements, and business registration proof (GST/MSME/Udyam)."
  },
  {
    category: "Personal Loan",
    question: "How quickly can a Personal Loan be approved and disbursed?",
    answer: "For salaried applicants with active net banking and clear KYC documents, personal loans can be approved digitally within 2 to 4 hours and disbursed directly into your bank account on the same day."
  },
  {
    category: "Car Loan",
    question: "Do you offer financing for second-hand / used cars?",
    answer: "Yes. We offer attractive used car loans for up to 80% to 90% of the vehicle's certified valuation, with tenure options up to 5 years and competitive rates."
  },
  {
    category: "Loan Against Property",
    question: "What is the difference between a Home Loan and a Loan Against Property (LAP)?",
    answer: "A Home Loan is exclusively taken to purchase, construct, or renovate a residential property. A Loan Against Property (LAP) is a mortgage loan where you pledge your already owned residential, commercial, or industrial property to raise large funds for business expansion, weddings, or debt clearance with no restriction on fund usage."
  },
  {
    category: "Loan Against Property",
    question: "Can I continue to use my property during the LAP tenure?",
    answer: "Absolutely! You retain 100% full possession, residency, and commercial operational control over your property throughout the loan tenure. The bank only keeps an equitable mortgage on the title deed until full repayment."
  }
];
