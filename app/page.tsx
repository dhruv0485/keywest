"use client"
import TopBar from "@/components/top-bar"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CoursesSection from "@/components/courses-section"
import AccreditationsSection from "@/components/accreditations-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <TopBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <AccreditationsSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
