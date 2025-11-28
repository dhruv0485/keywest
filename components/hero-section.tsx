"use client"

import { useState } from "react"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section 
      className="w-full aspect-[1500/586] overflow-hidden relative group mt-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Image - Keywest Banner Black 1 */}
      <img
        src="/Keywest Banner Black 1.png"
        alt="Keywest Academy"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      
      {/* Hover Image - Keywest Banner Black 2 */}
      <img
        src="/Keywest Banner Black 2.png"
        alt="Keywest Academy"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </section>
  )
}
