"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CoursesGrid() {
  const courses = [
    {
      id: 7,
      title: "STAR 2026 Course - Masterclass",
      description: "Limited time masterclass covering comprehensive makeup and hair artistry in just 60 days.",
      images: ["/star1.png", "/star2.png", "/star3.png", "/star4.png"],
      duration: "60 Days",
      level: "Masterclass",
      category: "Professional",
      badge: "UPCOMING",
    },
    {
      id: 6,
      title: "Level 1 - Professional Makeup Course",
      description: "Foundation course covering essential makeup techniques and professional skills for aspiring makeup artists.",
      images: ["/pm_1_800.png", "/pm_4_800.png", "/pm_3_800.png", "/pm_2_800.png"],
      duration: "1 Month (4-5 Weeks)",
      level: "Level 1",
      category: "Professional",
    },
    {
      id: 4,
      title: "Level 2 - Masters in Makeup Artistry Course",
      description: "Advanced course covering comprehensive makeup artistry, bridal makeup, and professional techniques.",
      images: ["/ma_1_800.png", "/ma_2_800.png", "/ma_3_800.png","/ma_4_800.png"],
      duration: "3 Months",
      level: "Level 2",
      category: "Professional",
    },
    {
      id: 3,
      title: "Level 3 - MasterPro Artistry Certification",
      description: "Expert-level certification including advanced techniques, creative makeup, and industry specialization.",
      images: ["/pa_1_800.png", "/pa_2_800.png", "/pa_4_800.png", "/pa_3_800.png"],
      duration: "4 Months",
      level: "Level 3",
      category: "Professional",
    },
    {
      id: 1,
      title: "Level 4 - Global Elite Artistry Program",
      description: "Elite program for international standards, fashion week preparation, and global career opportunities.",
      images: ["/ge_3_800.png", "/ge_4_800.png", "/ge_2_800.png", "/ge_1_800.png"],
      duration: "6 Months",
      level: "Level 4",
      category: "Professional",
    },
    {
      id: 8,
      title: "Professional Cosmetology Course",
      description: "Comprehensive 1-year program including Masters in Makeup, Hair Technician, Nail Technician, and Skin Course.",
      images: ["/cosmo1.png", "/cosmo4.png", "/cosmo5.png", "/cosmo6.png"],
      duration: "1 Year",
      level: "Professional",
      category: "Professional",
    },

  ]

  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newState = { ...prev }
        courses.forEach((course) => {
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
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Courses</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
            Explore our comprehensive range of makeup courses designed to transform your passion into expertise
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 block"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
              }}
            >
              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              {/* Image Slider */}
              <div className={`relative overflow-hidden ${course.id === 7 ? 'bg-black h-80 md:h-[320px] flex items-center justify-center' : 'bg-white h-56 sm:h-64 md:h-72'}`}>
                {course.id === 7 ? (
                  <>
                    {/* Desktop Image - 320x320px */}
                    <img
                      src="/star_outside.jpeg"
                      alt={course.title}
                      className="hidden md:block object-contain group-hover:scale-110 transition-all duration-1000"
                      style={{ width: '320px', height: '320px' }}
                    />
                    {/* Mobile Image */}
                    <img
                      src="/star_outside_mobile.jpeg"
                      alt={course.title}
                      className="md:hidden absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                    />
                  </>
                ) : (
                  <>
                    {course.images.map((img, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={img}
                        alt={`${course.title} - Image ${imgIdx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ${
                          imgIdx === (currentImageIndex[course.id] || 0) ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Level Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {course.level}
                </div>

                {/* Upcoming Badge */}
                {course.badge && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {course.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-white text-sm leading-relaxed mb-4 line-clamp-2">{course.description}</p>

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
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-4" />

                {/* Button */}
                <div className="flex items-center justify-center">
                  <button className="w-full bg-gradient-to-r from-primary to-accent text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all text-sm font-semibold hover:scale-105">
                    Enroll Now
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
