"use client"

import CoursesGrid from "@/components/courses/courses-grid"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CoursesPage() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <CoursesGrid />
      <Footer />
    </main>
  )
}
