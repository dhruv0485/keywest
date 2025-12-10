"use client"

import { motion } from "framer-motion"

export default function PortfolioHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,140,163,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,140,163,0.10),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Student Portfolio
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto font-sans">
            <span className="block">Witness the incredible transformations and</span>
            <span className="block">artistic journeys of our talented students</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
