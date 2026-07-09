import Link from 'next/link'
import { ServiceCard } from '@/components/service-card'
import { Button } from '@/components/ui/button'
import { Stethoscope, Dumbbell, Lightbulb, Gauge } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation to understand your condition, pain patterns, and treatment goals.',
    },
    {
      icon: Dumbbell,
      title: 'Rehabilitation Therapy',
      description: 'Targeted exercises and techniques to restore mobility, strength, and function.',
    },
    {
      icon: Lightbulb,
      title: 'Education & Prevention',
      description: 'Learn about your condition and receive guidance to prevent future injuries.',
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Enhance your physical performance and prevent sports-related injuries.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Physiotherapy Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From assessment to recovery, we provide complete care tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} href="/services" />
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
