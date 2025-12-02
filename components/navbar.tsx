"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "COURSES", href: "/courses" },
    { name: "STUDENT PORTFOLIO", href: "/portfolio" },
    { name: "FACILITIES/INFRASTRUCTURE", href: "/facilities" },
    { name: "CALL TO ENQUIRE", href: "/enquiry" },
  ]

  return (
    <nav className="relative z-40">
      {/* Top Section - Logo on Black Background */}
      <div className="bg-black">
        <div className="flex justify-center">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Keywest Academy Logo"
              className="h-28 md:h-36 lg:h-44 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Bottom Section - Navigation on Pink Background */}
      <div className="bg-gradient-to-r from-primary to-accent">
        <div className="w-full px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-sm lg:text-base transition-all hover:scale-105 whitespace-nowrap ${
                    isActive
                      ? "text-black font-bold"
                      : "text-white hover:text-black"
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between py-3">
            <span className="text-white font-medium text-sm">MENU</span>
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-white/20 pt-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`block font-medium text-sm transition-colors py-2 ${
                      isActive
                        ? "text-black font-bold"
                        : "text-white hover:text-black"
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
