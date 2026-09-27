"use client";

import { useState, useMemo } from "react";
import { Calculator, ArrowRight, IndianRupee, PieChart, ShieldCheck } from "lucide-react";
import { openApplyModal } from "@/components/ApplyModal";

interface EmiCalculatorProps {
  initialAmount?: number;
  initialRate?: number;
  initialTenure?: number;
  loanTypeName?: string;
  isCompact?: boolean;
}

export default function EmiCalculatorWidget({
  initialAmount = 2500000,
  initialRate = 8.5,
  initialTenure = 20,
  loanTypeName = "Home Loan",
  isCompact = false
}: EmiCalculatorProps) {
  const [loanAmount, setLoanAmount] = useState<number>(initialAmount);
  const [interestRate, setInterestRate] = useState<number>(initialRate);
  const [tenureYears, setTenureYears] = useState<number>(initialTenure);

  // EMI Calculation Formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const calculation = useMemo(() => {
    const principal = Number(loanAmount);
    const monthlyRate = Number(interestRate) / (12 * 100);
    const months = Number(tenureYears) * 12;

    if (principal <= 0 || monthlyRate <= 0 || months <= 0) {
      return {
        monthlyEmi: 0,
        totalInterest: 0,
        totalAmount: 0,
        principalPercent: 100,
        interestPercent: 0
      };
    }

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    const principalPercent = Math.round((principal / totalAmount) * 100);
    const interestPercent = 100 - principalPercent;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
      principalPercent,
      interestPercent
    };
  }, [loanAmount, interestRate, tenureYears]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleApply = () => {
    openApplyModal({
      loanType: loanTypeName,
      amount: formatCurrency(loanAmount)
    });
  };

  // SVG Donut calculation
  const strokeDashoffset = 100 - calculation.interestPercent;

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-100 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-royal text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5 text-royal" />
            <span>Real-Time EMI Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-heading">
            Calculate Your Monthly Loan Installment
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Adjust the sliders below to estimate your exact monthly outflow and interest charges.
          </p>
        </div>

        {/* Amount Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {[1000000, 2500000, 5000000, 10000000].map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setLoanAmount(preset)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                loanAmount === preset
                  ? "bg-navy-900 text-white border-navy-900 shadow-sm"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              ₹{preset >= 10000000 ? `${preset / 10000000} Cr` : `${preset / 100000} L`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-center">
        {/* Sliders Input Column (7 cols) */}
        <div className="lg:col-span-7 space-y-7">
          {/* Slider 1: Loan Amount */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-navy-900">
                Loan Amount (लोन राशि)
              </label>
              <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-royal/10 text-royal font-bold rounded-xl text-base">
                <IndianRupee className="w-4 h-4" />
                <span>{loanAmount.toLocaleString("en-IN")}</span>
              </div>
            </div>
            <input
              type="range"
              min={100000}
              max={50000000}
              step={50000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-royal"
            />
            <div className="flex justify-between text-[11px] text-gray-400 font-medium">
              <span>₹1 Lakh</span>
              <span>₹1 Crore</span>
              <span>₹5 Crore</span>
            </div>
          </div>

          {/* Slider 2: Interest Rate */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-navy-900">
                Interest Rate (ब्याज दर - % p.a.)
              </label>
              <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald/10 text-emerald-700 font-bold rounded-xl text-base">
                <span>{interestRate}%</span>
              </div>
            </div>
            <input
              type="range"
              min={7.5}
              max={18.0}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald"
            />
            <div className="flex justify-between text-[11px] text-gray-400 font-medium">
              <span>7.5% (Best Prime)</span>
              <span>12.0%</span>
              <span>18.0%</span>
            </div>
          </div>

          {/* Slider 3: Loan Tenure */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-navy-900">
                Loan Tenure (अवधि - Years)
              </label>
              <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-navy-50 text-navy-900 font-bold rounded-xl text-base">
                <span>{tenureYears} Years</span>
                <span className="text-xs text-gray-500 font-normal">({tenureYears * 12} Mos)</span>
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-navy-900"
            />
            <div className="flex justify-between text-[11px] text-gray-400 font-medium">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results Card Column (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1F4D] to-[#174EA6] rounded-2xl p-6 sm:p-7 text-white shadow-xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald/20 rounded-full blur-2xl pointer-events-none" />

          {/* Main EMI Highlight */}
          <div className="text-center pb-6 border-b border-white/10">
            <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
              Estimated Monthly EMI (मासिक किस्त)
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-heading mt-1 tracking-tight">
              {formatCurrency(calculation.monthlyEmi)}
              <span className="text-xs text-blue-200 font-normal ml-1">/ month</span>
            </div>
          </div>

          {/* Breakdown Stats & Donut */}
          <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center border-b border-white/10">
            {/* SVG Donut */}
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Background Principal Ring (Royal Blue) */}
                  <path
                    className="text-white/20"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Interest Ring (Emerald) */}
                  <path
                    className="text-emerald-400 transition-all duration-300"
                    strokeDasharray="100, 100"
                    strokeDashoffset={strokeDashoffset}
                    strokeWidth="4"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <PieChart className="w-4 h-4 text-emerald-300 mb-0.5" />
                  <span className="text-xs font-bold text-white">
                    {calculation.principalPercent}%
                  </span>
                  <span className="text-[9px] text-blue-200">Principal</span>
                </div>
              </div>
            </div>

            {/* Numbers Breakdown */}
            <div className="space-y-3 text-xs">
              <div className="bg-white/10 p-2.5 rounded-xl">
                <div className="flex items-center gap-1.5 text-blue-200 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
                  <span>Principal Amount:</span>
                </div>
                <div className="text-sm font-bold text-white mt-0.5 pl-4">
                  {formatCurrency(loanAmount)}
                </div>
              </div>

              <div className="bg-white/10 p-2.5 rounded-xl">
                <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span>Total Interest:</span>
                </div>
                <div className="text-sm font-bold text-emerald-300 mt-0.5 pl-4">
                  {formatCurrency(calculation.totalInterest)}
                </div>
              </div>
            </div>
          </div>

          {/* Total Payable Summary */}
          <div className="pt-5 flex items-center justify-between text-xs">
            <span className="text-blue-200">Total Amount Payable:</span>
            <span className="text-base font-bold text-white">
              {formatCurrency(calculation.totalAmount)}
            </span>
          </div>

          {/* Action CTA */}
          <div className="mt-6">
            <button
              onClick={handleApply}
              className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-black/20 flex items-center justify-center gap-2 text-sm transition-all transform hover:-translate-y-0.5"
            >
              <span>Apply With This Calculation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-blue-200 mt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero Fees. 100% Free Consultation.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
