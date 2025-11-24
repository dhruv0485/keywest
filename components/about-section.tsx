"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

export default function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isFeaturedVideoPlaying, setIsFeaturedVideoPlaying] = useState(false)

  const reels = [
    { id: 1, title: "Makeup Reel 1", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664561/Reel_1_imuf9t.mp4" },
    { id: 2, title: "Makeup Reel 2", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664562/Reel_2_dwunpz.mp4" },
    { id: 3, title: "Makeup Reel 3", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664563/Reel_3_ripkft.mp4" },
    { id: 4, title: "Makeup Reel 4", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664561/Reel_4_oayfwb.mp4" },
    { id: 5, title: "Makeup Reel 5", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664561/Reel_5_h7hnyh.mp4" },
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 text-balance leading-tight min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem]">
              Who We Are?
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
              A founder-led academy by Neha Chhabra, Keywest Academy is dedicated to transforming passion into a professional and world-class career. With a vision to build a space that celebrates makeup as a craft, we are a center for confidence boosters for empowering women and a powerful tool for financial independence.
            </p>

            {/* Key Features - Larger Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">Industry-experienced Trainers</h4>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">Practical Training Spaces</h4>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">Internship and Career Support</h4>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">International Certification</h4>
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
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 text-center text-balance leading-tight min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[4rem]">
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
