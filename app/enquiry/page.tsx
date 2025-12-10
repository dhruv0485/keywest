"use client"

import EnquiryHeroSection from "@/components/enquiry/enquiry-hero-section"
import EnquiryContactSection from "@/components/enquiry/enquiry-contact-section"
import FAQSection from "@/components/enquiry/faq-section"
import NewsletterSection from "@/components/enquiry/newsletter-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EnquiryPage() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <EnquiryContactSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
