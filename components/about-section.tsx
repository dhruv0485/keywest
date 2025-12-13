"use client"

import { useState, useRef } from "react"
import { X } from "lucide-react"

export default function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [showThumbnail, setShowThumbnail] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const reels = [
    { id: 1, title: "Makeup Reel 1", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664561/Reel_1_imuf9t.mp4" },
    { id: 3, title: "Makeup Reel 3", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664563/Reel_3_ripkft.mp4" },
    { id: 4, title: "Makeup Reel 4", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664561/Reel_4_oayfwb.mp4" },
    { id: 6, title: "Makeup Reel 6", videoUrl: "https://res.cloudinary.com/dex1t9dm2/video/upload/v1763664561/Reel_6_suint4.mp4" },
  ]

  const closeVideoModal = () => {
    setIsVideoOpen(false)
  }

  const handleVideoHover = async () => {
    setShowThumbnail(false)
    if (videoRef.current) {
      try {
        // Start playing muted first (browsers allow this)
        videoRef.current.muted = true
        await videoRef.current.play()
        // Then unmute after playback starts
        videoRef.current.muted = false
      } catch (error) {
        console.log("Autoplay failed:", error)
      }
    }
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
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-justify">
              A founder-led academy by Neha Chhabra, we are dedicated to transforming passion into a professional and world-class career. We celebrate makeup as a craft, empowering women with confidence and promoting financial independence.
            </p>
          </div>

          {/* Statistics - Unique Hexagon Style with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
            {/* Years Running */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 md:p-8 border-2 border-primary/30 hover:border-primary shadow-xl hover:scale-105 transition-all text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  4+
                </div>
                <p className="text-sm md:text-base text-white font-medium">Years Running</p>
              </div>
            </div>

            {/* Job Placements */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 md:p-8 border-2 border-primary/30 hover:border-primary shadow-xl hover:scale-105 transition-all text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  1000+
                </div>
                <p className="text-sm md:text-base text-white font-medium">Job Placements</p>
              </div>
            </div>

            {/* Trained */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 md:p-8 border-2 border-primary/30 hover:border-primary shadow-xl hover:scale-105 transition-all text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  5000+
                </div>
                <p className="text-sm md:text-base text-white font-medium">Trained</p>
              </div>
            </div>
          </div>


        </div>

        {/* Featured Video Section */}
        <div className="mt-16 md:mt-20 mb-16 md:mb-20">
          <div className="w-full max-w-5xl mx-auto px-4">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              onMouseEnter={handleVideoHover}
              onClick={handleVideoHover}
            >
              {/* Thumbnail */}
              {showThumbnail && (
                <div className="absolute inset-0 z-10">
                  <img
                    src="/banner.webp"
                    alt="Click to play video"
                    className="w-full h-full object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />

                  {/* Play Button - Bottom Left (Mobile Only) */}
                  <div className="absolute bottom-4 left-4 md:hidden">
                    <div className="bg-white/95 hover:bg-white rounded-full p-3 shadow-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-auto object-cover bg-black"
                controls={!showThumbnail}
                playsInline
                loop
                muted
                preload="auto"
                poster="/banner.webp"
              >
                <source src="/Video 1.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
                  src="/Video 1.mov"
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
