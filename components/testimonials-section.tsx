import Link from 'next/link'
import { TestimonialCard } from '@/components/testimonial-card'
import { Button } from '@/components/ui/button'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Runner',
      content: 'After months of knee pain, I finally found relief. The personalized approach and attention to detail made all the difference. I\'m back to running without pain!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Office Worker',
      content: 'My chronic back pain seemed hopeless until I started treatment here. Within weeks, I felt significant improvement. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Post-Surgery Patient',
      content: 'The guidance through my post-operative recovery was exceptional. Professional, caring, and results-driven. Thank you for helping me get back to normal life.',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
            Patient Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What Our Patients Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real stories from real patients who have experienced transformation through our care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Read More Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
