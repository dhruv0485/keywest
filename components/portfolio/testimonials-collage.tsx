"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

const videoTestimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "Professional Makeup Course",
    videoUrl: "/videos/testimonials/priya-sharma.mp4",
    thumbnail: "/images/testimonials/priya-thumb.jpg",
    duration: "2:15",
  },
  {
    id: 2,
    name: "Ananya Patel",
    course: "Advanced Makeup Course",
    videoUrl: "/videos/testimonials/ananya-patel.mp4",
    thumbnail: "/images/testimonials/ananya-thumb.jpg",
    duration: "1:45",
  },
  {
    id: 3,
    name: "Riya Mehta",
    course: "Complete Makeup Course",
    videoUrl: "/videos/testimonials/riya-mehta.mp4",
    thumbnail: "/images/testimonials/riya-thumb.jpg",
    duration: "2:30",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    course: "Professional Course",
    videoUrl: "/videos/testimonials/sneha-reddy.mp4",
    thumbnail: "/images/testimonials/sneha-thumb.jpg",
    duration: "1:55",
  },
  {
    id: 5,
    name: "Kavya Singh",
    course: "Master Makeup Course",
    videoUrl: "/videos/testimonials/kavya-singh.mp4",
    thumbnail: "/images/testimonials/kavya-thumb.jpg",
    duration: "2:10",
  },
  {
    id: 6,
    name: "Meera Kapoor",
    course: "Bridal Makeup Course",
    videoUrl: "/videos/testimonials/meera-kapoor.mp4",
    thumbnail: "/images/testimonials/meera-thumb.jpg",
    duration: "1:50",
  },
]

export default function TestimonialsCollage() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What Our Students Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear directly from our students about their transformative journey
          </p>
        </motion.div>

        {/* Video Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30">
                {/* Video Container */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    poster={testimonial.thumbnail}
                    controls
                    preload="metadata"
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play Button Overlay (shows before video plays) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all pointer-events-none">
                    <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary fill-primary" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {testimonial.duration}
                  </div>
                </div>

                {/* Student Info */}
                <div className="p-5">
                  <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-foreground/60">{testimonial.course}</p>
                </div>
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
          <a
            href="/enquiry"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold py-4 px-8 rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
