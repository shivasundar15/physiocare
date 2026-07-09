import { Phone, FileText, Zap, TrendingUp, CheckCircle } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Get in Touch',
      description: 'Call us or book an appointment online to schedule your first consultation.',
    },
    {
      icon: FileText,
      number: '02',
      title: 'Comprehensive Assessment',
      description: 'We evaluate your condition, medical history, and treatment goals in detail.',
    },
    {
      icon: Zap,
      number: '03',
      title: 'Personalized Treatment',
      description: 'Receive tailored therapy sessions designed specifically for your recovery.',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Progress & Adjustment',
      description: 'We monitor your progress and adjust treatment to optimize results.',
    },
    {
      icon: CheckCircle,
      number: '05',
      title: 'Prevention & Maintenance',
      description: 'Learn strategies to maintain your improvement and prevent future injuries.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Your Path to Recovery
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A clear, structured approach to getting you back to your best.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary/20 via-secondary/50 to-secondary/20"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="relative">
                  <div className="bg-card rounded-lg p-4 md:p-6 border border-border h-full hover:shadow-lg transition-shadow">
                    {/* Step Number */}
                    <div className="mb-3 md:mb-4">
                      <p className="text-xs font-bold text-secondary uppercase tracking-wider">{step.number}</p>
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 md:mb-4 relative z-10 bg-card md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:border-4 md:border-background">
                      <Icon className="text-secondary" size={24} />
                    </div>

                    {/* Content */}
                    <div className="md:pt-6">
                      <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
