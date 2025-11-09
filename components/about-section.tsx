"use client"

import { useState, useEffect } from "react"

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const reels = [
    { id: 1, title: "Contouring Basics", thumbnail: "/makeup-contouring-tutorial.jpg" },
    { id: 2, title: "Eye Shadow Blending", thumbnail: "/eyeshadow-blending-technique.jpg" },
    { id: 3, title: "Lip Art Designs", thumbnail: "/artistic-lip-makeup-design.jpg" },
    { id: 4, title: "Bridal Makeup", thumbnail: "/beautiful-bridal-makeup.jpg" },
    { id: 5, title: "Skin Preparation", thumbnail: "/professional-skin-prep-makeup.jpg" },
    { id: 6, title: "Foundation Techniques", thumbnail: "/foundation-makeup-course.jpg" },
    { id: 7, title: "Smokey Eye Tutorial", thumbnail: "/makeup-artist-applying-makeup.jpg" },
    { id: 8, title: "Glam Makeup Look", thumbnail: "/makeup-products-and-brushes.jpg" },
    { id: 9, title: "Natural Makeup", thumbnail: "/students-practicing-makeup.jpg" },
    { id: 10, title: "Evening Glam", thumbnail: "/makeup-academy-instructor-teaching-class.jpg" },
  ]

  const cardsPerSlide = 5
  const totalSlides = Math.ceil(reels.length / cardsPerSlide)

  // Auto-play reels - slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(timer)
  }, [totalSlides])

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-20">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <img
                src="/makeup-academy-instructor-teaching-class.jpg"
                alt="Makeup academy classroom"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 text-balance">
              Who We Are?
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
              At Makeup Academy, we are passionate about empowering individuals to master the art of makeup. Our expert
              instructors bring years of professional experience and a genuine commitment to your success.
            </p>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-8">
              Whether you're a beginner looking to explore makeup basics or an aspiring professional seeking advanced
              techniques, we have the perfect course for you.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">✨</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Instructors</h4>
                  <p className="text-sm text-foreground/60">Industry professionals with years of experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🎨</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Hands-On Training</h4>
                  <p className="text-sm text-foreground/60">Practical skills you can apply immediately</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🏆</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Certification</h4>
                  <p className="text-sm text-foreground/60">Recognized credentials upon completion</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Career Support</h4>
                  <p className="text-sm text-foreground/60">Guidance to launch your makeup career</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reels Carousel Section - Single Row */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 text-center text-balance">
            Our Makeup Reels
          </h3>
          <p className="text-center text-foreground/60 mb-12 text-base md:text-lg">
            Watch our latest makeup tutorials and tips
          </p>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-primary to-accent text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-110 -ml-5"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-primary to-accent text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-110 -mr-5"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Reels Container */}
            <div className="overflow-hidden px-2">
              <div
                className="flex gap-3 md:gap-4 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {reels.map((reel) => (
                  <div
                    key={reel.id}
                    className="flex-shrink-0 w-[calc(20%-0.6rem)] md:w-[calc(20%-0.8rem)]"
                    style={{ aspectRatio: "9/16" }}
                  >
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                      <img
                        src={reel.thumbnail || "/placeholder.svg"}
                        alt={reel.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 md:w-6 md:h-6 text-white ml-1"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                        <h4 className="text-white font-semibold text-xs md:text-sm text-balance leading-tight">
                          {reel.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-gradient-to-r from-primary to-accent w-8" : "bg-gray-300 w-2"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
