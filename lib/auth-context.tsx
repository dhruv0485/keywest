"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  name: string
  email: string
  contact: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => void
  register: (name: string, email: string, contact: string, password: string) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (email: string, password: string) => {
    // Mock login - in production, call your API
    const mockUser: User = {
      id: "1",
      name: "Sarah Johnson",
      email: email,
      contact: "+1 (555) 123-4567",
      avatar: "https://i.pravatar.cc/150?img=1",
    }
    setUser(mockUser)
    localStorage.setItem("user", JSON.stringify(mockUser))
    router.push("/courses")
  }

  const register = (name: string, email: string, contact: string, password: string) => {
    // Mock registration - in production, call your API
    const mockUser: User = {
      id: "1",
      name: name,
      email: email,
      contact: contact,
      avatar: "https://i.pravatar.cc/150?img=1",
    }
    setUser(mockUser)
    localStorage.setItem("user", JSON.stringify(mockUser))
    router.push("/courses")
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
