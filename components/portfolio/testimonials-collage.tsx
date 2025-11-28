"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

const videoTestimonials = [
  {
    id: 1,
    videoUrl: "/t1.MOV",
  },
  {
    id: 2,
    videoUrl: "/t1 (1).mp4",
  },
  {
    id: 3,
    videoUrl: "/t1 (2).mp4",
  },
  {
    id: 4,
    videoUrl: "/t1 (3).mp4",
  },
]

function VideoCard({ testimonial, index }: { testimonial: typeof videoTestimonials[0], index: number }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-2 border-primary/30 hover:border-primary backdrop-blur-sm">
        {/* Video Container */}
        <div className="relative aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            src={testimonial.videoUrl}
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handlePause}
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Play Button Overlay (shows before video plays) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all pointer-events-none">
              <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary fill-primary" />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsCollage() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,140,163,0.15),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-sans">
            Hear directly from our students about their transformative journey
          </p>
        </motion.div>

        {/* Video Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {videoTestimonials.map((testimonial, index) => (
            <VideoCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
