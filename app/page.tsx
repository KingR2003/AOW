"use client";
import Link from "next/link";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";
import LetterCarousel from "@/components/letter-carousel";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Carousel - fullscreen, no gap under header */}
      <div className="w-full h-screen overflow-hidden">
        <LetterCarousel />
      </div>

      {/* Rest of the content - reduced gaps */}
      <div className="bg-white">
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
