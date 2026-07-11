import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Share2, Heart, Users } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground pb-24 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/favicon.png"
                alt="Prolific Rehab Center logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover bg-white transition-transform duration-300 hover:scale-110"
              />
              <h3 className="font-bold text-lg">Prolific Rehab Center</h3>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Professional physiotherapy care with personalized treatment plans for your recovery.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" className="text-primary-foreground/80 hover:text-accent transition-colors" title="Facebook">
                <Share2 size={20} />
              </a>
              <a href="https://instagram.com" className="text-primary-foreground/80 hover:text-accent transition-colors" title="Instagram">
                <Heart size={20} />
              </a>
              <a href="https://linkedin.com" className="text-primary-foreground/80 hover:text-accent transition-colors" title="LinkedIn">
                <Users size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-accent transition-colors">
                  Conditions Treated
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+447729482216" className="text-primary-foreground/90 hover:text-accent transition-colors">
                  +44 7729 482216
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:Prolificrehabcenter@gmail.com" className="text-primary-foreground/90 hover:text-accent transition-colors">
                  Prolificrehabcenter@gmail.com
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>4/39/0-1, Saint Thomas Mount 3rd Lane,<br />Saint Patrick&apos;s Church Road,<br />Chennai, India</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80 text-center md:text-left">
            <p>&copy; {currentYear} Prolific Rehab Center. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              <Link href="#" className="text-primary-foreground/90 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-primary-foreground/90 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
