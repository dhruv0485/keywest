"use client"

export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Founder & CEO",
      quote:
        "My vision was to create a space where passion meets profession. Every student's success story is a testament to our commitment to excellence.",
      imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      thumbnailSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    },
  ]

  const activeTeamMember = team[0]

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Meet Our Founder
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Industry experts dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Main Image */}
          <div className="relative h-80 min-h-[400px] md:min-h-[500px]">
            <img
              src={activeTeamMember.imageSrc || "/placeholder.svg"}
              alt={activeTeamMember.name}
              className="w-full h-full object-cover rounded-lg border border-gray-700"
            />
          </div>

          {/* Right Column: Text */}
          <div className="flex flex-col justify-center md:pl-8">
            <div className="relative">
              <p className="text-sm font-medium text-primary">{activeTeamMember.role}</p>
              <h3 className="text-3xl md:text-4xl font-bold mt-2 text-white font-serif">
                {activeTeamMember.name}
              </h3>
              <blockquote className="mt-6 text-base md:text-lg font-normal leading-relaxed text-gray-300">
                "{activeTeamMember.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
