"use client"

import { useState, useEffect } from "react"

const heroImages = [
  "/Img 1 (1).png",
  "/Img 2 (1).png",
  "/Img 3 (1).png",
  "/Img 4 (1).png",
  "/Img 5 (1).png",
  "/Img 6.png",
  "/Img 7.png",
  "/Img 8.png",
]

const heroSlogans = [
  "Empowering You To Create Beauty ✨",
  "Transform Your Passion Into Art 💄",
  "Master Professional Makeup Skills 🎨",
  "Where Beauty Meets Excellence ✨",
  "Unlock Your Creative Potential 💋",
  "Build Your Dream Career 🌟",
  "Learn From Industry Experts 👑",
  "Your Journey To Success Starts Here ✨",
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full h-screen overflow-hidden relative">
      {/* Background Images */}
      {heroImages.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Makeup academy ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 md:px-8 max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-6 md:mb-8 drop-shadow-2xl text-balance leading-tight">
            {heroSlogans[currentIndex]}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 drop-shadow-xl max-w-3xl mx-auto">
            Join the premier makeup academy and learn from industry-leading professionals
          </p>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-primary w-8" : "bg-white/50 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
