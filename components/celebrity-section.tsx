"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function CelebritySection() {
  const celebrities = [
    {
      id: 1,
      name: "Celebrity Makeup Demo 1",
      role: "Bridal & Party Makeup",
      image: "/c1.webp",
      description: "Professional bridal makeup transformation"
    },
    {
      id: 2,
      name: "Celebrity Makeup Demo 2",
      role: "Editorial & Fashion",
      image: "/c2.webp",
      description: "High-fashion editorial makeup look"
    },
    {
      id: 3,
      name: "Celebrity Makeup Demo 3",
      role: "Red Carpet Glamour",
      image: "/c3.webp",
      description: "Red carpet ready glamorous makeup"
    },
    {
      id: 4,
      name: "Celebrity Makeup Demo 4",
      role: "Special Effects",
      image: "/c4.webp",
      description: "Creative special effects makeup"
    },
    {
      id: 5,
      name: "Celebrity Makeup Demo 5",
      role: "Bridal & Party Makeup",
      image: "/c5.webp",
      description: "Elegant bridal makeup artistry"
    },
    {
      id: 6,
      name: "Celebrity Makeup Demo 6",
      role: "Editorial & Fashion",
      image: "/c6.webp",
      description: "Contemporary fashion makeup"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Celebrity Collaborations
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Explore our exclusive makeup work with celebrities and high-profile clients
          </p>
        </motion.div>

        {/* Celebrity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {celebrities.map((celebrity, index) => (
            <motion.div
              key={celebrity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 shadow-xl">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={celebrity.image}
                    alt={celebrity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Star Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent p-2 rounded-full">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {celebrity.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {celebrity.role}
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    {celebrity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
