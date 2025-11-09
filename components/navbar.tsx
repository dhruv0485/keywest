"use client"

import { useState } from "react"
import { Menu, X, User, ShoppingCart } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated } = useAuth()
  const { cartCount } = useCart()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Call to Enquire", href: "/enquiry" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5 sticky top-0 z-40 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-white font-serif font-bold text-lg">✨</span>
            </div>
            <span className="font-serif font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:inline">
              Makeup Academy
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-primary font-medium text-sm transition-all hover:scale-105"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link
                  href="/cart"
                  className="relative p-2 rounded-full hover:bg-pink-50 transition-all"
                  aria-label="Cart"
                >
                  <ShoppingCart className="w-6 h-6 text-primary" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <Link
                  href="/account"
                  className="p-2 rounded-full hover:bg-pink-50 transition-all"
                  aria-label="Profile"
                >
                  <User className="w-6 h-6 text-primary" />
                </Link>
              </>
            ) : (
              <a
                href="/login"
                className="border-2 border-primary text-primary px-5 py-2 rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:border-transparent transition-all text-sm font-medium hover:shadow-lg hover:shadow-primary/30"
              >
                Login
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-primary/20 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-foreground/70 hover:text-primary font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            {isAuthenticated ? (
              <div className="flex gap-3 mt-4">
                <Link
                  href="/cart"
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:border-transparent transition-all text-sm font-medium"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Cart {cartCount > 0 && `(${cartCount})`}
                </Link>
                <Link
                  href="/account"
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:border-transparent transition-all text-sm font-medium"
                >
                  <User className="w-4 h-4" />
                  Profile
                </Link>
              </div>
            ) : (
              <a
                href="/login"
                className="block w-full text-center border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:border-transparent transition-all text-sm font-medium mt-4"
              >
                Login
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
