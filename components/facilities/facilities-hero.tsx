"use client"

import { motion } from "framer-motion"
import { Building2, Sparkles } from "lucide-react"

export default function FacilitiesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,140,163,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,140,163,0.10),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building2 className="w-12 h-12 text-primary" />
            <Sparkles className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Facilities & Infrastructure
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-sans">
            World-class facilities designed to provide the best learning experience for every course. 
            Explore our state-of-the-art infrastructure tailored for your success.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
