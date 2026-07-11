import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Professional Physiotherapy Care
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                Get Out of Pain. Back to Life.
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Evidence-based physiotherapy tailored to your unique needs. Whether recovering from injury, managing chronic pain, or improving sports performance, we&apos;re here to guide your journey to recovery.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-secondary flex-shrink-0" />
                <span className="text-foreground/80">Sports physiotherapy experience with Arsenal FC &amp; Watford FC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-secondary flex-shrink-0" />
                <span className="text-foreground/80">Specialist focus on sports injury &amp; rehabilitation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/book">
                <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-6">
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:+447729482216">
                <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 text-base h-12 px-6">
                  Call: +44 7729 482216
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border border-border shadow-lg">
            <Image
              src="/hero-image.png"
              alt="Professional physiotherapy clinic with therapist and patient"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Bottom Stats/Highlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-secondary">500+</p>
            <p className="text-sm text-foreground/70 mt-1">Happy Patients</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-secondary">95%</p>
            <p className="text-sm text-foreground/70 mt-1">Success Rate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-secondary">15+</p>
            <p className="text-sm text-foreground/70 mt-1">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-secondary">4.9★</p>
            <p className="text-sm text-foreground/70 mt-1">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
