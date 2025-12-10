"use client"

import { useState } from "react"
import { useParams, notFound } from "next/navigation"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Clock, CheckCircle2, X } from "lucide-react"
import { getCourseById } from "@/lib/courses-data"

export default function MasterclassDetailPage() {
  const params = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [showCurriculumModal, setShowCurriculumModal] = useState(false)

  const masterclassId = parseInt(params.id as string)
  const masterclass = getCourseById(masterclassId)

  if (!masterclass) {
    notFound()
  }

  const scrollToCurriculum = () => {
    setShowCurriculumModal(true)
  }

  // Masterclass specific curriculum data
  const masterclassCurriculum = [
    {
      week: 1,
      title: "THEORY",
      topics: [
        "Rules & Regulations",
        "Self Grooming",
        "Safety & Hygiene",
        "Colour Theory",
        "Shades & Undertones",
        "Product Knowledge",
        "Brush Knowledge",
        "Skin Analysis, Types & Conditions",
        "Colour Mixing & Foundation Making Activity",
        "Face Chart",
      ],
    },
    {
      week: 2,
      title: "TECHNICAL MAKEUP CLASSES",
      topics: [
        "Corrective Eye Makeup + Sheer Coverage",
        "Smokey Eye Makeup + Medium Coverage",
        "Halo Eye Makeup + Full Coverage",
      ],
    },
    {
      week: 3,
      title: "FULL LOOKS",
      topics: [
        "Self Makeup Techniques",
        "Corporate Makeup Look",
        "High Fashion / Runway Ready Looks",
        "Timeless Bridal Makeup Look",
        "Graphic Liner Looks",
        "Party Makeup Look",
      ],
    },
    {
      week: 4,
      title: "ADDITIONAL TOPICS",
      topics: [
        "Personality Development",
        "Marketing Class",
        "Confidence Building",
        "Profile Building",
      ],
    },
    {
      week: 5,
      title: "HAIR",
      topics: [
        "Tools Knowledge",
        "Client Handling",
        "Hair Analysis",
        "Basic Self Hair Styling (Straightening, Basic Curl)",
        "Twisted Bun / S Bun",
        "Half Tie Braid",
        "Bubble Braid",
        "Sleek Hair with Long Braid (with Lace)",
        "Different Braids",
        "Elegance Placement (Accessories)",
        "Hollywood Hair Dryer",
        "Back Combing Technique",
        "Volume Building Puff",
        "Extension Placement",
      ],
    },
  ]

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
                  src={masterclass.images[selectedImage]}
                  alt={masterclass.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {(masterclass.thumbnails || masterclass.images).map((img, idx) => {
                  const imageIndex = masterclass.thumbnailMapping ? masterclass.thumbnailMapping[idx] : idx
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(imageIndex)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === imageIndex
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
              <div className="flex gap-3 flex-wrap">
                <span className="bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold px-4 py-2 rounded-full">
                  {masterclass.category}
                </span>
                <span className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                  LIMITED TIME
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]">
                {masterclass.title}
              </h1>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{masterclass.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{masterclass.level}</span>
                </div>
              </div>

              {/* Pricing */}
              {masterclass.price && (
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border-2 border-primary/30">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-white text-sm mb-1">Course Fee</p>
                      <div className="flex items-center gap-3">
                        {masterclass.originalPrice && (
                          <span className="text-gray-500 text-xl line-through">
                            ₹{masterclass.originalPrice.toLocaleString()}/-
                          </span>
                        )}
                        <span className="text-primary text-3xl font-bold">₹{masterclass.price.toLocaleString()}/-</span>
                      </div>
                      {masterclass.originalPrice && (
                        <p className="text-green-400 text-sm mt-1">
                          Save ₹{(masterclass.originalPrice - masterclass.price).toLocaleString()}/- (50% OFF)
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-white">About This Course</h3>
                {masterclass.aboutPoints ? (
                  <ul className="space-y-2">
                    {masterclass.aboutPoints.slice(0, 4).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {masterclass.fullDescription.substring(0, 200)}...
                  </p>
                )}
              </div>

              {/* Course Curriculum CTA */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border-2 border-primary/30 backdrop-blur-sm">
                <h3 className="text-xl font-serif font-bold text-white mb-4">Explore the Course</h3>
                <p className="text-gray-300 mb-6">Discover what you'll learn in this comprehensive program.</p>
                <button
                  onClick={scrollToCurriculum}
                  className="w-full py-4 rounded-full font-semibold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:shadow-primary/30"
                >
                  View Course Curriculum
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Modal */}
      {showCurriculumModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setShowCurriculumModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowCurriculumModal(false)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh] p-6 md:p-8 lg:p-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  Course Curriculum
                </h2>
                <p className="text-gray-400">Your journey through {masterclass.duration} of learning</p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

                <div className="space-y-8">
                  {masterclassCurriculum.map((item, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute left-0 md:left-5 top-0 w-7 h-7 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-black shadow-lg z-10 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{item.week}</span>
                      </div>

                      {/* Content Card */}
                      <div className="ml-12 md:ml-20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 shadow-lg border-2 border-primary/30 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all backdrop-blur-sm">
                        <h3 className="text-xl font-serif font-bold text-white mb-3">{item.title}</h3>
                        <ul className="space-y-2">
                          {item.topics.map((topic, topicIdx) => (
                            <li key={topicIdx} className="flex items-start gap-2 text-gray-300">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Course Gallery
            </h2>
            <p className="text-white">See the amazing work from our students</p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* First Row - 3 images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {masterclass.galleryImages.slice(0, 3).map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border-2 border-primary/30 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all"
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
            
            {/* Second Row - 2 images centered */}
            {masterclass.galleryImages.length > 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto w-full">
                {masterclass.galleryImages.slice(3, 5).map((img, idx) => (
                  <div
                    key={idx + 3}
                    className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border-2 border-primary/30 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 4}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
