"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Lock, Eye, EyeOff, Sparkles, Home } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className="min-h-screen flex overflow-hidden bg-gradient-to-br from-white via-pink-50/30 to-white relative">
      {/* Back to Home Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all shadow-lg group"
      >
        <Home className="w-4 h-4" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-primary/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80"
          alt="Makeup artistry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-white">
          <div className="animate-fade-in-up">
            <Sparkles className="w-16 h-16 mb-6 mx-auto animate-pulse" />
            <h1 className="text-5xl font-serif font-bold mb-4 text-center">Welcome Back!</h1>
            <p className="text-xl text-center text-white/90 max-w-md">
              Continue your journey to becoming a professional makeup artist
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
            <div className="text-center">
              <div className="text-3xl font-bold">2,500+</div>
              <div className="text-sm text-white/80">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-white/80">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9</div>
              <div className="text-sm text-white/80">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md animate-fade-in-up animation-delay-300">
          {/* Logo for mobile */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/30 mx-auto mb-4">
              <span className="text-white font-serif font-bold text-2xl">✨</span>
            </div>
            <h2 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Makeup Academy
            </h2>
          </div>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Login
            </h2>
            <p className="text-foreground/60">Enter your credentials to access your account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2 animate-slide-in-right animation-delay-400">
              <label htmlFor="email" className="block text-sm font-medium text-foreground/70">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2 animate-slide-in-right animation-delay-500">
              <label htmlFor="password" className="block text-sm font-medium text-foreground/70">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-between text-sm animate-slide-in-right animation-delay-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-foreground/60">Remember me</span>
              </label>
              <Link href="#" className="text-primary hover:text-accent transition-colors font-medium">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-[1.02] animate-slide-in-right animation-delay-700"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 animate-fade-in animation-delay-800">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-foreground/60">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in animation-delay-900">
            <button className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary/50 hover:bg-pink-50/30 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary/50 hover:bg-pink-50/30 transition-all">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center mt-8 text-foreground/60 animate-fade-in animation-delay-1000">
            Haven't Registered?{" "}
            <Link href="/register" className="text-primary hover:text-accent font-semibold transition-colors">
              Create an account
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
