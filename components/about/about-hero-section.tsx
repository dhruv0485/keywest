export default function AboutHeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/a1.jpg"
          alt="Keywest Academy"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content - Bottom Center */}
      <div className="relative z-10 h-full flex items-end justify-center px-4 pb-12 md:pb-16 lg:pb-20">
        <div className="text-center max-w-4xl w-full">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-serif font-bold text-white drop-shadow-2xl leading-tight mx-auto">
            Empowering Beauty Professionals
          </h1>
        </div>
      </div>
    </section>
  )
}
