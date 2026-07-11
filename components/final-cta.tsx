import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-14 md:py-24 bg-gradient-to-r from-secondary to-secondary/80 text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
          Ready to Begin Your Recovery?
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/90 mb-7 md:mb-8 max-w-2xl mx-auto">
          Don&apos;t let pain hold you back. Book your consultation today and take the first step toward feeling better.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center">
          <Link href="/book">
            <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-base h-11 md:h-12 px-6 md:px-8">
              Book Your Appointment
            </Button>
          </Link>
          <a href="tel:+447729482216">
            <Button variant="outline" className="w-full sm:w-auto border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground text-base h-11 md:h-12 px-6 md:px-8">
              <Phone size={18} className="mr-2" />
              Call Now
            </Button>
          </a>
        </div>

        <p className="text-sm text-primary-foreground/80 mt-5 md:mt-6">
          Same-day appointments may be available. Call us to discuss your needs.
        </p>
      </div>
    </section>
  )
}
