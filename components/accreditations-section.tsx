"use client"

import { useState, useEffect } from "react"

export default function AccreditationsSection() {
  const [currentAccreditation, setCurrentAccreditation] = useState(0)

  const accreditations = [
    {
      id: 1,
      name: "International Makeup Association",
      company: "IMA Global",
      description: "Globally recognized certification for professional makeup artistry",
      certificate: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      year: "2020",
    },
    {
      id: 2,
      name: "Beauty Excellence Award",
      company: "Beauty Industry Council",
      description: "Award-winning training program recognized for excellence",
      certificate: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80",
      year: "2021",
    },
    {
      id: 3,
      name: "Certified Training Institute",
      company: "National Beauty Board",
      description: "Accredited by industry leaders for quality education",
      certificate: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      year: "2019",
    },
    {
      id: 4,
      name: "Professional Standards Board",
      company: "PSB International",
      description: "Meeting highest quality standards in beauty education",
      certificate: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      year: "2022",
    },
  ]

  // Auto-play accreditations
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAccreditation((prev) => (prev + 1) % accreditations.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [accreditations.length])

  return (
    <section className="py-20 md:py-32 lg:py-40 bg-gradient-to-b from-white via-pink-50/30 to-white relative overflow-hidden min-h-screen flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Recognized Excellence 🏆
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl max-w-3xl mx-auto">
            Accredited and certified by leading beauty industry organizations worldwide
          </p>
        </div>

        {/* Main Spotlight Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentAccreditation((prev) => (prev === 0 ? accreditations.length - 1 : prev - 1))
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-primary to-accent text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-110 -ml-6 md:-ml-20"
            aria-label="Previous accreditation"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-primary to-accent text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-110 -mr-6 md:-mr-20"
            aria-label="Next accreditation"
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

          {/* Spotlight Container */}
          <div className="relative">
            {/* Animated Spotlight Beam */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" />

            {/* Certificate Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentAccreditation * 100}%)`,
                }}
              >
                {accreditations.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0 px-4">
                    <div className="relative">
                      {/* Spotlight Glow Effect - Removed */}

                      {/* Main Card */}
                      <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)] border-4 border-primary/20 overflow-hidden">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                          {/* Certificate Image */}
                          <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white shadow-2xl">
                              <img
                                src={item.certificate || "/placeholder.svg"}
                                alt={`${item.name} Certificate`}
                                className="w-full h-full object-cover"
                              />

                              {/* Spotlight Overlay - Removed for white background */}

                              {/* Year Badge */}
                              <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white text-sm md:text-base font-bold px-4 py-2 rounded-full shadow-xl">
                                {item.year}
                              </div>

                              {/* Shine Effect */}
                              <div
                                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1500 ${index === currentAccreditation
                                  ? "translate-x-full"
                                  : "-translate-x-full"
                                  }`}
                              />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="text-center lg:text-left">
                            <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-4">
                              <p className="text-sm md:text-base font-semibold text-primary">
                                {item.company}
                              </p>
                            </div>

                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
                              {item.name}
                            </h3>

                            <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-6">
                              {item.description}
                            </p>

                            {/* Decorative Line */}
                            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto lg:mx-0" />

                            {/* Certificate Number */}
                            <div className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/60">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5 text-primary"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                                />
                              </svg>
                              <span>Certificate #{item.id}00{index + 1}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {accreditations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAccreditation(index)}
                className={`transition-all duration-300 rounded-full ${index === currentAccreditation
                  ? "bg-gradient-to-r from-primary to-accent w-12 h-3"
                  : "bg-gray-300 w-3 h-3 hover:bg-primary/50"
                  }`}
                aria-label={`Go to accreditation ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 md:px-10 py-5 md:py-6 shadow-2xl border-2 border-primary/20">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7 md:w-8 md:h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-foreground/60 text-sm md:text-base">Trusted by over</p>
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                5,000+ Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
