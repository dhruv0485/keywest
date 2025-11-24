"use client"

import { useState, useEffect } from "react"

const heroImages = [
  "/Keywest banner.png",
  "/Keywest banner 2 (1).png",
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full h-screen overflow-hidden relative">
      {/* Background Images */}
      {heroImages.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Keywest Academy banner ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-primary w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
