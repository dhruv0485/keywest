"use client"

import { useState } from "react"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section 
      className="w-full aspect-[16/9] overflow-hidden relative group mt-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Image - ban1 (2).jpeg */}
      <img
        src="/ban1 (2).jpeg"
        alt="Keywest Academy"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      
      {/* Hover Image - ban1 (1).jpeg */}
      <img
        src="/ban1 (1).jpeg"
        alt="Keywest Academy"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </section>
  )
}
