"use client"

import { motion } from "framer-motion"
import { Wifi, Coffee, BookOpen, Users, Laptop, Shield, Clock, Award } from "lucide-react"

const generalFacilities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Free high-speed internet throughout the campus for research, online tutorials, and staying connected.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Coffee,
    title: "Student Lounge",
    description: "Comfortable lounge area with refreshments where students can relax, network, and collaborate.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description: "Extensive library with makeup books, fashion magazines, and digital resources for continuous learning.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Group Study Rooms",
    description: "Private rooms for group projects, practice sessions, and collaborative learning experiences.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Laptop,
    title: "Computer Lab",
    description: "Modern computer lab with editing software for portfolio creation and digital content development.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Safety & Hygiene",
    description: "Strict hygiene protocols, sanitization stations, and safety measures throughout the facility.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Extended facility access hours for students who want extra practice time and skill development.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Award,
    title: "Certification Center",
    description: "Dedicated space for assessments, certifications, and portfolio reviews with industry experts.",
    color: "from-yellow-500 to-orange-500"
  }
]

const amenities = [
  {
    title: "Climate Control",
    description: "All studios are air-conditioned with optimal temperature and humidity control for comfortable learning.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
  },
  {
    title: "Parking Facility",
    description: "Secure parking space available for students and visitors with 24/7 security surveillance.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&h=400&fit=crop"
  },
  {
    title: "Accessibility",
    description: "Wheelchair accessible facilities with elevators and ramps ensuring everyone can pursue their passion.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop"
  },
  {
    title: "Cafeteria",
    description: "On-site cafeteria serving healthy meals, snacks, and beverages throughout the day.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
  }
]

export default function GeneralFacilities() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        {/* General Facilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            General Facilities
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Additional amenities and services to enhance your learning experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {generalFacilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${facility.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {facility.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Campus Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Campus Amenities
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need for a comfortable and productive learning environment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/10 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {amenity.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-foreground/80 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Experience Our World-Class Facilities
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Schedule a campus tour to see our facilities in person and discover why we're the best choice for your makeup education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/enquiry"
                className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold py-4 px-8 rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                Schedule a Tour
              </a>
              <a
                href="/courses"
                className="inline-block bg-white text-primary font-semibold py-4 px-8 rounded-xl hover:scale-105 transition-all shadow-lg border-2 border-primary"
              >
                View Courses
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
