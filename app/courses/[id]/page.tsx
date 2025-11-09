"use client"

import { useState } from "react"
import { useParams, notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import TopBar from "@/components/top-bar"
import Footer from "@/components/footer"
import { ShoppingCart, Star, Clock, Users, CheckCircle2, Heart } from "lucide-react"
import { getCourseById } from "@/lib/courses-data"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import { useRouter } from "next/navigation"

export default function CoursePage() {
  const params = useParams()
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(0)
  const { addToCart, cart } = useCart()
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist()

  const courseId = parseInt(params.id as string)
  const course = getCourseById(courseId)

  if (!course) {
    notFound()
  }

  const totalReviews = Math.floor(parseFloat(course.students.replace(/[^0-9.]/g, "")) * 100)
  const isInCart = cart.some((item) => item.id === course.id)
  const inWishlist = isInWishlist(course.id)

  const handleAddToCart = () => {
    addToCart({
      id: course.id,
      title: course.title,
      price: course.price,
      image: course.images[0],
      duration: course.duration,
      level: course.level,
    })
    router.push("/cart")
  }

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(course.id)
    } else {
      addToWishlist({
        id: course.id,
        title: course.title,
        price: course.price,
        image: course.images[0],
        duration: course.duration,
        level: course.level,
      })
    }
  }

  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-white via-pink-50/20 to-white">
      <TopBar />
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
                {course.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? "border-primary shadow-lg shadow-primary/30 scale-105"
                        : "border-gray-200 hover:border-primary/50"
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {course.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-foreground/70 text-sm">
                  {course.rating} ({totalReviews} reviews)
                </span>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{course.students} Students</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{course.level}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-foreground">About This Course</h3>
                <p className="text-foreground/70 leading-relaxed">{course.fullDescription}</p>
              </div>

              {/* Price and CTA */}
              <div className="bg-gradient-to-br from-gray-50 to-pink-50/30 rounded-2xl p-6 border-2 border-primary/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-foreground/60">Course Price</p>
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {course.price}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={isInCart}
                    className={`flex-1 py-4 rounded-full font-semibold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 ${
                      isInCart
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:shadow-primary/30"
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {isInCart ? "Already in Cart" : "Add to Cart"}
                  </button>
                  <button
                    onClick={handleWishlist}
                    className={`p-4 rounded-full border-2 transition-all hover:scale-[1.02] ${
                      inWishlist
                        ? "bg-gradient-to-r from-primary to-accent border-transparent text-white"
                        : "border-primary text-primary hover:bg-pink-50"
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${inWishlist ? "fill-current" : ""}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Curriculum Section */}
      <section className="py-16 md:py-20 bg-white/50">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Course Curriculum
            </h2>
            <p className="text-foreground/70">Your journey through {course.duration} of learning</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

            <div className="space-y-8">
              {course.curriculum.map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-5 top-0 w-7 h-7 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{item.week}</span>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-20 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                      Week {item.week}: {item.title}
                    </h3>
                    <ul className="space-y-2">
                      {item.topics.map((topic, topicIdx) => (
                        <li key={topicIdx} className="flex items-start gap-2 text-foreground/70">
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
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Student Reviews
            </h2>
            <p className="text-foreground/70">What our students say about this course</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-foreground/60">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-foreground/70 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Course Gallery
            </h2>
            <p className="text-foreground/70">See the amazing work from our students</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {course.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border-2 border-primary/10 hover:border-primary/30 transition-all"
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
        </div>
      </section>

      <Footer />
    </main>
  )
}
