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
        "The instructors here are incredibly skilled and patient. I went from complete beginner to confident makeup artist in just 3 months! The hands-on training and personalized feedback made all the difference.",
      author: "Sarah Johnson",
      role: "Professional Makeup Artist",
      videoUrl: "/videos/testimonials/sarah-johnson.mp4",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Best investment I made for my career. The curriculum is comprehensive and the hands-on training is amazing. I now run my own successful bridal makeup business!",
      author: "Emma Davis",
      role: "Bridal Makeup Specialist",
      videoUrl: "/videos/testimonials/emma-davis.mp4",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Professional environment, supportive community, and practical skills that I use every day in my work. The certification opened so many doors for me.",
      author: "Lisa Martinez",
      role: "Makeup Educator",
      videoUrl: "/videos/testimonials/lisa-martinez.mp4",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "I love how the academy focuses on both traditional and modern techniques. The instructors are industry professionals who genuinely care about your success.",
      author: "Priya Sharma",
      role: "Fashion Makeup Artist",
      videoUrl: "/videos/testimonials/priya-sharma.mp4",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "The portfolio building sessions were invaluable. I graduated with a professional portfolio that helped me land my dream job at a top beauty brand!",
      author: "Jessica Chen",
      role: "Brand Makeup Artist",
      videoUrl: "/videos/testimonials/jessica-chen.mp4",
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
    <section className="section-padding bg-gradient-to-b from-white to-pink-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            What Our Students Say 💕
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
            Hear from our graduates about their transformative journey with us
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
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
                  <div className="bg-gradient-to-br from-white to-pink-50/50 rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/10 max-w-4xl mx-auto">
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
                    <p className="text-foreground/80 text-lg md:text-xl text-center leading-relaxed mb-6 italic">
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
                        <p className="font-serif font-bold text-foreground text-lg">{testimonial.author}</p>
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
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-primary to-accent w-8"
                    : "bg-gray-300 w-2"
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
