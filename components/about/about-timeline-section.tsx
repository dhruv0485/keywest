export default function AboutTimelineSection() {
  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "Founded with a vision to revolutionize makeup education. Started with 50 students and 3 expert instructors in a small studio.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      side: "left",
    },
    {
      year: "2021",
      title: "Rapid Growth",
      description:
        "Expanded to 500+ students and launched our online courses. Received our first international accreditation for excellence in beauty education.",
      image: "https://images.unsplash.com/photo--1524178232363-1fb2b075b655?w=800&q=80",
      side: "right",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description:
        "Won the Beauty Excellence Award. Opened two new campuses and partnered with leading makeup brands for hands-on training.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      side: "left",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description:
        "Reached 2,000+ students worldwide. Launched advanced certification programs and established partnerships with top beauty schools globally.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      side: "right",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white via-pink-50/20 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Our Journey
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
            From humble beginnings to industry leaders
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Visible on all screens */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 z-0" />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="relative"
              >
                {/* Center Dot - Visible on all screens */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-primary to-accent rounded-full border-2 md:border-4 border-white shadow-lg z-10" />

                {/* Card Container - Alternating Left/Right on all screens */}
                <div className={`flex ${item.side === "left" ? "justify-start pr-[52%] md:pr-[52%] lg:pr-[52%]" : "justify-end pl-[52%] md:pl-[52%] lg:pl-[52%]"}`}>
                  <div
                    className="w-full"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 200}ms both`,
                    }}
                  >
                    {/* Blackish Card */}
                    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02] group">
                      {/* Image on Top */}
                      <div className="relative h-32 sm:h-40 md:h-56 lg:h-64 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Year Badge on Image */}
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-gradient-to-r from-primary to-accent text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-bold px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full shadow-xl">
                          {item.year}
                        </div>
                      </div>

                      {/* Content Below */}
                      <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                        <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-serif font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                          {item.description}
                        </p>

                        {/* Decorative Line */}
                        <div className="mt-3 sm:mt-4 md:mt-6 h-0.5 md:h-1 w-16 md:w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
