"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

export default function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isFeaturedVideoPlaying, setIsFeaturedVideoPlaying] = useState(false)

  const reels = [
    { id: 1, title: "Makeup Reel 1", videoUrl: "/Reel 1.mp4" },
    { id: 2, title: "Makeup Reel 2", videoUrl: "/Reel 2.mp4" },
    { id: 3, title: "Makeup Reel 3", videoUrl: "/Reel 3.mp4" },
    { id: 4, title: "Makeup Reel 4", videoUrl: "/Reel 4.mp4" },
    { id: 5, title: "Makeup Reel 5", videoUrl: "/Reel 5.mp4" },
    { id: 6, title: "Makeup Reel 6", videoUrl: "/Reel 6.mp4" },
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
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-20">
          <div className="order-2 md:order-1">
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={openVideoModal}
            >
              <img
                src="/thumb.jpg"
                alt="Watch our story"
                className="w-full h-auto object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                <div className="bg-white/95 rounded-full p-6 group-hover:scale-110 transition-transform shadow-2xl">
                  <Play className="w-12 h-12 md:w-16 md:h-16 text-primary fill-primary" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 text-balance">
              Who We Are?
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
              At Keywest Academy, we empower individuals to master makeup artistry with expert instructors and professional training that transforms passion into thriving careers.
            </p>

            {/* Key Features - Larger Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">✨</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">Expert Instructors</h4>
                  <p className="text-sm text-foreground/60">Industry professionals with years of experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🎨</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">Hands-On Training</h4>
                  <p className="text-sm text-foreground/60">Practical skills you can apply immediately</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🏆</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">Certification</h4>
                  <p className="text-sm text-foreground/60">Recognized credentials upon completion</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">💼</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">Career Support</h4>
                  <p className="text-sm text-foreground/60">Guidance to launch your makeup career</p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-3 md:p-4 border-2 border-primary/20">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                  3+
                </div>
                <p className="text-xs md:text-sm text-foreground/70 font-medium">Years Running</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-3 md:p-4 border-2 border-primary/20">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                  1000+
                </div>
                <p className="text-xs md:text-sm text-foreground/70 font-medium">Students Trained</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-3 md:p-4 border-2 border-primary/20">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                  100+
                </div>
                <p className="text-xs md:text-sm text-foreground/70 font-medium">Job Placements</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-3 md:p-4 border-2 border-primary/20">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                  80%
                </div>
                <p className="text-xs md:text-sm text-foreground/70 font-medium">Successfully Working</p>
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

        {/* Reels Carousel Section - Single Row */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 text-center text-balance">
            Our Makeup Reels
          </h3>
          <p className="text-center text-foreground/60 mb-12 text-base md:text-lg">
            Watch our latest makeup tutorials and tips
          </p>

          <div>
            {/* Reels Container */}
            <div className="overflow-hidden px-2">
              <div className="flex gap-3 md:gap-4 justify-center">
                {reels.map((reel) => (
                  <div
                    key={reel.id}
                    className="flex-shrink-0 w-[calc(100%/3-0.67rem)] md:w-[calc(100%/6-0.67rem)]"
                    style={{ aspectRatio: "9/16" }}
                  >
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
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
