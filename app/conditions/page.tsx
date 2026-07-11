import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Conditions Treated | Prolific Rehab Center',
  description: 'Explore the conditions we treat at Prolific Rehab Center, from back pain to sports injuries, post-surgery recovery and more.',
}

const conditions = [
  {
    id: 'back-pain',
    title: 'Back Pain',
    description: 'Acute or chronic lower and upper back pain affecting daily activities and quality of life.',
    symptoms: ['Lower back pain', 'Stiffness', 'Muscle tension', 'Limited mobility', 'Radiating pain'],
    image: '/condition-back-pain.png',
  },
  {
    id: 'neck-pain',
    title: 'Neck & Shoulder Pain',
    description: 'Pain and tension in the neck and shoulder region, often from poor posture or injury.',
    symptoms: ['Neck stiffness', 'Shoulder tension', 'Headaches', 'Limited rotation', 'Muscle knots'],
    image: '/condition-neck-pain.png',
  },
  {
    id: 'sports-injuries',
    title: 'Sports Injuries',
    description: 'Treatment and rehabilitation for sports-related injuries and performance enhancement.',
    symptoms: ['Muscle strains', 'Ligament sprains', 'Joint pain', 'Inflammation', 'Reduced performance'],
    image: '/condition-sports.png',
  },
  {
    id: 'post-surgery',
    title: 'Post-Surgery Recovery',
    description: 'Guided rehabilitation following surgical procedures to restore function and strength.',
    symptoms: ['Surgical site pain', 'Stiffness', 'Weakness', 'Limited ROM', 'Swelling'],
    image: '/condition-postsurgery.png',
  },
  {
    id: 'arthritis',
    title: 'Arthritis & Joint Pain',
    description: 'Management of osteoarthritis, rheumatoid arthritis, and other joint conditions.',
    symptoms: ['Joint pain', 'Stiffness', 'Swelling', 'Limited mobility', 'Morning discomfort'],
    image: '/condition-arthritis.png',
  },
  {
    id: 'repetitive-strain',
    title: 'Repetitive Strain Injury',
    description: 'Treatment for conditions from repetitive motions like tennis elbow or carpal tunnel.',
    symptoms: ['Localized pain', 'Numbness', 'Weakness', 'Tingling', 'Reduced function'],
    image: '/condition-shoulder.png',
  },
  {
    id: 'headaches',
    title: 'Headaches & Migraines',
    description: 'Physiotherapy approach to tension headaches and migraines with musculoskeletal causes.',
    symptoms: ['Recurring headaches', 'Neck tension', 'Visual disturbances', 'Nausea', 'Sensitivity'],
    image: '/condition-neck-pain.png',
  },
  {
    id: 'mobility',
    title: 'Reduced Mobility',
    description: 'Improving mobility and independence in daily activities for all age groups.',
    symptoms: ['Difficulty moving', 'Balance issues', 'Fall risk', 'Reduced independence'],
    image: '/condition-mobility.png',
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
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">What We Treat</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Conditions We Treat
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Whether you&apos;re experiencing pain from injury, recovering from surgery, or managing a chronic condition, we have the expertise to help.
              </p>
            </div>
          </div>
        </section>

        {/* Conditions Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {conditions.map((condition) => (
                <div
                  key={condition.id}
                  id={condition.id}
                  className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all group scroll-mt-20"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                    <Image
                      src={condition.image}
                      alt={condition.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{condition.title}</h3>
                    <p className="text-foreground/70 mb-4">{condition.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-secondary mb-2">Common Symptoms:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {condition.symptoms.map((symptom, idx) => (
                          <li key={idx} className="text-sm text-foreground/70 flex gap-2">
                            <span className="text-secondary">•</span>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/book" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium text-sm group/link">
                      Get Treatment
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Treatment Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Assessment',
                  description: 'Comprehensive evaluation to understand your specific condition and identify root causes.',
                },
                {
                  title: 'Personalized Plan',
                  description: 'Development of a targeted treatment plan tailored to your needs and goals.',
                },
                {
                  title: 'Progressive Treatment',
                  description: 'Ongoing therapy with adjustments based on your progress and response to treatment.',
                },
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-border rounded-lg p-6">
                  <p className="text-sm font-semibold text-secondary mb-2">{String(idx + 1).padStart(2, '0')}</p>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not Sure? */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Not Sure if We Can Help?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Even if your condition isn&apos;t listed above, our experienced physiotherapist can evaluate and provide guidance. Contact us for a consultation.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Treatment?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Book your initial assessment and take the first step toward recovery.
            </p>
            <Link href="/book">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-8">
                Book Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
