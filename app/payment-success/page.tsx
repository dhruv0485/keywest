"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle2, Download, Mail, Home } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function PaymentSuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    // Clear cart after successful payment
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-pink-50/20 to-white px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-primary/10 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/30 animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Payment Successful! 🎉
          </h1>
          <p className="text-foreground/70 text-lg mb-8">
            Thank you for your purchase. Your courses are now available in your account.
          </p>

          {/* Order Details */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Email Confirmation</p>
                  <p className="text-sm text-foreground/60">
                    You'll receive a confirmation email with your invoice and course access details
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Instant Access</p>
                  <p className="text-sm text-foreground/60">
                    Your courses are now available in your account. Start learning immediately!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Download className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Download Invoice</p>
                  <p className="text-sm text-foreground/60">
                    Access your invoice anytime from your account's order history
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/account"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
            >
              View My Courses
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>

          {/* Support */}
          <p className="text-sm text-foreground/60 mt-8">
            Need help?{" "}
            <Link href="/enquiry" className="text-primary hover:text-accent font-medium">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
