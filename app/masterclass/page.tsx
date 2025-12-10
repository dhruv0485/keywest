"use client"

import MasterclassGrid from "@/components/masterclass/masterclass-grid"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MasterclassPage() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <MasterclassGrid />
      <Footer />
    </main>
  )
}
