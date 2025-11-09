"use client"

import AboutHeroSection from "@/components/about/about-hero-section"
import AboutTimelineSection from "@/components/about/about-timeline-section"
import FacilitiesSection from "@/components/about/facilities-section"
import TeamSection from "@/components/about/team-section"
import Navbar from "@/components/navbar"
import TopBar from "@/components/top-bar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden">
      <TopBar />
      <Navbar />
      <AboutHeroSection />
      <AboutTimelineSection />
      <FacilitiesSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
