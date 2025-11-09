import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-pink-50/20 to-white px-4">
      <div className="text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/30">
          <span className="text-5xl">😔</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Course Not Found
        </h1>
        <p className="text-foreground/70 text-lg mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the course you're looking for. It may have been removed or doesn't exist.
        </p>
        <Link
          href="/courses"
          className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
        >
          Browse All Courses
        </Link>
      </div>
    </div>
  )
}
