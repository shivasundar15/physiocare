import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { TestimonialCard } from '@/components/testimonial-card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Patient Testimonials | Success Stories',
  description: 'Read success stories from our patients. Discover how Prolific Rehab Center has helped them recover and return to the activities they love.',
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Runner',
    content: 'I came to Prolific Rehab Center with persistent knee pain that was preventing me from running. Within 8 weeks of consistent treatment and the home exercise program, I was back to my regular running schedule pain free. The attention to detail and personalized approach made all the difference.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Office Worker',
    content: 'My chronic back pain seemed hopeless—I&apos;d tried everything. Within the first few sessions, I felt real improvement. Now, several months later,managing my pain effectively and sleeping better than I have in years. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    role: 'Post Surgery Patient',
    content: 'The guidance through my post operative recovery was exceptional. Professional, caring, and results driven. I felt supported every step of the way. Thank you for helping me get back to normal life faster than I expected.',
    rating: 5,
  },
  {
    name: 'James Patterson',
    role: 'Tennis Player',
    content: 'Tennis elbow was affecting my game. After targeted rehabilitation, I not only recovered but improved my performance. The prevention strategies I learned have kept me injury free for over a year.',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    role: 'Desk Worker',
    content: 'Neck and shoulder tension from my desk job was unbearable. The combination of treatment and ergonomic advice has been life changing. I now have strategies to manage my condition long term.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Athlete',
    content: 'Working with this clinic has taken my athletic performance to the next level. The rehabilitation after my ankle injury was thorough, and I came back stronger. Now I trust them for injury prevention too.',
    rating: 5,
  },
]

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">Success Stories</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Patient Testimonials
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Discover how patients have transformed their health and returned to the activities they love through our personalized physiotherapy care.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <TestimonialCard key={idx} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-secondary mb-2">500+</p>
                <p className="text-foreground/70">Patients Treated</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary mb-2">95%</p>
                <p className="text-foreground/70">Success Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary mb-2">4.9★</p>
                <p className="text-foreground/70">Average Rating</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary mb-2">15+</p>
                <p className="text-foreground/70">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Be Part of Our Success Stories</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Your journey to recovery starts with a single appointment. Let us help you achieve your goals.
            </p>
            <Link href="/book">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-8">
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
