"use client"

import { useState, useEffect } from "react"
import { Play, X } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")

  const testimonials = [
    {
      id: 1,
      quote:
        "I have been given this opportunity to go and work in Paris Fashion Week as a makeup artist.",
      author: "Ayushi",
      role: "Makeup Artist",
      videoUrl: "/t1.MOV",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "I learned a lot here, and I must say, if you are interested in makeup, then join Keywest Academy.",
      author: "Priti Singh",
      role: "Student",
      videoUrl: "/t1.mp4",
      rating: 5,
    },
  ]

  const openVideoModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl)
    setIsVideoOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoOpen(false)
    setCurrentVideo("")
  }

  // Auto-play testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]">
            What Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Students Say</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Hear from our graduates about their transformative journey with us
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative min-h-[600px] md:min-h-[650px] mb-16">
          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-primary to-accent text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-110 -ml-5"
            aria-label="Previous testimonial"
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

          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-primary to-accent text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-110 -mr-5"
            aria-label="Next testimonial"
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

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-primary/20 border-2 border-primary/30 max-w-5xl mx-auto min-h-[550px] md:min-h-[600px] flex flex-col justify-between">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-8 h-8 text-white"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 text-lg md:text-xl text-center leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-primary"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    {/* Author Info - Bottom Right */}
                    <div className="flex justify-end items-center gap-4">
                      <div className="text-right">
                        <p className="font-serif font-bold text-white text-lg">{testimonial.author}</p>
                        <p className="text-primary text-sm">{testimonial.role}</p>
                      </div>
                      <button
                        onClick={() => openVideoModal(testimonial.videoUrl)}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center border-4 border-primary/30 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
                        aria-label={`Watch ${testimonial.author}'s video testimonial`}
                      >
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-primary to-accent w-8"
                    : "bg-gray-600 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Video Modal Popup */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeVideoModal}
          >
            <div
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
                aria-label="Close video"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Video Player */}
              <div className="aspect-video bg-black">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  src={currentVideo}
                >
                  <source src={currentVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
