"use client"

import { useState } from "react"
import { useParams, notFound } from "next/navigation"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import TopBar from "@/components/top-bar"
import Footer from "@/components/footer"
import { Clock, CheckCircle2 } from "lucide-react"
import { getCourseById } from "@/lib/courses-data"

export default function CoursePage() {
  const params = useParams()
  const [selectedImage, setSelectedImage] = useState(0)

  const courseId = parseInt(params.id as string)
  const course = getCourseById(courseId)

  if (!course) {
    notFound()
  }

  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <Navbar />

      {/* Hero Section with Image Gallery and Details */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border-2 border-primary/20 shadow-2xl">
                <img
                  src={course.images[selectedImage]}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {(course.thumbnails || course.images).map((img, idx) => {
                  const imageIndex = course.thumbnailMapping ? course.thumbnailMapping[idx] : idx
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(imageIndex)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === imageIndex
                        ? "border-primary shadow-lg shadow-primary/30 scale-105"
                        : "border-primary/30 hover:border-primary/50"
                        }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right: Course Details */}
            <div className="space-y-6">
              {/* Category Badge */}
              <div className="inline-block">
                <span className="bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold px-4 py-2 rounded-full">
                  {course.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]">
                {course.title}
              </h1>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{course.level}</span>
                </div>
              </div>

              {/* Pricing */}
              {course.price && (
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border-2 border-primary/30">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-white text-sm mb-1">Course Fee</p>
                      <div className="flex items-center gap-3">
                        {course.originalPrice && (
                          <span className="text-gray-500 text-xl line-through">₹{course.originalPrice.toLocaleString()}/-</span>
                        )}
                        <span className="text-primary text-3xl font-bold">₹{course.price.toLocaleString()}/-</span>
                      </div>
                      {course.originalPrice && (
                        <p className="text-green-400 text-sm mt-1">
                          Save ₹{(course.originalPrice - course.price).toLocaleString()}/- (50% OFF)
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-white">About This Course</h3>
                {course.aboutPoints ? (
                  <ul className="space-y-2">
                    {course.aboutPoints.slice(0, 4).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 leading-relaxed text-sm">{course.fullDescription.substring(0, 200)}...</p>
                )}
              </div>


            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
