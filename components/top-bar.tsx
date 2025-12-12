export default function TopBar() {
  return (
    <div className="bg-black border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Instagram Icon - Left */}
          <div className="flex items-center">
            <a 
              href="https://www.instagram.com/keywestacademy.in?igsh=OGU1dGMxbW04OWpq" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white hover:text-white transition-all hover:scale-105 bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-full shadow-lg hover:shadow-primary/50"
              aria-label="Follow us on Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="text-sm font-semibold">Follow Us</span>
            </a>
          </div>

          {/* Contact Info - Center/Right */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 lg:gap-6 flex-wrap justify-center">
            {/* Phone Numbers */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <a href="tel:+919811020094" className="flex items-center gap-2 text-sm text-white font-medium hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>9811020094</span>
              </a>
              <span className="hidden sm:inline text-white/30">•</span>
              <a href="tel:+919899116884" className="flex items-center gap-2 text-sm text-white font-medium hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 sm:hidden">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>9899116884</span>
              </a>
            </div>

            {/* Email */}
            <a href="mailto:info@keywestacademy.in" className="flex items-center gap-2 text-sm text-white font-medium hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                <rect width="20" height="20" x="2" y="2" rx="2" ry="2"/>
                <path d="m2 2 10 10 10-10"/>
              </svg>
              <span className="hidden lg:inline">info@keywestacademy.in</span>
              <span className="lg:hidden">Email Us</span>
            </a>

            {/* Address */}
            <div className="flex items-center gap-2 text-sm text-white font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="hidden xl:inline">Building no. 63, 2nd floor, Lajpat Nagar 3, New Delhi - 110057</span>
              <span className="hidden lg:inline xl:hidden">Lajpat Nagar 3, New Delhi</span>
              <span className="lg:hidden">New Delhi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
