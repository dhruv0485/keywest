"use client"

export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: "Neha Chhabra",
      role: "Founder & CEO",
      quote:
        "Neha Chhabra is a highly sought-after professional makeup artist and the visionary founder of Keywest Academy. A certified artist from the prestigious DYF Academy in Los Angeles, Neha further sharpened her skills training under international makeup legends like Mario Dedivanovic and Michelle Palma. Her professional portfolio boasts impressive associations, including media features in Arch India Design Magazine, work with social media influencers and reporters, and collaborations with luxury brands like Burberry and DLF Emporio. Having also worked on Bollywood projects, Neha brings unparalleled international standards and industry connections directly into the Keywest Academy classroom.",
      imageSrc: "/neha.jpeg",
      thumbnailSrc: "/neha.jpeg",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 leading-tight min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem]">
            Meet Our Founder
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Visionary leader bringing international standards to India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column: Main Image */}
          <div className="relative h-[500px] min-h-[500px] md:min-h-[700px]">
            <img
              src={activeTeamMember.imageSrc}
              alt={activeTeamMember.name}
              className="w-full h-full object-cover rounded-2xl border-2 border-primary/30"
            />
          </div>

          {/* Right Column: Text */}
          <div className="flex flex-col justify-center md:pl-4">
            <div className="relative">
              <p className="text-sm md:text-base font-medium text-primary mb-2">{activeTeamMember.role}</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-6">
                {activeTeamMember.name}
              </h3>
              <div className="text-base md:text-lg font-normal leading-relaxed text-gray-300 space-y-4">
                <p>{activeTeamMember.quote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
