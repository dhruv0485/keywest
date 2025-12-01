"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Wifi, Coffee, BookOpen, Users, Laptop, Shield, Clock, Award } from "lucide-react"

function CampusAmenities() {
  const [activeIndex, setActiveIndex] = useState(0)

  const campusAmenities = [
    {
      id: 1,
      title: "Professional Training Studio",
      description: "State-of-the-art training studio equipped with modern facilities and equipment for hands-on learning.",
      image: "/f1 (1).jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Practice & Learning Space",
      description: "Spacious and well-lit practice areas designed for comfortable learning and skill development.",
      image: "/f1 (2).jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Modern Infrastructure",
      description: "Contemporary facilities with all amenities to ensure the best learning experience for our students.",
      image: "/f1 (3).jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Product Library",
      description: "Extensive collection of premium makeup products and tools for comprehensive hands-on training.",
      image: "/makeup.JPG",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
  ]

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % campusAmenities.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [campusAmenities.length])

  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Campus Amenities
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Everything you need for a comfortable and productive learning environment
        </p>
      </motion.div>

      {/* Desktop: Expanding Cards */}
      <div className="hidden md:flex gap-2 md:gap-4 h-[500px] md:h-[600px]">
        {campusAmenities.map((amenity, index) => (
          <div
            key={amenity.id}
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
              src={amenity.image}
              alt={amenity.title}
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
                className={`mb-4 transition-all duration-700 ${
                  index === activeIndex ? "scale-100 opacity-100" : "scale-75 opacity-70"
                }`}
              >
                {amenity.icon}
              </div>

              {/* Title - Always Visible */}
              <h3
                className={`font-serif font-bold text-white transition-all duration-700 ${
                  index === activeIndex
                    ? "text-2xl md:text-3xl lg:text-4xl mb-4"
                    : "text-lg md:text-xl [writing-mode:vertical-rl] md:rotate-180"
                }`}
              >
                {amenity.title}
              </h3>

              {/* Description - Only Active */}
              <div
                className={`transition-all duration-700 overflow-hidden ${
                  index === activeIndex ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                  {amenity.description}
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
        {campusAmenities.map((amenity, index) => (
          <div
            key={amenity.id}
            onClick={() => setActiveIndex(index)}
            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
              index === activeIndex ? "ring-4 ring-primary shadow-2xl shadow-primary/30" : "opacity-70"
            }`}
          >
            {/* Background Image */}
            <div className="relative h-80">
              <img
                src={amenity.image}
                alt={amenity.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                {/* Icon */}
                <div className="mb-3">{amenity.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-white mb-3">{amenity.title}</h3>

                {/* Description */}
                <p className="text-white/90 text-base leading-relaxed mb-4">{amenity.description}</p>

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
        {campusAmenities.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? "bg-gradient-to-r from-primary to-accent w-12 h-3"
                : "bg-gray-300 w-3 h-3 hover:bg-primary/50"
            }`}
            aria-label={`Go to amenity ${index + 1}`}
          />
        ))}
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
    </div>
  )
}

const generalFacilities = [
  {
    icon: BookOpen,
    title: "Specialized Skin Course Areas",
    description: "Dedicated areas for skin courses and specialized equipment for advanced skin treatments.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Prime Delhi Location",
    description: "Located in the heart of Delhi, it is easily accessible via metro stations and public transport.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Laptop,
    title: "Professional Lighting Setup",
    description: "Professional lighting and setup to precisely simulate real-world makeup and salon conditions.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Users,
    title: "Collaborative Learning Spaces",
    description: "Space available for group projects, practice sessions, and collaborative learning experiences.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Free high-speed internet access throughout the campus for staying connected.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Safety & Hygiene Protocols",
    description: "Strict hygiene protocols, sanitization stations, and safety measures are enforced throughout the facility.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Award,
    title: "Well-Lit Mirror Stations",
    description: "Large, well-lit mirrors at every station for precise makeup application and practice.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Clock,
    title: "Power Backup System",
    description: "Emergency Lighting/Power Backup (Inverter/Generator) to ensure practice is not interrupted by power cuts.",
    color: "from-teal-500 to-cyan-500"
  }
]

const amenities = [
  {
    title: "Professional Training Studio",
    description: "State-of-the-art training studio equipped with modern facilities and equipment for hands-on learning.",
    image: "/f1 (1).jpg"
  },
  {
    title: "Practice & Learning Space",
    description: "Spacious and well-lit practice areas designed for comfortable learning and skill development.",
    image: "/f1 (2).jpg"
  },
  {
    title: "Modern Infrastructure",
    description: "Contemporary facilities with all amenities to ensure the best learning experience for our students.",
    image: "/f1 (3).jpg"
  }
]

export default function GeneralFacilities() {
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Campus Amenities */}
        <CampusAmenities />

        {/* General Facilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 mt-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            General Facilities
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-sans">
            Additional amenities and services to enhance your learning experience
          </p>
        </motion.div>

        {/* Orbital Facilities */}
        <div className="relative w-full max-w-6xl mx-auto mb-20 py-16" style={{ minHeight: '900px' }}>
          {/* Center Circle - Much Bigger */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl z-10">
            <div className="text-center">
              <p className="text-white font-bold text-lg sm:text-2xl md:text-3xl">Facilities</p>
              <p className="text-white/80 text-sm sm:text-lg md:text-xl">& Amenities</p>
            </div>
          </div>

          {/* Rotating Container */}
          <div className="absolute top-1/2 left-1/2 w-full h-full animate-spin-slow" style={{ transform: 'translate(-50%, -50%)' }}>
            {/* Orbiting Icons - Evenly spaced around 360 degrees */}
            {generalFacilities.map((facility, index) => {
              const Icon = facility.icon
              // Calculate angle for each icon (360 / 8 = 45 degrees apart)
              const angle = (index * 360) / 8
              // Much larger radius with more gap from center
              const radiusMobile = 280
              const radiusSm = 380
              const radiusMd = 450
              
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radiusMobile}px)`,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group facility-icon"
                    onClick={() => setSelectedFacility(index)}
                  >
                    {/* Counter-rotating wrapper to keep icons upright */}
                    <div 
                      className="animate-spin-reverse"
                      style={{ transform: `rotate(-${angle}deg)` }}
                    >
                      {/* Icon Container - Much Bigger */}
                      <div className={`w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r ${facility.color} flex items-center justify-center shadow-xl cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:shadow-primary/50 relative z-20`}>
                        <Icon className="w-9 h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* Animation Styles */}
          <style jsx>{`
            @keyframes spin-slow {
              from {
                transform: translate(-50%, -50%) rotate(0deg);
              }
              to {
                transform: translate(-50%, -50%) rotate(360deg);
              }
            }

            @keyframes spin-reverse {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(-360deg);
              }
            }

            .animate-spin-slow {
              animation: spin-slow 20s linear infinite;
            }

            .animate-spin-reverse {
              animation: spin-reverse 20s linear infinite;
            }

            /* Responsive radius adjustments */
            @media (min-width: 640px) {
              .absolute.top-1\\/2.left-1\\/2 > .group {
                transform: translate(-50%, -50%) rotate(${(index) => (index * 360) / 8}deg) translateX(380px) !important;
              }
            }

            @media (min-width: 768px) {
              .absolute.top-1\\/2.left-1\\/2 > .group {
                transform: translate(-50%, -50%) rotate(${(index) => (index * 360) / 8}deg) translateX(450px) !important;
              }
            }
          `}</style>
        </div>

        {/* Popup Modal */}
        {selectedFacility !== null && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedFacility(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 sm:p-8 md:p-10 max-w-md sm:max-w-lg md:max-w-xl w-full shadow-2xl border-2 border-primary/50 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r ${generalFacilities[selectedFacility].color} flex items-center justify-center shadow-xl`}>
                  {(() => {
                    const Icon = generalFacilities[selectedFacility].icon
                    return <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  })()}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
                {generalFacilities[selectedFacility].title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center">
                {generalFacilities[selectedFacility].description}
              </p>

              {/* Close Button at Bottom */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}


      </div>
    </section>
  )
}
