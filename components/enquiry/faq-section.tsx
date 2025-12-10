"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Who is the founder and primary educator at Keywest Academy?",
    answer:
      "The academy is founded and led by Neha Chhabra, a professional makeup artist certified by the DYF Academy in Los Angeles and trained under international legends like Mario Dedivanovic. She brings world-class expertise and industry connections directly to our students.",
  },
  {
    id: 2,
    question: "What makes Keywest Academy's training an 'international standard'?",
    answer:
      "Our curriculum is aligned with global luxury beauty standards, we train with premium international brands, and our most advanced courses offer International Certification by a UK board, valid in 25 countries worldwide, ensuring global recognition.",
  },
  {
    id: 3,
    question: "Where is Keywest Academy located and how accessible is it?",
    answer:
      "Keywest Academy is conveniently located in the heart of Delhi, in Lajpat Nagar. Our location is highly accessible via metro stations and public transport, ensuring a hassle-free commute for all students.",
  },
  {
    id: 4,
    question: "Do you offer placement assistance or help after the course is complete?",
    answer:
      "Yes. We provide dedicated placement assistance, internship opportunities, and continued after-care support even after you graduate, helping you with career advice and growth as you enter the industry.",
  },
  {
    id: 5,
    question: "Are the courses suitable for women looking to change careers or start fresh?",
    answer:
      "Absolutely. We empower women, including homemakers and those switching careers, by breaking down complex artistry into accessible skills, turning passion into a certified, confidence-boosting, and financially viable profession.",
  },
  {
    id: 6,
    question: "What product brands will I be trained on?",
    answer:
      "We are committed to using and collaborating with top-tier, professional-grade brands, ensuring your training is relevant to the high standards of the global beauty industry.",
  },
]

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-20 lg:py-24">
      <div className="max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Find answers to common questions about Keywest Academy, our courses, and how we can help you start your
            journey in professional makeup artistry.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-gray-700/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-start justify-between gap-4 hover:bg-gray-800/30 transition-colors"
              >
                <h3 className="text-left text-base md:text-lg font-semibold text-white leading-snug">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedId === item.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-5 md:pb-6 border-t border-gray-700/50">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <p className="text-gray-300 text-base md:text-lg mb-6">
            Didn't find your answer? We're here to help!
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-[1.02]"
          >
            <span>Contact Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
