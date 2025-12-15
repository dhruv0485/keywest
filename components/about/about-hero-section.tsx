export default function AboutHeroSection() {
  return (
    <section className="w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[1500/586] overflow-hidden relative mt-0">
      {/* Background Image */}
      <img
        src="/B3.png"
        alt="Keywest Academy"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
    </section>
  )
}
