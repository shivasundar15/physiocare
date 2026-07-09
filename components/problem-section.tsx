import { ServiceCard } from '@/components/service-card'
import { Zap, AlertCircle, Brain, Activity } from 'lucide-react'

export function ProblemSection() {
  const conditions = [
    {
      icon: AlertCircle,
      title: 'Back Pain',
      description: 'Relief from acute and chronic back pain with targeted treatment protocols.',
    },
    {
      icon: Zap,
      title: 'Neck & Shoulder Pain',
      description: 'Address tension and mobility issues affecting your daily activities.',
    },
    {
      icon: Brain,
      title: 'Sports Injuries',
      description: 'Recovery and performance enhancement for athletes of all levels.',
    },
    {
      icon: Activity,
      title: 'Post-Surgery Recovery',
      description: 'Guided rehabilitation following surgical procedures.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
            What We Treat
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Common Conditions We Help With
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Whether you&apos;re experiencing pain or injury, we have the expertise to guide your recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((condition, idx) => (
            <ServiceCard key={idx} {...condition} href={`/conditions#${condition.title.toLowerCase().replace(/\s+/g, '-')}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
