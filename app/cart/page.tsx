"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import TopBar from "@/components/top-bar"
import Footer from "@/components/footer"
import { useCart } from "@/lib/cart-context"
import { Trash2, ShieldCheck, Mail, CreditCard } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { cart, removeFromCart } = useCart()
  const [promoCode, setPromoCode] = useState("")

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + parseFloat(item.price.replace("$", "")), 0)
  const tax = subtotal * 0.1 // 10% tax
  const discount = 0 // Apply promo code discount here
  const total = subtotal + tax - discount

  const handleCheckout = () => {
    // In production, integrate with Razorpay API
    // For now, simulate payment and redirect to success page
    setTimeout(() => {
      window.location.href = "/payment-success"
    }, 1000)
  }

  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-white via-pink-50/20 to-white">
      <TopBar />
      <Navbar />

      <section className="py-12 md:py-16 lg:py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Shopping Cart
            </h1>
            <p className="text-foreground/60">{cart.length} course(s) in your cart</p>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/30">
                <span className="text-5xl">🛒</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Your cart is empty</h3>
              <p className="text-foreground/60 mb-6">Add some courses to get started!</p>
              <Link
                href="/courses"
                className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
              >
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Course Image */}
                      <Link href={`/courses/${item.id}`} className="sm:w-40 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-32 object-cover rounded-xl hover:scale-105 transition-transform"
                        />
                      </Link>

                      {/* Course Details */}
                      <div className="flex-1">
                        <Link
                          href={`/courses/${item.id}`}
                          className="text-xl font-serif font-bold text-foreground hover:text-primary transition-colors block mb-2"
                        >
                          {item.title}
                        </Link>
                        <div className="flex flex-wrap gap-3 text-sm text-foreground/60 mb-4">
                          <span>{item.duration}</span>
                          <span>•</span>
                          <span>{item.level}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {item.price}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-full transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span className="text-sm font-medium">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 sticky top-24">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-6">Order Summary</h3>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Promo Code</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className="flex-1 px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                      <button className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium hover:shadow-lg transition-all">
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex justify-between text-foreground/70">
                      <span>Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-foreground/70">
                      <span>Tax (10%)</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span className="font-medium">-${discount.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-[1.02] mb-4"
                  >
                    Proceed to Checkout
                  </button>

                  {/* Security Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-foreground/70 bg-green-50 p-3 rounded-xl">
                      <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Secure Payment through Razorpay</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground/70 bg-blue-50 p-3 rounded-xl">
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Invoice will be sent to your email</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground/70 bg-purple-50 p-3 rounded-xl">
                      <CreditCard className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span>Multiple payment options available</span>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs text-foreground/60 text-center mb-3">We accept</p>
                    <div className="flex justify-center gap-3 flex-wrap">
                      <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                        <span className="text-xs font-medium text-foreground/70">Visa</span>
                      </div>
                      <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                        <span className="text-xs font-medium text-foreground/70">Mastercard</span>
                      </div>
                      <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                        <span className="text-xs font-medium text-foreground/70">UPI</span>
                      </div>
                      <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                        <span className="text-xs font-medium text-foreground/70">Net Banking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
