"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function CelebritySection() {
  const celebrities = [
    {
      id: 1,
      type: "image",
      media: "/celebs (1).jpeg",
    },
    {
      id: 2,
      type: "video",
      media: "/celebs (1).MOV",
    },
    {
      id: 3,
      type: "image",
      media: "/celebs (2).jpg",
    },
    {
      id: 4,
      type: "video",
      media: "/celebs (2).MOV",
    },
    {
      id: 5,
      type: "image",
      media: "/celebs (3).JPG",
    },
    {
      id: 6,
      type: "image",
      media: "/celebs (4).jpg",
    },
    {
      id: 7,
      type: "image",
      media: "/celebs (5).jpg",
    },
    {
      id: 8,
      type: "image",
      media: "/celebs (6).JPG",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Celebrity Grid - 3 rows: 3-3-2 layout */}
        <div className="space-y-6 md:space-y-8">
          {/* Row 1: First 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {celebrities.slice(0, 3).map((celebrity, index) => (
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
                  {/* Media Container */}
                  <div className="relative h-96 overflow-hidden">
                    {celebrity.type === "video" ? (
                      <video
                        src={celebrity.media}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <img
                        src={celebrity.media}
                        alt={`Celebrity collaboration ${celebrity.id}`}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Star Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent p-2 rounded-full">
                      <Star className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: Next 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {celebrities.slice(3, 6).map((celebrity, index) => (
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
                  {/* Media Container */}
                  <div className="relative h-96 overflow-hidden">
                    {celebrity.type === "video" ? (
                      <video
                        src={celebrity.media}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <img
                        src={celebrity.media}
                        alt={`Celebrity collaboration ${celebrity.id}`}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Star Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent p-2 rounded-full">
                      <Star className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3: Last 2 items - centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {celebrities.slice(6, 8).map((celebrity, index) => (
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
                  {/* Media Container */}
                  <div className="relative h-96 overflow-hidden">
                    {celebrity.type === "video" ? (
                      <video
                        src={celebrity.media}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <img
                        src={celebrity.media}
                        alt={`Celebrity collaboration ${celebrity.id}`}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Star Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent p-2 rounded-full">
                      <Star className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
