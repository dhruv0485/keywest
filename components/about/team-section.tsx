"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const team = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Founder & CEO",
      quote:
        "My vision was to create a space where passion meets profession. Every student's success story is a testament to our commitment to excellence.",
      imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      thumbnailSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Co-Founder & Creative Director",
      quote:
        "Innovation in makeup artistry comes from understanding both tradition and trends. We empower our students to be trendsetters.",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      thumbnailSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Education",
      quote:
        "Education is not just about techniques; it's about building confidence and nurturing creativity in every aspiring artist.",
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
      thumbnailSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Lead Instructor",
      quote:
        "With 15 years in the industry, I bring real-world experience to the classroom. My goal is to prepare students for actual industry challenges.",
      imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
      thumbnailSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    },
  ]

  const activeTeamMember = team[currentIndex]

  const handleNext = () => {
    setDirection("right")
    setCurrentIndex((prev) => (prev + 1) % team.length)
  }

  const handlePrev = () => {
    setDirection("left")
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length)
  }

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left")
    setCurrentIndex(index)
  }

  const thumbnailTeam = team.filter((_, i) => i !== currentIndex).slice(0, 3)

  const imageVariants = {
    enter: (direction: "left" | "right") => ({
      y: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      y: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  }

  const textVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -50 : 50,
      opacity: 0,
    }),
  }

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Industry experts dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          {/* Left Column: Meta and Thumbnails */}
          <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-4">
              <span className="text-sm text-gray-400 font-mono">
                {String(currentIndex + 1).padStart(2, "0")} / {String(team.length).padStart(2, "0")}
              </span>
              <h3 className="text-sm font-medium tracking-widest uppercase hidden md:block text-primary [writing-mode:vertical-rl] md:rotate-180">
                Our Team
              </h3>
            </div>

            <div className="flex space-x-2 mt-8 md:mt-0">
              {thumbnailTeam.map((member) => {
                const originalIndex = team.findIndex((t) => t.id === member.id)
                return (
                  <button
                    key={member.id}
                    onClick={() => handleThumbnailClick(originalIndex)}
                    className="overflow-hidden rounded-md w-16 h-20 md:w-20 md:h-24 opacity-70 hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black border border-gray-700 hover:border-primary hover:scale-105"
                    aria-label={`View team member ${member.name}`}
                  >
                    <img
                      src={member.thumbnailSrc || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Center Column: Main Image */}
          <div className="md:col-span-4 relative h-80 min-h-[400px] md:min-h-[500px] order-1 md:order-2">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={activeTeamMember.imageSrc || "/placeholder.svg"}
                alt={activeTeamMember.name}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 w-full h-full object-cover rounded-lg border border-gray-700"
              />
            </AnimatePresence>
          </div>

          {/* Right Column: Text and Navigation */}
          <div className="md:col-span-5 flex flex-col justify-between md:pl-8 order-3 md:order-3">
            <div className="relative overflow-hidden pt-4 md:pt-24 min-h-[200px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <p className="text-sm font-medium text-primary">{activeTeamMember.role}</p>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2 text-white font-serif">
                    {activeTeamMember.name}
                  </h3>
                  <blockquote className="mt-6 text-base md:text-lg font-normal leading-relaxed text-gray-300">
                    "{activeTeamMember.quote}"
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center space-x-2 mt-8 md:mt-0">
              <button
                onClick={handlePrev}
                className="rounded-full w-12 h-12 border border-gray-700 bg-gray-800 hover:bg-primary/10 hover:border-primary text-white transition-all hover:scale-110"
                aria-label="Previous team member"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 mx-auto"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="rounded-full w-12 h-12 bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-110"
                aria-label="Next team member"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 mx-auto"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
