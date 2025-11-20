"use client"

import { useState, useEffect } from "react"

export default function AccreditationsSection() {
  const [currentAccreditation, setCurrentAccreditation] = useState(0)

  const accreditations = [
    "/a1 (1).jpg",
    "/a1 (2).jpg",
    "/a1 (3).JPG",
    "/a1 (4).jpg",
    "/a1 (5).JPG",
    "/a1 (6).jpg",
  ]

  // Auto-play accreditations
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAccreditation((prev) => (prev + 1) % accreditations.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [accreditations.length])

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-pink-50/30 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Recognized Excellence 🏆
          </h2>
        </div>

        {/* Main Carousel Section */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentAccreditation((prev) => (prev === 0 ? accreditations.length - 1 : prev - 1))
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-primary to-accent text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-110 -ml-6 md:-ml-16"
            aria-label="Previous recognition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentAccreditation((prev) => (prev + 1) % accreditations.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-primary to-accent text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-110 -mr-6 md:-mr-16"
            aria-label="Next recognition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Certificate Images Carousel */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentAccreditation * 100}%)`,
              }}
            >
              {accreditations.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="relative bg-white rounded-3xl p-4 md:p-6 shadow-2xl border-2 border-primary/20">
                    <div className="relative w-full" style={{ height: "600px" }}>
                      <img
                        src={image}
                        alt={`Recognition ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {accreditations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAccreditation(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentAccreditation
                    ? "bg-gradient-to-r from-primary to-accent w-12 h-3"
                    : "bg-gray-300 w-3 h-3 hover:bg-primary/50"
                }`}
                aria-label={`Go to recognition ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
