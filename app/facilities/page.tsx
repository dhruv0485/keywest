"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FacilitiesHero from "@/components/facilities/facilities-hero"
import CourseFacilities from "@/components/facilities/course-facilities"
import GeneralFacilities from "@/components/facilities/general-facilities"

export default function FacilitiesPage() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <FacilitiesHero />
      <CourseFacilities />
      <GeneralFacilities />
      <Footer />
    </main>
  )
}
