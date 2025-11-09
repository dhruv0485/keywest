import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/lib/auth-context"
import { CartProvider } from "@/lib/cart-context"
import { WishlistProvider } from "@/lib/wishlist-context"
import "./globals.css"

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "Makeup Academy - Professional Makeup Courses",
  description:
    "Learn professional makeup skills from expert instructors. Master makeup artistry and transform your passion into a career.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${poppins.variable} font-poppins antialiased`}>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </CartProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
