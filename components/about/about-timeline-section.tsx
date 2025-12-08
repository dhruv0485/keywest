export default function AboutTimelineSection() {
  const timeline = [
    {
      year: "2020",
      title: "The Foundation",
      description:
        "Started with a simple, powerful promise to deliver precise techniques and personal mentorship in every class, building a strong community centered on excellence rather than shortcuts.",
      image: "/j1.JPG",
    },
    {
      year: "2021",
      title: "Rapid Growth",
      description:
        "Focussed on shaping industry-ready artists. Students gain clarity, skill, and the confidence to execute with luxury, precision, and professionalism, allowing them to truly stand out.",
      image: "/j2.jpg",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description:
        "We elevated our offering to meet global luxury beauty standards. With a premium learning environment with high‑end tools, curated lighting, premium product kits, and modern classrooms, we were recognised by industry stalwarts who affirm our commitment to excellence.",
      image: "/j3.JPG",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description:
        "We expanded across borders, being part of global shows, working with international clients, and hosting masterclasses beyond borders, all of which showcase our vision on the world stage. Our commitment is to continuously offer world‑class techniques and mentor with precision, empowering every artist to master their craft and own their success.",
      image: "/global.jpeg",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Journey</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            From humble beginnings to industry leaders
          </p>
        </div>

        {/* Desktop Timeline - Horizontal Flow */}
        <div className="hidden lg:block relative">
          {/* Horizontal Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

          {/* Timeline Items */}
          <div className="grid grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative">
                {/* Connector Dot */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-black shadow-xl z-10" />

                {/* Card Below Line */}
                <div className="mt-16">
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 group">
                    <div className="relative h-64 xl:h-72 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl xl:text-2xl font-serif font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm xl:text-base leading-relaxed line-clamp-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline - Vertical Flow */}
        <div className="lg:hidden relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative pl-16 md:pl-20">
                {/* Connector Dot */}
                <div className="absolute left-8 md:left-12 top-6 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-primary to-accent rounded-full border-3 border-black shadow-xl z-10" />

                {/* Card */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 group">
                  <div className="relative h-52 md:h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
