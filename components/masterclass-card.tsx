"use client"

import Link from "next/link"

export default function MasterclassCard() {
  const masterclass = {
    id: 7,
    title: "STAR 2026 Course - Masterclass",
    subtitle: "LIMITED TIME COURSE",
    duration: "60 DAYS",
    price: "FLAT 50,000",
    description: "Intensive masterclass covering comprehensive makeup and hair artistry.",
    image: "/masterclass_800.png",
    sections: [
      {
        title: "THEORY",
        items: [
          "Rules & Regulations",
          "Self Grooming",
          "Safety & Hygiene",
          "Colour Theory",
          "Shades & Undertones",
          "Product Knowledge",
          "Brush Knowledge",
          "Skin Analysis, Types & Conditions",
          "Colour Mixing & Foundation Making Activity",
          "Face Chart",
        ],
      },
      {
        title: "TECHNICAL MAKEUP CLASSES",
        items: [
          "Corrective Eye Makeup + Sheer Coverage",
          "Smokey Eye Makeup + Medium Coverage",
          "Halo Eye Makeup + Full Coverage",
        ],
      },
      {
        title: "FULL LOOKS",
        items: [
          "Self Makeup Techniques",
          "Corporate Makeup Look",
          "High Fashion / Runway Ready Looks",
          "Timeless Bridal Makeup Look",
          "Graphic Liner Looks",
          "Party Makeup Look",
        ],
      },
      {
        title: "ADDITIONAL TOPICS",
        items: [
          "Personality Development",
          "Marketing Class",
          "Confidence Building",
          "Profile Building",
        ],
      },
      {
        title: "HAIR",
        items: [
          "Tools Knowledge",
          "Client Handling",
          "Hair Analysis",
          "Basic Self Hair Styling (Straightening, Basic Curl)",
          "Twisted Bun / S Bun",
          "Half Tie Braid",
          "Bubble Braid",
          "Sleek Hair with Long Braid (with Lace)",
          "Different Braids",
          "Elegance Placement (Accessories)",
          "Hollywood Hair Dryer",
          "Back Combing Technique",
          "Volume Building Puff",
          "Extension Placement",
        ],
      },
    ],
  }

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {masterclass.title}
          </h1>
          <div className="bg-red-600 text-black font-bold py-2 px-4 inline-block mb-4">
            {masterclass.subtitle}
          </div>
          <div className="text-white text-xl font-semibold mb-2">{masterclass.duration}</div>
          <div className="text-primary text-2xl font-bold mb-4">{masterclass.price}</div>
        </div>

        {/* Image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <img
            src={masterclass.image}
            alt={masterclass.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Sections */}
        <div className="space-y-6 mb-8">
          {masterclass.sections.map((section, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-6 border border-primary/30">
              <h2 className="text-2xl font-bold text-primary mb-4 bg-yellow-400 text-black py-2 px-4 inline-block">
                {section.title}
              </h2>
              <ul className="space-y-2 mt-4">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-white flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-8">
          <Link href={`/courses/${masterclass.id}`}>
            <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105">
              View Full Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
