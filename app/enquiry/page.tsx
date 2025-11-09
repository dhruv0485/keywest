"use client"

import EnquiryHeroSection from "@/components/enquiry/enquiry-hero-section"
import EnquiryContactSection from "@/components/enquiry/enquiry-contact-section"
import NewsletterSection from "@/components/enquiry/newsletter-section"
import Navbar from "@/components/navbar"
import TopBar from "@/components/top-bar"
import Footer from "@/components/footer"

export default function EnquiryPage() {
  return (
    <main className="w-full overflow-hidden">
      <TopBar />
      <Navbar />
      <EnquiryHeroSection />
      <EnquiryContactSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
