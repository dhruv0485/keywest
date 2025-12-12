"use client"
import TopBar from "@/components/top-bar"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CoursesSection from "@/components/courses-section"
import AccreditationsSection from "@/components/accreditations-section"
import CollabsSection from "@/components/collabs-section"
import CelebritySection from "@/components/celebrity-section"
import TestimonialsSection from "@/components/testimonials-section"
import TestimonialsCollage from "@/components/portfolio/testimonials-collage"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="w-full overflow-hidden flex-grow">
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <TestimonialsCollage />
        <CollabsSection />
        <CelebritySection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
