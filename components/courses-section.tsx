"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CoursesSection() {
  const courses = [
    {
      id: 3,
      title: "Masters in PRO Artistry Course",
      description: "Level 3 advanced course including Regional Bridal, Fantasy Makeup, Brazilian Makeup, Airbrush & MLD.",
      images: ["/pa_1_640.png", "/pa_2_640.png", "/pa_4_640.png", "/pa_3_640.png"],
      duration: "4 Months",
      level: "Level 3",
      badge: "Bestseller",
    },
    {
      id: 7,
      title: "STAR 2026 Course - Masterclass",
      description: "Limited time masterclass covering comprehensive makeup and hair artistry in just 60 days.",
      images: ["/star1.png", "/star2.png", "/star3.png", "/star4.png"],
      duration: "60 Days",
      level: "Masterclass",
      badge: "LIMITED TIME",
      isMasterclass: true,
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
    <section className="section-padding bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 leading-tight min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem]">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Offerings</span>
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Explore our carefully designed courses and masterclass to elevate your makeup skills
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 px-4 max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <Link
              key={index}
              href={`/courses/${course.id}`}
              className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden group cursor-pointer border-2 border-primary/30 hover:border-primary hover:scale-105 block w-full"
            >
              <div className={`relative overflow-hidden ${course.id === 7 ? 'bg-black h-80 md:h-[320px]' : 'bg-white h-56 sm:h-64 md:h-72'}`}>
                {!course.isUpcoming ? (
                  <>
                    {course.id === 7 ? (
                      <div className="w-full h-full flex items-center justify-center">
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
                          className="md:hidden w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                        />
                      </div>
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
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Coming Soon</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                  {course.level}
                </div>
                {course.badge && (
                  <div className={`absolute top-2 left-2 sm:top-3 sm:left-3 text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full ${
                    course.badge === "LIMITED TIME" 
                      ? "bg-red-600 text-white" 
                      : "bg-yellow-500 text-black"
                  }`}>
                    {course.badge}
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-white text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">{course.description}</p>

                {/* Course Details */}
                <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs text-white flex-wrap">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-xs">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                    <span className="text-xs">Certificate</span>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="pt-3 sm:pt-4 border-t border-gray-800">
                  <button className="w-full bg-gradient-to-r from-primary to-accent text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all text-xs sm:text-sm font-semibold hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
