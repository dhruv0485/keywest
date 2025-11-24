import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden mt-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              KEYWEST ACADEMY OF BEAUTY & MAKEUP
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Empowering beauty professionals through expert training and comprehensive courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-white/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="text-white/70 hover:text-primary transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-white/70 hover:text-primary transition-colors">
                  Student Portfolio
                </a>
              </li>
              <li>
                <a href="/enquiry" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-primary">Contact Info</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2 hover:text-primary transition-colors">
                <Phone size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>9811020094, 9899116884</span>
              </div>
              <div className="flex items-start gap-2 hover:text-primary transition-colors">
                <Mail size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>info@keywestacademy.in</span>
              </div>
              <div className="flex items-start gap-2 hover:text-primary transition-colors">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>Building no. 63, 2nd floor, Lajpat Nagar 3, New Delhi - 110057</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-primary">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/70 hover:text-primary transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-primary transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-primary transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-white/60">
            <p>© 2025 KEYWEST ACADEMY OF BEAUTY & MAKEUP. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <p className="text-white/60">Monday to Saturday (10 AM - 7 PM)</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
