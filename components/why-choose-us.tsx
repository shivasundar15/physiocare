import { Heart, Award, Zap, Users } from 'lucide-react'

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Every treatment plan is tailored to your unique needs, goals, and lifestyle.',
    },
    {
      icon: Award,
      title: 'Expert Therapist',
      description: 'HCPC registered with extensive experience in sports and clinical physiotherapy.',
    },
    {
      icon: Zap,
      title: 'Evidence-Based Treatment',
      description: 'Using the latest research and proven rehabilitation protocols for optimal results.',
    },
    {
      icon: Users,
      title: 'Holistic Approach',
      description: 'We address the root cause, not just symptoms, for long-term wellness.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            The PhysioClinic Difference
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover why hundreds of patients trust us with their recovery journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div key={idx} className="bg-card rounded-lg p-5 md:p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="text-secondary" size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
