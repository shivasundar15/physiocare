import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FAQSection } from '@/components/faq-section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'FAQ | Prolific Rehab Center',
  description: 'Frequently asked questions about our physiotherapy services, appointments, pricing, and treatment options.',
}

export default function Page() {
  const categories = [
    {
      title: 'About Our Services',
      faqs: [
        {
          question: 'What is physiotherapy?',
          answer: 'Physiotherapy is a healthcare profession focused on helping people restore, maintain, and maximize their strength, function, and mobility. It involves assessment, diagnosis, and treatment of physical conditions using exercises, manual therapy, and patient education.',
        },
        {
          question: 'What conditions do you treat?',
          answer: 'We treat a wide range of musculoskeletal conditions including back pain, neck pain, sports injuries, post surgical recovery, arthritis, and mobility issues. We also work with athletes for performance enhancement and injury prevention.',
        },
        {
          question: 'Do I need a doctor\'s referral?',
          answer: 'No, you can access our services directly as a private physiotherapy clinic. However, if you have recent medical reports or imaging, please bring them to your first appointment.',
        },
      ],
    },
    {
      title: 'Appointments & Booking',
      faqs: [
        {
          question: 'How do I book an appointment?',
          answer: 'You can book online through our website, call us at +44 7729 482216, or email Prolificrehabcenter@gmail.com. We try to accommodate urgent cases within 24-48 hours when possible.',
        },
        {
          question: 'How long is the first appointment?',
          answer: 'Initial assessments typically last 45-60 minutes. This gives us time to thoroughly evaluate your condition and develop a personalized treatment plan.',
        },
        {
          question: 'What should I bring to my appointment?',
          answer: 'Please bring your ID, insurance information (if applicable), any medical reports or imaging results, and a list of current medications. Wear comfortable clothing that allows easy access to the area being treated.',
        },
        {
          question: 'Can I change or cancel my appointment?',
          answer: 'Yes, we require at least 24 hours notice for changes or cancellations. Late cancellations may incur a cancellation fee. Please contact us as soon as possible if you need to reschedule.',
        },
      ],
    },
    {
      title: 'Treatment & Recovery',
      faqs: [
        {
          question: 'How many sessions will I need?',
          answer: 'This varies depending on your condition, severity, and recovery goals. After your initial assessment, we provide a realistic estimate of the number of sessions needed and expected recovery timeline.',
        },
        {
          question: 'How often should I come for treatment?',
          answer: 'Frequency depends on your condition and goals. Some conditions benefit from 1-2 sessions per week, while others may require more intensive initial treatment. We discuss this during your assessment.',
        },
        {
          question: 'Will you give me exercises to do at home?',
          answer: 'Yes! Home exercises are a crucial part of recovery. We provide a customized exercise program tailored to your needs, with detailed instructions, demonstration videos, and written guides.',
        },
        {
          question: 'What if I\'m not improving?',
          answer: 'We continuously monitor your progress and adjust your treatment plan accordingly. If progress stalls, we discuss alternative approaches or may recommend further medical investigation if needed.',
        },
      ],
    },
    {
      title: 'Payment & Insurance',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, card payments (Visa, Mastercard, etc.), and bank transfers. Private health insurance is also accepted—contact us to verify your coverage.',
        },
        {
          question: 'Do you accept private health insurance?',
          answer: 'Yes, we work with most major private health insurance providers. We can provide invoices for reimbursement. Please check with your insurance provider for coverage details and any referral requirements.',
        },
        {
          question: 'Is there a discount for multiple sessions?',
          answer: 'We offer package deals for multiple sessions. Contact us to discuss pricing options that work for your situation.',
        },
      ],
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
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">Questions?</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Find answers to common questions about our services, appointments, and physiotherapy treatment.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {categories.map((category, cidx) => (
                <div key={cidx}>
                  <h2 className="text-2xl font-bold text-foreground mb-6">{category.title}</h2>
                  <div className="space-y-3">
                    {category.faqs.map((faq, fidx) => (
                      <div
                        key={fidx}
                        className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="px-6 py-4 flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-secondary font-bold text-sm">?</span>
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-2">{faq.question}</p>
                            <p className="text-foreground/70 text-sm leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions? */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Don&apos;t hesitate to reach out. We&apos;re happy to discuss your specific situation.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Take the First Step?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Book your initial consultation and let&apos;s start your journey to better health.
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
