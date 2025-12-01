"use client"

export default function CollabsSection() {
  // Row 1 logos (left to right)
  const row1Logos = [
    "/l1.jpg",
    "/l2.jpg",
    "/praush.avif",
    "/V (1).jpg",
    "/l5.png",
    "/burberry.jpeg",
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
    "/l15.jpg",
    "/l16.webp",
    "/l17.png",
    "/l18.png",
    "/l19.png",
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem]">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Brand Associations</span>
          </h2>
        </div>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-left">
          {/* First set */}
          {row1Logos.map((logo, index) => (
            <div
              key={`row1-first-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 border-2 border-primary/20 hover:border-primary hover:scale-105"
            >
              <img
                src={logo}
                alt={`Collaboration ${index + 1}`}
                className={`w-full h-full transition-all duration-300 ${
                  logo === "/l5.png" ? "object-cover p-2" : "object-contain p-4"
                }`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {row1Logos.map((logo, index) => (
            <div
              key={`row1-second-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 border-2 border-primary/20 hover:border-primary hover:scale-105"
            >
              <img
                src={logo}
                alt={`Collaboration ${index + 1}`}
                className={`w-full h-full transition-all duration-300 ${
                  logo === "/l5.png" ? "object-cover p-2" : "object-contain p-4"
                }`}
              />
            </div>
          ))}
          {/* Third set for extra smoothness */}
          {row1Logos.map((logo, index) => (
            <div
              key={`row1-third-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 border-2 border-primary/20 hover:border-primary hover:scale-105"
            >
              <img
                src={logo}
                alt={`Collaboration ${index + 1}`}
                className={`w-full h-full transition-all duration-300 ${
                  logo === "/l5.png" ? "object-cover p-2" : "object-contain p-4"
                }`}
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
              className="flex-shrink-0 mx-6 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 border-2 border-primary/20 hover:border-primary hover:scale-105"
            >
              <img
                src={logo}
                alt={`Collaboration ${index + 11}`}
                className={`w-full h-full transition-all duration-300 ${
                  logo === "/l15.jpg" ? "object-cover p-2" : "object-contain p-4"
                }`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {row2Logos.map((logo, index) => (
            <div
              key={`row2-second-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 border-2 border-primary/20 hover:border-primary hover:scale-105"
            >
              <img
                src={logo}
                alt={`Collaboration ${index + 11}`}
                className={`w-full h-full transition-all duration-300 ${
                  logo === "/l15.jpg" ? "object-cover p-2" : "object-contain p-4"
                }`}
              />
            </div>
          ))}
          {/* Third set for extra smoothness */}
          {row2Logos.map((logo, index) => (
            <div
              key={`row2-third-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 border-2 border-primary/20 hover:border-primary hover:scale-105"
            >
              <img
                src={logo}
                alt={`Collaboration ${index + 11}`}
                className={`w-full h-full transition-all duration-300 ${
                  logo === "/l15.jpg" ? "object-cover p-2" : "object-contain p-4"
                }`}
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
