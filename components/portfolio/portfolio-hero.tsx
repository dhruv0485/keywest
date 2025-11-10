"use client"

import { motion } from "framer-motion"

export default function PortfolioHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,182,193,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,218,185,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Student Portfolio
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Witness the incredible transformations and artistic journeys of our talented students
          </p>
        </motion.div>
      </div>
    </section>
  )
}
