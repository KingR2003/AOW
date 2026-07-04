"use client";

import { useState } from "react";
import { Upload, X, CheckCircle } from "lucide-react";

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
          Your assessment request has been submitted successfully. We will get back to you shortly.
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

export default function EmployerAssessmentRequest() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["C++", "Python"]);
  const [showThankYou, setShowThankYou] = useState(false);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSubmit = () => {
    setShowThankYou(true);
  };

  return (
    <div className="text-white">
      {showThankYou && <ThankYouPopup onClose={() => setShowThankYou(false)} />}

      <h1 className="text-3xl font-semibold text-center mb-2">Employer Skill</h1>
      <h1 className="text-3xl font-semibold text-center mb-6">Assessment Request</h1>

      <div className="space-y-6">
        {/* Candidate Name */}
        <div>
          <label className="block mb-2">Candidate Name</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none" />
            <input type="text" placeholder="Last Name" className="w-full bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none" />
          </div>
        </div>

        {/* Candidate Email */}
        <div>
          <label className="block mb-2">Candidate Email</label>
          <input type="email" placeholder="Enter Email" className="w-full bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none" />
        </div>

        {/* Candidate Phone */}
        <div>
          <label className="block mb-2">Candidate Phone</label>
          <input type="tel" placeholder="Enter Phone No." className="w-full bg-[#333333] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none" />
        </div>

        {/* Candidate ID */}
        <div>
          <label className="block mb-2">Candidate ID</label>
          <div className="relative">
            <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
              <option>PAN Card</option>
              <option>Aadhar Card</option>
              <option>Voter ID</option>
              <option>Passport</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <ChevronDown />
            </div>
          </div>
        </div>

        {/* Upload Resume */}
        <div>
          <label className="block mb-2">
            Upload Resume <span className="text-red-500">*</span>
          </label>
          <label className="w-full bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] flex items-center cursor-pointer">
            <Upload className="w-5 h-5 mr-2" />
            <span>Upload your Resume</span>
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
          </label>
        </div>

        {/* Skills */}
        <div>
          <label className="block mb-2">Skills</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>Job Family</option>
                <option>IT</option>
                <option>Accounting</option>
                <option>Finance</option>
                <option>Law</option>
                <option>Pharmacy</option>
                <option>Architecture</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown />
              </div>
            </div>
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>Skills Family</option>
                <option>Programming Languages</option>
                <option>Frameworks</option>
                <option>Databases</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown />
              </div>
            </div>
          </div>

          <div className="bg-[#333333] rounded p-4">
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white text-black px-3 py-1 rounded-full text-sm flex items-center gap-1 cursor-pointer"
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                  <span className="text-gray-500">×</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Unit */}
        <div>
          <label className="block mb-2">Cost Unit</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>HR</option>
                <option>Finance</option>
                <option>Operations</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown />
              </div>
            </div>
            <div className="relative">
              <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                <option>Talent Acquisition</option>
                <option>Recruitment</option>
                <option>Staffing</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown />
              </div>
            </div>
          </div>

          <div className="relative mb-4">
            <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
              <option>TA-BU1</option>
              <option>TA-BU2</option>
              <option>TA-BU3</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <ChevronDown />
            </div>
          </div>
        </div>

        {/* Credit Cards */}
        <div>
          <label className="block mb-2">Credit Cards</label>
          <div className="relative">
            <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
              <option>ICICI Card</option>
              <option>HDFC Card</option>
              <option>SBI Card</option>
              <option>Axis Card</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <ChevronDown />
            </div>
          </div>
        </div>

        {/* Authorization Text */}
        <div className="text-center text-sm">
          <p>
            I authorize SkillKwiz to debit the credit card account stated above for US $40 as
            payment for conducting the skill assessment of the specified job candidate.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full py-3 rounded bg-[#f73e5d] text-white font-semibold hover:bg-[#d42e4d] transition-colors mt-4"
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}
