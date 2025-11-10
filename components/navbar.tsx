"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Student Portfolio", href: "/portfolio" },
    { name: "Facilities/Infrastructure", href: "/facilities" },
    { name: "Call to Enquire", href: "/enquiry" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5 sticky top-0 z-40 border-b border-primary/10">
      <div className="w-full px-0 py-2">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation - Left Side */}
          <div className="flex items-center gap-6 md:gap-12 pl-0">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 pl-4">
              <img
                src="/logo.png"
                alt="Makeup Academy Logo"
                className="w-20 h-20"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/70 hover:text-primary font-sans font-medium text-base transition-all hover:scale-105 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary flex-shrink-0 pr-4" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-primary/20 pt-4 pl-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-foreground/70 hover:text-primary font-sans font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
