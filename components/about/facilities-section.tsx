"use client"

import { useState, useEffect } from "react"

export default function FacilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const facilities = [
    {
      id: 1,
      title: "Professional Studios",
      description: "State-of-the-art makeup studios with professional lighting and equipment",
      image: "/f1 (1).jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Product Library",
      description: "Extensive collection of premium makeup products from leading brands",
      image: "/f1 (2).jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Practice Rooms",
      description: "Dedicated spaces for hands-on practice and skill development",
      image: "/f1 (3).jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Digital Learning",
      description: "Modern classrooms with digital screens and online learning resources",
      image: "/f1 (1).jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Photography Studio",
      description: "Professional photo studio for portfolio building and documentation",
      image: "/f1 (2).jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      ),
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 leading-tight min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem]">
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
                  className={`mb-4 transition-all duration-700 ${
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
                  <div className="mb-3">{facility.icon}</div>

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
