export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-primary/20 via-accent/15 to-secondary/20 border-b border-primary/30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Social Icons - Left */}
        <div className="flex items-center gap-3 order-2 sm:order-1">
          <a href="#" className="text-primary hover:text-accent transition-all hover:scale-110" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a href="#" className="text-primary hover:text-accent transition-all hover:scale-110" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="#" className="text-primary hover:text-accent transition-all hover:scale-110" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
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
