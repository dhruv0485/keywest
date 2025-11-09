"use client"

import { useState, useEffect } from "react"

export default function EnquiryHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
      title: "Visit Our Campus",
      subtitle: "State-of-the-Art Facilities",
    },
    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80",
      title: "Modern Learning Spaces",
      subtitle: "Designed for Your Success",
    },
    {
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80",
      title: "Professional Environment",
      subtitle: "Where Dreams Take Shape",
    },
  ]

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          {/* Animated Content */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10 absolute inset-0 pointer-events-none"
              }`}
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-white mb-3 md:mb-4 drop-shadow-2xl">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-xl">{slide.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-gradient-to-r from-primary to-accent w-10 h-2.5"
                : "bg-white/50 w-2.5 h-2.5 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-6 z-20 animate-bounce hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  )
}
