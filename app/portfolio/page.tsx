"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PortfolioHero from "@/components/portfolio/portfolio-hero"
import StudentShowcase from "@/components/portfolio/student-showcase"
import TestimonialsCollage from "@/components/portfolio/testimonials-collage"

export default function PortfolioPage() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <PortfolioHero />
      <StudentShowcase />
      <TestimonialsCollage />
      <Footer />
    </main>
  )
}
