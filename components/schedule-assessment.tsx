"use client";

import { useState } from "react";
import { Info, Calendar, Clock, X, CheckCircle } from "lucide-react";

function ThankYouPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-10 max-w-md w-full mx-4 shadow-2xl relative text-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-14 h-14 text-green-500" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Thank You!</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Your assessment has been scheduled successfully. We will send you a confirmation email shortly.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-[#00418d] text-white py-3 rounded-lg font-semibold hover:bg-[#00306b] transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

const ChevronDown = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

export default function ScheduleAssessment() {
  const [selectedCompany, setSelectedCompany] = useState<string>("microsoft");
  const [showThankYou, setShowThankYou] = useState(false);

  const companies = [
    { id: "microsoft", label: "Microsoft" },
    { id: "google", label: "Google" },
    { id: "amazon", label: "Amazon" },
    { id: "facebook1", label: "Facebook" },
    { id: "infosys", label: "Infosys" },
  ];

  return (
    <div className="text-white">
      {showThankYou && <ThankYouPopup onClose={() => setShowThankYou(false)} />}

      <h1 className="text-3xl font-semibold text-center mb-2">Schedule Assessment</h1>
      <p className="text-center text-gray-200 mb-6">
        Register for your preferred skill assessment slot
      </p>

      <div className="space-y-8">
        {/* Message */}
        <p className="text-center text-lg">
          Great!! Multiple employers have authorised you to take a skill assessment with SkillKwiz.
          Choose one. You can revisit this page to schedule for others.
        </p>

        {/* Company Selection */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {companies.map((company) => (
            <button
              key={company.id}
              className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
                selectedCompany === company.id ? "border-2 border-green-500" : ""
              }`}
              onClick={() => setSelectedCompany(company.id)}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === company.id ? "bg-green-500" : "bg-gray-500"
                }`}
              />
              {company.label}
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-[#2d5184]/80 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-6 h-6 text-white mt-1 flex-shrink-0" />
          <p>
            {selectedCompany === "microsoft"
              ? "Microsoft has authorized you to take an assessment for C#, SQL Server, Web2.0, and React."
              : `${companies.find((c) => c.id === selectedCompany)?.label} has authorized you to take an assessment. Please select a date and time.`}
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Select Country</label>
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Singapore</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown />
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2">Select Zip Code</label>
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>Enter your area&apos;s Zip code</option>
                <option>110001</option>
                <option>110002</option>
                <option>560001</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown />
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2">Select Testing Centre</label>
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>Enter your Centre</option>
                <option>SkillKwiz Centre - Bangalore</option>
                <option>SkillKwiz Centre - Mumbai</option>
                <option>SkillKwiz Centre - Delhi</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Select a Date</label>
              <div className="flex items-center bg-[#333333] rounded px-4 py-3 text-white">
                <input type="text" placeholder="MM" className="w-12 bg-transparent focus:outline-none text-center" />
                <span className="mx-1">|</span>
                <input type="text" placeholder="DD" className="w-12 bg-transparent focus:outline-none text-center" />
                <span className="mx-1">|</span>
                <input type="text" placeholder="YYYY" className="w-16 bg-transparent focus:outline-none text-center" />
                <Calendar className="ml-auto w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="block mb-2">Select Time</label>
              <div className="flex items-center bg-[#333333] rounded px-4 py-3 text-white">
                <input type="text" placeholder="03" className="w-12 bg-transparent focus:outline-none text-center" />
                <span className="mx-1">|</span>
                <input type="text" placeholder="35" className="w-12 bg-transparent focus:outline-none text-center" />
                <span className="mx-1">|</span>
                <input type="text" placeholder="AM" className="w-12 bg-transparent focus:outline-none text-center" />
                <Clock className="ml-auto w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowThankYou(true)}
            className="px-20 py-2 rounded bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white hover:opacity-90"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
