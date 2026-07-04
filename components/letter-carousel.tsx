"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CarouselSlide {
  title: string;
  subtitle: string;
  backgroundImage: string;
  textAlign: "left" | "center" | "right";
}

export default function LetterCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: CarouselSlide[] = [
    {
      title: "Skill Assessment",
      subtitle: "Evaluate your knowledge with our comprehensive, secure skill tests",
      backgroundImage: "/images/homepage/Carousel/Drivers License.jpg",
      textAlign: "left",
    },
    {
      title: "Quiz Excellence",
      subtitle: "Interactive quizzes designed by industry experts",
      backgroundImage: "/images/homepage/Carousel/Pick - Laptop.jpg",
      textAlign: "left",
    },
    {
      title: "Learning Journey",
      subtitle: "Continuous improvement through personalized feedback",
      backgroundImage: "/images/homepage/Carousel/Secure Center.jpg",
      textAlign: "left",
    },
    {
      title: "Hiring Simplified",
      subtitle: "Connect verified skills with the right opportunities",
      backgroundImage: "/images/homepage/Carousel/Skill Library.jpg",
      textAlign: "center",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="relative overflow-hidden w-full h-full bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0 z-10"
              : index < currentSlide
              ? "opacity-0 -translate-x-full z-0"
              : "opacity-0 translate-x-full z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.backgroundImage}
              alt={`${slide.title} background`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Text Content */}
          <div className="relative h-full z-10 flex flex-col justify-center">
            <div
              className={`max-w-7xl mx-auto px-8 w-full ${
                slide.textAlign === "center" ? "text-center" : "text-left"
              }`}
            >
              <h1
                className={`text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg`}
                style={{
                  animation: index === currentSlide ? "fadeInUp 0.8s ease-out" : "none",
                }}
              >
                {slide.title}
              </h1>
              <p className="text-white text-xl md:text-2xl font-medium mb-8 max-w-2xl drop-shadow">
                {slide.subtitle}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-[#f73e5d] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#d42e4d] transition-all hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-20 transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-[#00418d]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-20 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-[#00418d]" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#f73e5d] w-8 h-3"
                : "bg-white/70 w-3 h-3 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
