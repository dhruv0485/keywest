"use client"

export default function CollabsSection() {
  // Row 1 logos (left to right)
  const row1Logos = [
    "/l1.jpg",
    "/l2.jpg",
    "/l3.png",
    "/l4.png",
    "/l5.png",
    "/l6.webp",
    "/l7.jpg",
    "/l8.png",
    "/l9.jpg",
    "/l10.jpg",
  ]

  // Row 2 logos (right to left)
  const row2Logos = [
    "/l11.png",
    "/l12.webp",
    "/l13.jpg",
    "/l14.png",
    "/l15.jpg",
    "/l16.png",
    "/l17.png",
    "/l18.png",
    "/l19.png",
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-pink-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Our Collabs 🤝
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
            Trusted by leading brands and organizations
          </p>
        </div>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-left">
          {/* First set */}
          {row1Logos.map((logo, index) => (
            <div
              key={`row1-first-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <img
                src={logo}
                alt={`Collaboration ${index + 1}`}
                className="w-full h-full object-contain p-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {row1Logos.map((logo, index) => (
            <div
              key={`row1-second-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <img
                src={logo}
                alt={`Collaboration ${index + 1}`}
                className="w-full h-full object-contain p-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          {/* Third set for extra smoothness */}
          {row1Logos.map((logo, index) => (
            <div
              key={`row1-third-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <img
                src={logo}
                alt={`Collaboration ${index + 1}`}
                className="w-full h-full object-contain p-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {/* First set */}
          {row2Logos.map((logo, index) => (
            <div
              key={`row2-first-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <img
                src={logo}
                alt={`Collaboration ${index + 11}`}
                className="w-full h-full object-contain p-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {row2Logos.map((logo, index) => (
            <div
              key={`row2-second-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <img
                src={logo}
                alt={`Collaboration ${index + 11}`}
                className="w-full h-full object-contain p-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          {/* Third set for extra smoothness */}
          {row2Logos.map((logo, index) => (
            <div
              key={`row2-third-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <img
                src={logo}
                alt={`Collaboration ${index + 11}`}
                className="w-full h-full object-contain p-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
