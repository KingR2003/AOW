"use client";

import { useState } from "react";
import { Search, MapPin, Download, X, CheckCircle } from "lucide-react";

function ThankYouPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-10 max-w-md w-full mx-4 shadow-2xl relative text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-14 h-14 text-green-500" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Thank You!</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Your report has been downloaded successfully.
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

function downloadDummyPDF(filename: string) {
  const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]
/Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 120 >>
stream
BT
/F1 18 Tf
50 750 Td (SkillKwiz - Candidate Assessment Report) Tj
0 -30 Td (Candidate: ${filename.replace("_Report.pdf", "").replace(/_/g, " ")}) Tj
0 -30 Td (Score: 85th Percentile | Status: Verified) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f
trailer
<< /Size 6 /Root 1 0 R >>
startxref
0
%%EOF`;
  const blob = new Blob([content], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function EmployerCandidateList() {
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | "both">("male");
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["C#"]);
  const [showThankYou, setShowThankYou] = useState(false);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const candidates = [
    { id: 1, name: "K. Pradeep Kishor", initial: "P", company: "SkillKwiz", skills: ["C#", "Java", "SQL"], percentile: 85, location: "Bangalore", color: "bg-green-600" },
    { id: 2, name: "Manoj", initial: "M", company: "SkillKwiz", skills: ["C#", "Java", "SQL"], percentile: 85, location: "Bangalore", color: "bg-yellow-600" },
    { id: 3, name: "Kasiro", initial: "M", company: "SkillKwiz", skills: ["C#", "Java", "SQL"], percentile: 85, location: "Bangalore", color: "bg-teal-600" },
    { id: 4, name: "Ravi", initial: "R", company: "SkillKwiz", skills: ["C#", "Java", "SQL"], percentile: 85, location: "Bangalore", color: "bg-blue-800" },
  ];

  const handleViewReport = (name: string) => {
    downloadDummyPDF(`${name.replace(/\s/g, "_")}_Report.pdf`);
    setShowThankYou(true);
  };

  return (
    <>
      {showThankYou && <ThankYouPopup onClose={() => setShowThankYou(false)} />}
      <div className="text-white">
        {/* Search Bar */}
        <div className="bg-[#1a2b4a] rounded-full overflow-hidden mb-6">
          <div className="grid grid-cols-4">
            <div className="col-span-1 flex items-center px-4 py-3 border-r border-gray-600">
              <Search className="w-5 h-5 mr-2 text-gray-400" />
              <input type="text" placeholder="Candidate Email ID/Phone/Skill" className="bg-transparent w-full focus:outline-none text-white" />
            </div>
            <div className="flex items-center px-4 py-3 border-r border-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-gray-400" />
              <input type="text" placeholder="Location" className="bg-transparent w-full focus:outline-none text-white" />
            </div>
            <div className="flex items-center px-4 py-3 border-r border-gray-600">
              <div className="relative w-full">
                <select className="w-full bg-transparent appearance-none focus:outline-none text-white">
                  <option value="">Job Family</option>
                  <option value="software">Software Development</option>
                  <option value="data">Data Science</option>
                  <option value="design">Design</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <button className="text-white hover:text-gray-300">Clear</button>
              <button className="bg-[#00bcd4] text-white px-6 py-1 rounded-full hover:bg-[#00a5bb]">Search</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Filter Section */}
          <div className="col-span-1">
            <div className="bg-[#4a63b3] rounded-lg overflow-hidden">
              <div className="bg-[#4a63b3] p-4 text-xl font-medium">Filter</div>
              <div className="border-t border-blue-400 p-4">
                <h3 className="text-lg mb-3">Gender</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="male" checked={selectedGender === "male" || selectedGender === "both"} onChange={() => setSelectedGender(selectedGender === "female" ? "both" : "male")} className="w-4 h-4 mr-2" />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="female" checked={selectedGender === "female" || selectedGender === "both"} onChange={() => setSelectedGender(selectedGender === "male" ? "both" : "female")} className="w-4 h-4 mr-2" />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <div className="border-t border-blue-400 p-4">
                <h3 className="text-lg mb-3">Skills</h3>
                <div className="space-y-2">
                  {["C#", "Java", "SQL", "Python"].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <input type="checkbox" id={skill} checked={selectedSkills.includes(skill)} onChange={() => toggleSkill(skill)} className="w-4 h-4 mr-2" />
                      <label htmlFor={skill}>{skill}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Candidate List */}
          <div className="col-span-3 space-y-4">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="bg-[#4a63b3]/80 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full ${candidate.color} flex items-center justify-center text-white text-2xl font-bold mr-4`}>
                      {candidate.initial}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">{candidate.name}</h3>
                      <p className="text-gray-300">{candidate.company}</p>
                      <div className="flex items-center mt-1 flex-wrap gap-2">
                        <p className="text-sm">Skills: {candidate.skills.join(", ")}</p>
                        <div className="h-4 border-l border-gray-400"></div>
                        <p className="text-sm">Percentile: {candidate.percentile}</p>
                        <div className="h-4 border-l border-gray-400"></div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <p className="text-sm">{candidate.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleViewReport(candidate.name)}
                    className="bg-[#00bcd4] text-white px-4 py-2 rounded-lg hover:bg-[#00a5bb] flex items-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    View Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
