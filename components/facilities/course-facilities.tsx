"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette, Sparkles, Camera, Users, ChevronRight } from "lucide-react"

const courseFacilities = [
  {
    id: 1,
    category: "Professional Makeup Course",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    facilities: [
      {
        title: "HD Makeup Studio",
        description: "Professional HD makeup studio equipped with ring lights, adjustable chairs, and full-length mirrors. Perfect lighting conditions simulate real-world scenarios for bridal and party makeup practice.",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
        benefits: [
          "Professional ring lights for perfect illumination",
          "HD mirrors for detailed work",
          "Climate-controlled environment",
          "Individual workstations for each student"
        ]
      },
      {
        title: "Product Library",
        description: "Extensive collection of premium makeup products from international brands including MAC, Huda Beauty, Bobbi Brown, and more. Students get hands-on experience with professional-grade products.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
        benefits: [
          "Access to 500+ premium products",
          "Latest makeup tools and brushes",
          "Airbrush equipment and supplies",
          "Hygiene and sanitization stations"
        ]
      },
      {
        title: "Practice Mannequins & Live Models",
        description: "Dedicated practice area with professional mannequins and regular live model sessions. Build confidence and perfect techniques before working with real clients.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=600&fit=crop",
        benefits: [
          "20+ professional mannequin heads",
          "Weekly live model practice sessions",
          "Diverse skin tone practice materials",
          "Video recording for self-assessment"
        ]
      }
    ]
  },
  {
    id: 2,
    category: "Bridal Makeup Course",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    facilities: [
      {
        title: "Bridal Suite Studio",
        description: "Luxurious bridal suite designed to replicate real wedding day scenarios. Complete with traditional and modern bridal setups, allowing students to master various cultural bridal styles.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
        benefits: [
          "Traditional bridal setup area",
          "Modern bridal styling zone",
          "Jewelry and accessory collection",
          "Bridal draping practice materials"
        ]
      },
      {
        title: "Airbrush Station",
        description: "Dedicated airbrush makeup station with professional compressors and multiple airbrush guns. Learn the art of flawless, long-lasting bridal makeup that photographs beautifully.",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
        benefits: [
          "Professional airbrush systems",
          "HD makeup products",
          "Practice on various skin types",
          "Expert guidance on techniques"
        ]
      },
      {
        title: "Photography Studio",
        description: "In-house photography studio to capture and analyze your bridal makeup work. Understand how makeup translates on camera and learn to create photo-perfect looks.",
        image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=600&fit=crop",
        benefits: [
          "Professional photography equipment",
          "Various lighting setups",
          "Portfolio building sessions",
          "Before/after documentation"
        ]
      }
    ]
  },
  {
    id: 3,
    category: "Advanced & Editorial Course",
    icon: Camera,
    color: "from-blue-500 to-purple-500",
    facilities: [
      {
        title: "Editorial Makeup Lab",
        description: "Creative space designed for experimental and editorial makeup. Features specialized lighting, backdrops, and avant-garde makeup supplies for fashion-forward looks.",
        image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&h=600&fit=crop",
        benefits: [
          "Creative makeup supplies",
          "Special effects materials",
          "Fashion photography backdrops",
          "Mood board creation area"
        ]
      },
      {
        title: "Digital Content Studio",
        description: "Modern content creation studio with professional cameras, lighting, and editing stations. Learn to create stunning makeup content for social media and portfolios.",
        image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&h=600&fit=crop",
        benefits: [
          "4K video recording equipment",
          "Professional lighting setups",
          "Editing workstations",
          "Social media content training"
        ]
      },
      {
        title: "Fashion Runway Setup",
        description: "Simulated runway environment for practicing fast-paced fashion makeup. Learn to work under pressure and create looks that shine under runway lights.",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop",
        benefits: [
          "Runway lighting simulation",
          "Quick-change practice area",
          "Fashion show coordination training",
          "Team collaboration exercises"
        ]
      }
    ]
  },
  {
    id: 4,
    category: "Special Effects & Character Makeup",
    icon: Users,
    color: "from-orange-500 to-red-500",
    facilities: [
      {
        title: "SFX Workshop",
        description: "Specialized workshop for special effects makeup with prosthetics, molds, and character creation materials. Industry-standard equipment for film and theater makeup.",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=600&fit=crop",
        benefits: [
          "Prosthetic application tools",
          "Mold-making equipment",
          "Character design materials",
          "Theatrical makeup supplies"
        ]
      },
      {
        title: "Body Painting Studio",
        description: "Large open studio for body painting and full-body makeup artistry. Perfect for learning creative and artistic makeup applications beyond the face.",
        image: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&h=600&fit=crop",
        benefits: [
          "Full-body mannequins",
          "Body painting supplies",
          "Airbrush body art equipment",
          "Large workspace for creativity"
        ]
      },
      {
        title: "Film Makeup Station",
        description: "Professional film makeup station with HD monitors and continuity tracking systems. Learn makeup for film, TV, and digital media production.",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
        benefits: [
          "HD monitoring systems",
          "Continuity photography setup",
          "Film-grade makeup products",
          "Industry-standard practices"
        ]
      }
    ]
  }
]

export default function CourseFacilities() {
  const [selectedCourse, setSelectedCourse] = useState(0)
  const [selectedFacility, setSelectedFacility] = useState(0)

  const currentCourse = courseFacilities[selectedCourse]
  const currentFacility = currentCourse.facilities[selectedFacility]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Course-Specific Facilities
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our specialized infrastructure designed for each course category
          </p>
        </motion.div>

        {/* Course Category Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {courseFacilities.map((course, index) => {
            const Icon = course.icon
            return (
              <motion.button
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setSelectedCourse(index)
                  setSelectedFacility(0)
                }}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  selectedCourse === index
                    ? `bg-gradient-to-r ${course.color} text-white shadow-xl scale-105`
                    : "bg-white hover:bg-primary/5 text-foreground/70 hover:text-primary shadow-md hover:shadow-lg"
                }`}
              >
                <Icon className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold text-sm md:text-base text-center">
                  {course.category}
                </h3>
              </motion.button>
            )
          })}
        </div>

        {/* Facility Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Facility List - Left Sidebar */}
          <div className="lg:col-span-1 space-y-3">
            <h3 className="text-xl font-bold text-primary mb-4">Available Facilities</h3>
            {currentCourse.facilities.map((facility, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedFacility(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  selectedFacility === index
                    ? "bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary shadow-lg"
                    : "bg-white hover:bg-primary/5 border border-primary/10 hover:border-primary/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm md:text-base text-foreground">
                    {facility.title}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      selectedFacility === index ? "text-primary rotate-90" : "text-foreground/40"
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Facility Details - Main Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCourse}-${selectedFacility}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary/10"
              >
                {/* Facility Image */}
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                  <img
                    src={currentFacility.image}
                    alt={currentFacility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {currentFacility.title}
                    </h3>
                  </div>
                </div>

                {/* Facility Description */}
                <div className="p-6 md:p-8">
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {currentFacility.description}
                  </p>

                  {/* Benefits Grid */}
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-4">Key Benefits</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {currentFacility.benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
