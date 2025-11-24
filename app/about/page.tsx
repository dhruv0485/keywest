"use client"

import AboutHeroSection from "@/components/about/about-hero-section"
import TeamSection from "@/components/about/team-section"
import AboutTimelineSection from "@/components/about/about-timeline-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <AboutHeroSection />
      <TeamSection />
      <AboutTimelineSection />
      <Footer />
    </main>
  )
}
