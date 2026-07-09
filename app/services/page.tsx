import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Stethoscope, Dumbbell, Lightbulb, Gauge, Users, Zap } from 'lucide-react'

export const metadata = {
  title: 'Physiotherapy Services | Comprehensive Care',
  description: 'Explore our range of professional physiotherapy services including rehabilitation, sports injury treatment, and performance enhancement.',
}

export default function Page() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation to understand your condition, medical history, pain patterns, and treatment goals. We take time to listen and develop a personalized approach.',
    },
    {
      icon: Dumbbell,
      title: 'Rehabilitation Therapy',
      description: 'Targeted exercises, manual therapy, and techniques to restore mobility, strength, and function. Progressive treatment adapted to your recovery pace.',
    },
    {
      icon: Lightbulb,
      title: 'Education & Prevention',
      description: 'Learn about your condition, correct movement patterns, and receive guidance to prevent future injuries and maintain long-term health.',
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Enhance your athletic performance, improve mobility, and prevent injury through specialized training and conditioning programs.',
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join our specialized group sessions for injury prevention, post-recovery fitness, and wellness. Supportive environment with professional guidance.',
    },
    {
      icon: Zap,
      title: 'Emergency Care',
      description: 'Same-day appointments available for acute injuries. Rapid assessment and initial treatment to get you back on your feet quickly.',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">Our Services</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Comprehensive Physiotherapy Services
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                From initial assessment to ongoing maintenance, we offer complete physiotherapy care tailored to your individual needs and goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} href={`#service-${idx}`} />
              ))}
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Detailed Service Information</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: 'Initial Consultation',
                  description: 'Your first visit is crucial. We conduct a thorough assessment lasting 45-60 minutes, including:',
                  details: [
                    'Detailed medical and pain history',
                    'Physical examination and movement assessment',
                    'Diagnostic imaging review (if applicable)',
                    'Discussion of treatment options and goals',
                    'Personalized treatment plan development',
                  ],
                },
                {
                  title: 'Treatment Sessions',
                  description: 'Follow-up sessions (30-45 minutes) typically include:',
                  details: [
                    'Progress monitoring and reassessment',
                    'Manual therapy techniques',
                    'Therapeutic exercises and stretching',
                    'Education and lifestyle advice',
                    'Regular plan adjustment based on progress',
                  ],
                },
                {
                  title: 'Home Exercise Programs',
                  description: 'An essential part of your recovery, we provide:',
                  details: [
                    'Customized exercise routines',
                    'Detailed instructions with demonstrations',
                    'Written guides and videos',
                    'Progress tracking guidance',
                    'Regular updates as you advance',
                  ],
                },
              ].map((section, idx) => (
                <div key={idx} className="bg-white border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{section.title}</h3>
                  <p className="text-foreground/70 mb-4">{section.description}</p>
                  <ul className="space-y-2">
                    {section.details.map((detail, didx) => (
                      <li key={didx} className="flex gap-3">
                        <span className="text-secondary font-bold">✓</span>
                        <span className="text-foreground/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Service Pricing</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Initial Consultation</h3>
                <p className="text-3xl font-bold text-secondary mb-2">£65</p>
                <p className="text-sm text-foreground/70 mb-4">45-60 minute comprehensive assessment</p>
                <Link href="/book">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Book Now
                  </Button>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Follow-up Session</h3>
                <p className="text-3xl font-bold text-secondary mb-2">£45</p>
                <p className="text-sm text-foreground/70 mb-4">30-45 minute treatment session</p>
                <Link href="/book">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>

            <p className="text-sm text-foreground/70 text-center mt-8">
              Prices subject to change. Private health insurance accepted. Contact us for detailed pricing information and package deals.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Choose the service that&apos;s right for you and book your appointment today.
            </p>
            <Link href="/book">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-8">
                Book an Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
