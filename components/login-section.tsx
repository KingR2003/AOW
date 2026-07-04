"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, X, Download } from "lucide-react";

function ThankYouPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl p-10 max-w-md w-full mx-4 shadow-2xl relative text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
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
          Your request has been submitted successfully. We&apos;ll get back to you shortly.
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
  // Create a dummy PDF content as a blob
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
<< /Length 44 >>
stream
BT /F1 20 Tf 100 700 Td (SkillKwiz Report) Tj ET
endstream
endobj

5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj

xref
0 6
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000274 00000 n
0000000369 00000 n

trailer
<< /Size 6 /Root 1 0 R >>
startxref
441
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

export default function LoginSection() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  return (
    <>
      {showThankYou && <ThankYouPopup onClose={() => setShowThankYou(false)} />}

      <section className="py-12 bg-[#000c2a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Left side - Light image with SKILL ASSESSMENT LIBRARY overlay */}
            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
              <Image
                src="/images/homepage/8.png"
                alt="Skill Assessment Library"
                fill
                className="object-cover"
              />
              {/* Overlay with download link */}
              <div className="absolute inset-0 bg-[#00418d]/10 flex flex-col justify-end p-6">
                <button
                  onClick={() => downloadDummyPDF("SkillKwiz_Assessment_Library.pdf")}
                  className="flex items-center gap-2 text-[#00418d] bg-white/90 hover:bg-white px-4 py-2 rounded-lg font-medium text-sm transition-all hover:shadow-md w-fit"
                >
                  <Download className="w-4 h-4" />
                  Download Assessment Library
                </button>
              </div>
            </div>

            {/* Right side - Sign In / Sign Up Form */}
            <div className="w-full md:w-1/2 bg-[#00418d] p-8 flex flex-col">
              {/* Tab Switcher */}
              <div className="flex rounded-lg overflow-hidden mb-6 bg-[#00306b]">
                <button
                  onClick={() => setActiveTab("signin")}
                  className={`flex-1 py-3 font-semibold text-sm transition-all ${
                    activeTab === "signin"
                      ? "bg-[#f73e5d] text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setActiveTab("signup")}
                  className={`flex-1 py-3 font-semibold text-sm transition-all ${
                    activeTab === "signup"
                      ? "bg-[#f73e5d] text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <div className="flex-1">
                {activeTab === "signin" ? (
                  <>
                    <h2 className="text-xl font-bold text-white mb-6">Sign in to Skill Kwiz</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                          required
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex items-center text-white text-sm">
                          <input type="checkbox" className="h-4 w-4 mr-2" />
                          Remember me
                        </label>
                        <a href="#" className="text-white hover:underline text-sm">
                          Forgot Password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#f73e5d] text-white p-3 rounded-md font-semibold hover:bg-[#d42e4d] transition-all"
                      >
                        Sign In
                      </button>
                      <div className="text-center text-white">
                        <p className="mb-3 text-sm">— Or Login with —</p>
                        <div className="flex justify-center space-x-4">
                          <button type="button" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"/>
                              <path d="M17.2 10.8H12.8V7.2H11.2V10.8H6.8V12.4H11.2V16H12.8V12.4H17.2V10.8Z" fill="#DB4437"/>
                            </svg>
                          </button>
                          <button type="button" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.0532 12.5282C17.0699 14.0268 17.6762 15.4512 18.7212 16.4962C18.7678 16.5428 18.7911 16.6077 18.7857 16.6733C18.5987 17.6267 18.2697 18.5467 17.8122 19.3992C17.4222 20.1372 16.5372 21.0792 15.6392 21.0852C14.8042 21.0912 14.5022 20.6142 13.5372 20.6142C12.5722 20.6142 12.2342 21.0672 11.4522 21.0912C10.6042 21.1152 9.63221 20.0702 9.23421 19.3362C8.0022 17.3882 7.0252 13.7852 8.3042 11.3582C8.9342 10.1522 10.1042 9.3882 11.3642 9.3642C12.1762 9.3402 12.9342 9.8702 13.4582 9.8702C13.9822 9.8702 14.9232 9.2342 15.9192 9.3402C16.7372 9.3882 17.4702 9.7782 17.9822 10.4022C17.9941 10.4156 18.0026 10.4319 18.0069 10.4496C18.0112 10.4673 18.0111 10.4857 18.0067 10.5033C17.7647 11.1953 17.0622 12.0073 17.0532 12.5282Z" fill="black"/>
                              <path d="M15.0002 8.0002C15.0002 7.0722 14.6372 6.1802 14.0002 5.5372C13.3692 4.9002 12.4862 4.5312 11.5702 4.5002C11.5522 4.5002 11.5342 4.5092 11.5222 4.5212C11.5102 4.5332 11.5042 4.5512 11.5042 4.5692C11.5042 5.4872 11.8672 6.3792 12.5042 7.0222C13.1352 7.6592 14.0182 8.0282 14.9342 8.0592C14.9522 8.0592 14.9702 8.0502 14.9822 8.0382C14.9942 8.0262 15.0002 8.0082 15.0002 7.9902V8.0002Z" fill="black"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <p className="text-center text-white text-sm">
                        Don&apos;t have an account?{" "}
                        <button
                          type="button"
                          onClick={() => setActiveTab("signup")}
                          className="text-[#f6c648] hover:underline font-semibold"
                        >
                          Sign Up
                        </button>
                      </p>
                    </form>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-white mb-6">Create Your Account</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                          required
                        />
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="h-4 w-4 mt-1 flex-shrink-0" required />
                        <label className="text-white text-sm">
                          I agree to the{" "}
                          <a href="#" className="text-[#f6c648] hover:underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-[#f6c648] hover:underline">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#f73e5d] text-white p-3 rounded-md font-semibold hover:bg-[#d42e4d] transition-all"
                      >
                        Create Account
                      </button>
                      <p className="text-center text-white text-sm">
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={() => setActiveTab("signin")}
                          className="text-[#f6c648] hover:underline font-semibold"
                        >
                          Sign In
                        </button>
                      </p>
                    </form>
                  </>
                )}
              </div>

              {/* View Report download link */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <button
                  onClick={() => downloadDummyPDF("SkillKwiz_Sample_Report.pdf")}
                  className="flex items-center gap-2 text-[#f6c648] hover:text-yellow-300 text-sm font-medium transition-colors mx-auto"
                >
                  <Download className="w-4 h-4" />
                  View Sample Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
