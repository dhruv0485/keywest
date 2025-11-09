"use client"

import { useState, useEffect } from "react"

export default function FacilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const facilities = [
    {
      id: 1,
      title: "Professional Studios",
      description: "State-of-the-art makeup studios with professional lighting and equipment",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      icon: "🎨",
    },
    {
      id: 2,
      title: "Product Library",
      description: "Extensive collection of premium makeup products from leading brands",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      icon: "💄",
    },
    {
      id: 3,
      title: "Practice Rooms",
      description: "Dedicated spaces for hands-on practice and skill development",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      icon: "✨",
    },
    {
      id: 4,
      title: "Digital Learning",
      description: "Modern classrooms with digital screens and online learning resources",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      icon: "💻",
    },
    {
      id: 5,
      title: "Photography Studio",
      description: "Professional photo studio for portfolio building and documentation",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
      icon: "📸",
    },
  ]

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % facilities.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [facilities.length])

  return (
    <section className="section-padding bg-gradient-to-b from-white to-pink-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Our Facilities
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
            World-class infrastructure for your learning journey
          </p>
        </div>

        {/* Desktop: Expanding Cards */}
        <div className="hidden md:flex gap-2 md:gap-4 h-[500px] md:h-[600px]">
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
                index === activeIndex ? "flex-[3]" : "flex-[0.5]"
              }`}
              style={{
                minWidth: index === activeIndex ? "300px" : "80px",
              }}
            >
              {/* Background Image */}
              <img
                src={facility.image || "/placeholder.svg"}
                alt={facility.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700 ${
                  index === activeIndex
                    ? "from-black/80 via-black/40 to-transparent"
                    : "from-black/60 to-black/20"
                }`}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                {/* Icon - Always Visible */}
                <div
                  className={`text-4xl md:text-5xl mb-4 transition-all duration-700 ${
                    index === activeIndex ? "scale-100 opacity-100" : "scale-75 opacity-70"
                  }`}
                >
                  {facility.icon}
                </div>

                {/* Title - Always Visible */}
                <h3
                  className={`font-serif font-bold text-white transition-all duration-700 ${
                    index === activeIndex
                      ? "text-2xl md:text-3xl lg:text-4xl mb-4"
                      : "text-lg md:text-xl [writing-mode:vertical-rl] md:rotate-180"
                  }`}
                >
                  {facility.title}
                </h3>

                {/* Description - Only Active */}
                <div
                  className={`transition-all duration-700 overflow-hidden ${
                    index === activeIndex ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                    {facility.description}
                  </p>

                  <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105">
                    Learn More
                  </button>
                </div>

                {/* Active Indicator */}
                {index === activeIndex && (
                  <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
                )}
              </div>

              {/* Shine Effect on Active */}
              {index === activeIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="md:hidden space-y-6">
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                index === activeIndex ? "ring-4 ring-primary shadow-2xl shadow-primary/30" : "opacity-70"
              }`}
            >
              {/* Background Image */}
              <div className="relative h-80">
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  {/* Icon */}
                  <div className="text-4xl mb-3">{facility.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">{facility.title}</h3>

                  {/* Description */}
                  <p className="text-white/90 text-base leading-relaxed mb-4">{facility.description}</p>

                  <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all w-full">
                    Learn More
                  </button>

                  {/* Active Indicator */}
                  {index === activeIndex && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {facilities.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "bg-gradient-to-r from-primary to-accent w-12 h-3"
                  : "bg-gray-300 w-3 h-3 hover:bg-primary/50"
              }`}
              aria-label={`Go to facility ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </section>
  )
}
