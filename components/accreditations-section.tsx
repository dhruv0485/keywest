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
    <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-pink-50/30 to-white relative overflow-hidden min-h-screen">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 leading-tight min-h-[3rem] md:min-h-[4rem] lg:min-h-[6rem]">
            Recognized Excellence
          </h2>
        </div>

        {/* Main Carousel Section */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentAccreditation((prev) => (prev === 0 ? accreditations.length - 1 : prev - 1))
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-primary to-accent text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 -ml-6 md:-ml-16"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-primary to-accent text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 -mr-6 md:-mr-16"
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
          <div className="overflow-hidden flex justify-center items-center min-h-[700px] md:min-h-[800px]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentAccreditation * 100}%)`,
              }}
            >
              {accreditations.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 flex justify-center items-center px-4">
                  <img
                    src={image}
                    alt={`Recognition ${index + 1}`}
                    className="max-w-3xl w-full h-auto object-contain rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
                    style={{
                      maxHeight: "800px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-12">
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
