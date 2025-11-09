import { Instagram, Facebook, Youtube } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-primary/20 via-accent/15 to-secondary/20 border-b border-primary/30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Social Icons - Left */}
        <div className="flex items-center gap-3 order-2 sm:order-1">
          <a href="#" className="text-primary hover:text-accent transition-all hover:scale-110" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#" className="text-primary hover:text-accent transition-all hover:scale-110" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-primary hover:text-accent transition-all hover:scale-110" aria-label="YouTube">
            <Youtube size={18} />
          </a>
        </div>

        {/* Announcement - Center */}
        <p className="text-sm md:text-base text-foreground/80 text-center order-1 sm:order-2 w-full sm:w-auto font-medium">
          ✨ Enjoy up to 50% off on all makeup courses!
        </p>

        {/* Enquiry Button - Right */}
        <button className="bg-gradient-to-r from-primary to-accent text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-primary/40 transition-all text-sm font-medium order-3 whitespace-nowrap hover:scale-105">
          Enquiry Now
        </button>
      </div>
    </div>
  )
}
