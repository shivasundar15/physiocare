'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show sticky CTA after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-30 hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-card rounded-lg shadow-xl border border-border p-4 max-w-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1 flex-1">
                <p className="font-semibold text-foreground">Ready to start your recovery?</p>
                <p className="text-sm text-foreground/70">Book your first appointment today</p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-foreground/50 hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <Link href="/book" className="block mt-3">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
