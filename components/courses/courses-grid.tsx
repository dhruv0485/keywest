"use client"

import { useState } from "react"
import Link from "next/link"

export default function CoursesGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const courses = [
    {
      id: 1,
      title: "Foundation Makeup Mastery",
      description: "Learn the fundamentals of makeup application, color theory, and skin preparation techniques.",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
      price: "$299",
      duration: "6 Weeks",
      level: "Beginner",
      category: "Basic",
      students: "2,500+",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Bridal Makeup Artistry",
      description: "Master the art of creating stunning bridal looks for the perfect wedding day.",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
      price: "$499",
      duration: "8 Weeks",
      level: "Intermediate",
      category: "Bridal",
      students: "1,800+",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Special Effects Makeup",
      description: "Explore advanced techniques in special effects and theatrical makeup artistry.",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
      price: "$699",
      duration: "10 Weeks",
      level: "Advanced",
      category: "Special FX",
      students: "950+",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Professional Makeup Artist",
      description: "Comprehensive certification program covering all aspects of professional makeup artistry.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
      price: "$899",
      duration: "12 Weeks",
      level: "Professional",
      category: "Professional",
      students: "3,200+",
      rating: 5.0,
    },
    {
      id: 5,
      title: "Airbrush Makeup Techniques",
      description: "Master airbrush application for flawless, long-lasting makeup results.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
      price: "$399",
      duration: "4 Weeks",
      level: "Intermediate",
      category: "Advanced",
      students: "1,200+",
      rating: 4.6,
    },
    {
      id: 6,
      title: "Editorial & Fashion Makeup",
      description: "Create bold, creative looks for fashion shows, photoshoots, and editorial work.",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80",
      price: "$549",
      duration: "7 Weeks",
      level: "Advanced",
      category: "Fashion",
      students: "890+",
      rating: 4.8,
    },
    {
      id: 7,
      title: "Contouring & Highlighting",
      description: "Perfect the art of sculpting and enhancing facial features with advanced techniques.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
      price: "$249",
      duration: "3 Weeks",
      level: "Beginner",
      category: "Basic",
      students: "3,500+",
      rating: 4.7,
    },
    {
      id: 8,
      title: "Bridal Hair & Makeup",
      description: "Complete bridal beauty package including hair styling and makeup application.",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
      price: "$649",
      duration: "9 Weeks",
      level: "Intermediate",
      category: "Bridal",
      students: "1,600+",
      rating: 4.9,
    },
    {
      id: 9,
      title: "Celebrity Makeup Masterclass",
      description: "Learn red carpet and celebrity makeup techniques from industry professionals.",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
      price: "$799",
      duration: "8 Weeks",
      level: "Advanced",
      category: "Professional",
      students: "750+",
      rating: 5.0,
    },
    {
      id: 10,
      title: "Makeup Business Essentials",
      description: "Build and grow your makeup business with marketing, branding, and client management skills.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
      price: "$349",
      duration: "5 Weeks",
      level: "Beginner",
      category: "Business",
      students: "2,100+",
      rating: 4.6,
    },
  ]

  const categories = ["all", "Basic", "Bridal", "Special FX", "Professional", "Advanced", "Fashion", "Business"]

  // Filter courses
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-pink-50/20 to-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Our Courses 💄
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl max-w-3xl mx-auto">
            Explore our comprehensive range of makeup courses designed to transform your passion into expertise
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-full border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white shadow-lg"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-primary absolute left-5 top-1/2 -translate-y-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-col items-center justify-center gap-3">
            {/* Category Filter */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
              <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">Category:</span>
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                        : "bg-white border-2 border-gray-200 text-foreground/70 hover:border-primary/50"
                    }`}
                  >
                    {category === "all" ? "All" : category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-center text-foreground/60 text-sm">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredCourses.map((course, index) => (
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

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Level Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {course.level}
                </div>

                {/* Rating */}
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-yellow-400"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-white text-xs font-semibold">{course.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">{course.description}</p>

                {/* Course Info */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
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
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                    <span>{course.students}</span>
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

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">No courses found</h3>
            <p className="text-foreground/60 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
              }}
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}
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
