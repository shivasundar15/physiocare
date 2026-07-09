'use client'

import { Phone, MessageCircle } from 'lucide-react'

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-6 z-20 hidden md:flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/441234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute right-20 bg-primary text-primary-foreground text-xs rounded-lg px-3 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp
        </span>
      </a>

      {/* Phone Button */}
      <a
        href="tel:+441234567890"
        className="w-14 h-14 rounded-full bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
        title="Call us"
      >
        <Phone size={24} />
        <span className="absolute right-20 bg-primary text-primary-foreground text-xs rounded-lg px-3 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Call Us
        </span>
      </a>
    </div>
  )
}
