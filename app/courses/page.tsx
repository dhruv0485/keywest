"use client"

import CoursesGrid from "@/components/courses/courses-grid"
import Navbar from "@/components/navbar"
import TopBar from "@/components/top-bar"
import Footer from "@/components/footer"

export default function CoursesPage() {
  return (
    <main className="w-full overflow-hidden">
      <TopBar />
      <Navbar />
      <CoursesGrid />
      <Footer />
    </main>
  )
}
