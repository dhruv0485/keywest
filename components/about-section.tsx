"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

export default function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isFeaturedVideoPlaying, setIsFeaturedVideoPlaying] = useState(false)

  const reels = [
    { id: 1, title: "Makeup Reel 1", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664561/Reel_1_imuf9t.mp4" },
    { id: 3, title: "Makeup Reel 3", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664563/Reel_3_ripkft.mp4" },
    { id: 4, title: "Makeup Reel 4", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664561/Reel_4_oayfwb.mp4" },
    { id: 6, title: "Makeup Reel 6", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664561/Reel_6_suint4.mp4" },
  ]

  const openVideoModal = () => {
    setIsVideoOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoOpen(false)
  }

  const playFeaturedVideo = () => {
    setIsFeaturedVideoPlaying(true)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Main About Section - Centered Layout */}
        <div className="max-w-5xl mx-auto mb-16 md:mb-20 px-4">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              <div className="text-white">WELCOME TO</div>
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">KEYWEST ACADEMY</div>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              A founder-led academy by Neha Chhabra, we are dedicated to transforming passion into a professional and world-class career. We celebrate makeup as a craft, empowering women with confidence and promoting financial independence.
            </p>
          </div>

          {/* Statistics - Large Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-6 md:p-8 border-2 border-primary shadow-2xl shadow-primary/50 hover:scale-105 transition-all text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                4+
              </div>
              <p className="text-sm md:text-base text-white/90 font-medium">Years Running</p>
            </div>
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-6 md:p-8 border-2 border-primary shadow-2xl shadow-primary/50 hover:scale-105 transition-all text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                5000+
              </div>
              <p className="text-sm md:text-base text-white/90 font-medium">Trained</p>
            </div>
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-6 md:p-8 border-2 border-primary shadow-2xl shadow-primary/50 hover:scale-105 transition-all text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                1000+
              </div>
              <p className="text-sm md:text-base text-white/90 font-medium">Job Placements</p>
            </div>
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-6 md:p-8 border-2 border-primary shadow-2xl shadow-primary/50 hover:scale-105 transition-all text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                80%
              </div>
              <p className="text-sm md:text-base text-white/90 font-medium">Successfully Working</p>
            </div>
          </div>


        </div>

        {/* Featured Video Section */}
        <div className="mt-16 md:mt-20 mb-16 md:mb-20">
          <div className="w-full max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {!isFeaturedVideoPlaying ? (
                // Thumbnail with Play Button
                <div
                  className="relative cursor-pointer group"
                  onClick={playFeaturedVideo}
                >
                  <img
                    src="/banner.webp"
                    alt="Play video"
                    className="w-full h-auto object-cover"
                  />
                  {/* Play Button - Bottom Left */}
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                    <div className="bg-white/95 hover:bg-white rounded-full p-3 md:p-4 group-hover:scale-110 transition-all shadow-2xl">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary" />
                    </div>
                  </div>
                </div>
              ) : (
                // Cloudinary Video Player
                <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dex1t9dm2&public_id=h2_fpkk5o&profile=cld-default&fluid=true&autoplay=true"
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="Keywest Academy Featured Video"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Reels Grid Section */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center text-balance leading-tight mb-12">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">The Keywest Life</span>
          </h3>

          {/* Reels Grid Container */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-4">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="relative group"
                style={{ aspectRatio: "9/16" }}
              >
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 border-2 border-primary/20 hover:border-primary hover:scale-105">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={reel.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal Popup */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeVideoModal}
          >
            <div
              className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
                aria-label="Close video"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Video Player */}
              <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dex1t9dm2&public_id=hv_su2bd2&profile=cld-default&fluid=true"
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Keywest Academy Video"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
