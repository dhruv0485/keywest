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
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
              <div className="text-white">WELCOME TO</div>
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">KEYWEST ACADEMY</div>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
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

          {/* Perks Section - Horizontal Cards */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 md:p-10 border-2 border-primary/30 backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Why Choose Us</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-black/30 rounded-2xl p-5 border border-primary/20 hover:border-primary/50 hover:bg-black/50 transition-all group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/50 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="text-white text-base md:text-lg font-semibold">Industry-experienced Trainers</p>
              </div>
              <div className="flex items-center gap-4 bg-black/30 rounded-2xl p-5 border border-primary/20 hover:border-primary/50 hover:bg-black/50 transition-all group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/50 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <p className="text-white text-base md:text-lg font-semibold">Practical Training Spaces</p>
              </div>
              <div className="flex items-center gap-4 bg-black/30 rounded-2xl p-5 border border-primary/20 hover:border-primary/50 hover:bg-black/50 transition-all group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/50 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <p className="text-white text-base md:text-lg font-semibold">Internship and Career Support</p>
              </div>
              <div className="flex items-center gap-4 bg-black/30 rounded-2xl p-5 border border-primary/20 hover:border-primary/50 hover:bg-black/50 transition-all group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/50 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <p className="text-white text-base md:text-lg font-semibold">International Certification</p>
              </div>
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
