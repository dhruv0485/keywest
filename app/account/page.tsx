"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import TopBar from "@/components/top-bar"
import Footer from "@/components/footer"
import { useAuth } from "@/lib/auth-context"
import { useWishlist } from "@/lib/wishlist-context"
import { useCart } from "@/lib/cart-context"
import { User, ShoppingBag, Heart, LogOut, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("orders")
  const [orderFilter, setOrderFilter] = useState("all")
  const { user, logout } = useAuth()
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()
  const router = useRouter()

  // Mock data
  const orders = [
    {
      id: "ORD-001",
      courseId: 1,
      courseName: "Foundation Makeup Mastery",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80",
      price: "$299",
      date: "2024-01-15",
      status: "current",
      progress: 65,
      invoice: "#INV-001",
    },
    {
      id: "ORD-002",
      courseId: 2,
      courseName: "Bridal Makeup Artistry",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80",
      price: "$499",
      date: "2023-12-10",
      status: "completed",
      progress: 100,
      invoice: "#INV-002",
    },
  ]

  const handleAddToCart = (item: any) => {
    addToCart(item)
    removeFromWishlist(item.id)
    router.push("/cart")
  }

  const filteredOrders = orders.filter((order) => {
    if (orderFilter === "all") return true
    if (orderFilter === "current") return order.status === "current"
    if (orderFilter === "past") return order.status === "completed"
    return true
  })

  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-white via-pink-50/20 to-white">
      <TopBar />
      <Navbar />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              My Account
            </h1>
            <p className="text-foreground/60">Manage your courses, orders, and wishlist</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 sticky top-24">
                {/* User Info */}
                <div className="text-center mb-6 pb-6 border-b border-gray-200">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{user?.name}</h3>
                  <p className="text-sm text-foreground/60">{user?.email}</p>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === "orders"
                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                        : "text-foreground/70 hover:bg-pink-50"
                    }`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span className="font-medium">My Orders</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("wishlist")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === "wishlist"
                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                        : "text-foreground/70 hover:bg-pink-50"
                    }`}
                  >
                    <Heart className="w-5 h-5" />
                    <span className="font-medium">Wishlist</span>
                  </button>
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* My Orders Tab */}
              {activeTab === "orders" && (
                <div className="space-y-6">
                  {/* Filters */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-primary/10">
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setOrderFilter("all")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          orderFilter === "all"
                            ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                            : "bg-gray-100 text-foreground/70 hover:bg-pink-50"
                        }`}
                      >
                        All Orders
                      </button>
                      <button
                        onClick={() => setOrderFilter("current")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          orderFilter === "current"
                            ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                            : "bg-gray-100 text-foreground/70 hover:bg-pink-50"
                        }`}
                      >
                        Current
                      </button>
                      <button
                        onClick={() => setOrderFilter("past")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          orderFilter === "past"
                            ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                            : "bg-gray-100 text-foreground/70 hover:bg-pink-50"
                        }`}
                      >
                        Past Orders
                      </button>
                    </div>
                  </div>

                  {/* Orders List */}
                  <div className="space-y-4">
                    {filteredOrders.map((order) => (
                      <div
                        key={order.id}
                        className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all"
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Course Image */}
                          <Link href={`/courses/${order.courseId}`} className="md:w-48 flex-shrink-0">
                            <img
                              src={order.image}
                              alt={order.courseName}
                              className="w-full h-32 md:h-full object-cover rounded-xl hover:scale-105 transition-transform"
                            />
                          </Link>

                          {/* Order Details */}
                          <div className="flex-1 space-y-4">
                            <div>
                              <Link
                                href={`/courses/${order.courseId}`}
                                className="text-xl font-serif font-bold text-foreground hover:text-primary transition-colors"
                              >
                                {order.courseName}
                              </Link>
                              <div className="flex flex-wrap gap-4 mt-2 text-sm text-foreground/60">
                                <span>Order ID: {order.id}</span>
                                <span>•</span>
                                <span>Date: {order.date}</span>
                                <span>•</span>
                                <span className="font-semibold text-primary">{order.price}</span>
                              </div>
                            </div>

                            {/* Progress Bar */}
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-foreground/70">Course Progress</span>
                                <span className="font-semibold text-primary">{order.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                                  style={{ width: `${order.progress}%` }}
                                />
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-wrap gap-3">
                              <Link
                                href={`/courses/${order.courseId}`}
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:shadow-lg transition-all text-sm font-medium"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Continue Learning
                              </Link>
                              <button className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-full hover:bg-pink-50 transition-all text-sm font-medium">
                                <Download className="w-4 h-4" />
                                Download Invoice
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === "wishlist" && (
                <div className="space-y-4">
                  {wishlist.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-lg border-2 border-primary/10">
                      <Heart className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2">Your wishlist is empty</h3>
                      <p className="text-foreground/60 mb-6">Start adding courses you love!</p>
                      <Link
                        href="/courses"
                        className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                      >
                        Browse Courses
                      </Link>
                    </div>
                  ) : (
                    wishlist.map((course) => {
                      const weekCount = parseInt(course.duration.split(" ")[0]) || 4
                      return (
                        <div
                          key={course.id}
                          className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all"
                        >
                          <div className="flex flex-col md:flex-row gap-6">
                            {/* Course Image */}
                            <Link href={`/courses/${course.id}`} className="md:w-48 flex-shrink-0">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-32 md:h-full object-cover rounded-xl hover:scale-105 transition-transform"
                              />
                            </Link>

                            {/* Course Details */}
                            <div className="flex-1 space-y-4">
                              <div>
                                <Link
                                  href={`/courses/${course.id}`}
                                  className="text-xl font-serif font-bold text-foreground hover:text-primary transition-colors"
                                >
                                  {course.title}
                                </Link>
                                <div className="flex flex-wrap gap-4 mt-2 text-sm text-foreground/60">
                                  <span>{course.duration}</span>
                                  <span>•</span>
                                  <span>{course.level}</span>
                                  <span>•</span>
                                  <span className="font-semibold text-primary text-lg">{course.price}</span>
                                </div>
                              </div>

                              {/* Week Progress */}
                              <div>
                                <p className="text-sm text-foreground/70 mb-2">Course Timeline</p>
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                  {Array.from({ length: weekCount }, (_, i) => (
                                    <div
                                      key={i}
                                      className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-gray-200 text-foreground/60"
                                    >
                                      Week {i + 1}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Actions */}
                              <div className="flex flex-wrap gap-3">
                                <button
                                  onClick={() => handleAddToCart(course)}
                                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:shadow-lg transition-all text-sm font-medium"
                                >
                                  Add to Cart
                                </button>
                                <Link
                                  href={`/courses/${course.id}`}
                                  className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-full hover:bg-pink-50 transition-all text-sm font-medium"
                                >
                                  View Details
                                </Link>
                                <button
                                  onClick={() => removeFromWishlist(course.id)}
                                  className="flex items-center gap-2 px-4 py-2 border-2 border-red-300 text-red-600 rounded-full hover:bg-red-50 transition-all text-sm font-medium"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
