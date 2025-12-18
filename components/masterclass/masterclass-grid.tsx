"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function MasterclassGrid() {
  const masterclasses = [
    {
      id: 9,
      title: "Self Makeup Course",
      description: "Learn professional self-makeup techniques for everyday looks, special occasions, and personal grooming.",
      images: ["/self1.png", "/self2.png", "/self3.png", "/self4.png"],
      duration: "2 Weeks",
      level: "Masterclass",
      category: "Personal",
      badge: "NEW",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newState = { ...prev }
        masterclasses.forEach((course) => {
          const currentIndex = newState[course.id] || 0
          newState[course.id] = (currentIndex + 1) % course.images.length
        })
        return newState
      })
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const getCurrentImage = (courseId: number, images: string[]) => {
    const index = currentImageIndex[courseId] || 0
    return images[index]
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight min-h-[3.5rem] md:min-h-[4.5rem] lg:min-h-[6rem]">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Masterclass</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
            Intensive courses designed to accelerate your makeup and hair artistry journey
          </p>
        </div>

        {/* Masterclass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {masterclasses.map((masterclass, index) => (
            <Link
              key={masterclass.id}
              href={`/masterclass/${masterclass.id}`}
              className="group relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 block"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
              }}
            >
              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              {/* Image Slider */}
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-white">
                {masterclass.images.map((img, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={img}
                    alt={`${masterclass.title} - Image ${imgIdx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ${
                      imgIdx === (currentImageIndex[masterclass.id] || 0) ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Level Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {masterclass.level}
                </div>

                {/* Badge */}
                {masterclass.badge && (
                  <div className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg ${
                    masterclass.badge === "LIMITED TIME" ? "bg-red-600" : "bg-green-600"
                  }`}>
                    {masterclass.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {masterclass.title}
                </h3>
                <p className="text-white text-sm leading-relaxed mb-4 line-clamp-2">{masterclass.description}</p>

                {/* Course Info */}
                <div className="flex items-center gap-4 mb-4 text-xs text-white">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{masterclass.duration}</span>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-4" />

                {/* Button */}
                <div className="flex items-center justify-center">
                  <button className="w-full bg-gradient-to-r from-primary to-accent text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all text-sm font-semibold hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </Link>
          ))}
        </div>
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
    </section>
  )
}
