"use client"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CoursesSection from "@/components/courses-section"
import AccreditationsSection from "@/components/accreditations-section"
import CollabsSection from "@/components/collabs-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <AccreditationsSection />
      <CollabsSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
