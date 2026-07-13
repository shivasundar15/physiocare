import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, Clock, User } from 'lucide-react'

export const metadata = {
  title: 'Book an Appointment | Prolific Rehab Center',
  description: 'Book your physiotherapy appointment at Prolific Rehab Center. Schedule your consultation with our experienced therapist.',
}

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">Booking</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Book Your Appointment
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Ready to start your recovery journey? Book your consultation with our experienced physiotherapist today.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Options */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Online Booking */}
              <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Calendar className="text-secondary" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Book on WhatsApp</h2>
                <p className="text-foreground/70 mb-6">
                  Message us on WhatsApp to book your appointment. Tell us your preferred date and time, and we&apos;ll confirm your slot quickly.
                </p>
                <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-border">
                  <p className="text-sm text-foreground/70 mb-2"><span className="font-semibold">Initial Consultation:</span> £65 (45-60 mins)</p>
                  <p className="text-sm text-foreground/70"><span className="font-semibold">Follow up Session:</span> £45 (30-45 mins)</p>
                </div>
                <a href="https://wa.me/447729482216?text=Hi%20Prolific%20Rehab%20Center%2C%20I%27d%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Book on WhatsApp
                  </Button>
                </a>
              </div>

              {/* Phone Booking */}
              <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Clock className="text-secondary" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Call to Book</h2>
                <p className="text-foreground/70 mb-6">
                  Prefer to speak with someone directly? Call our clinic to discuss your needs and book an appointment that works for your schedule.
                </p>
                <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-border">
                  <p className="text-sm text-foreground/70 mb-3"><span className="font-semibold">Hours:</span></p>
                  <p className="text-sm text-foreground/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-foreground/70">Saturday: 10:00 AM - 3:00 PM</p>
                  <p className="text-sm text-foreground/70">Sunday: Closed</p>
                </div>
                <a href="tel:+447729482216">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Call: +44 7729 482216
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What to Expect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <User size={32} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Pre Appointment</h3>
                <p className="text-foreground/70 text-sm">
                  Arrive 10 minutes early. Bring medical records and insurance details if applicable.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar size={32} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Assessment</h3>
                <p className="text-foreground/70 text-sm">
                  We conduct a thorough evaluation and discuss your condition, symptoms, and treatment goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Plan</h3>
                <p className="text-foreground/70 text-sm">
                  We develop a personalized treatment plan and schedule your follow up appointments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Important Information</h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Cancellation Policy</h3>
                <p className="text-foreground/70">
                  Please provide at least 24 hours notice for cancellations or rescheduling. Cancellations made with less notice may incur a cancellation fee.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">What to Bring</h3>
                <ul className="text-foreground/70 space-y-2">
                  <li>• Valid ID or proof of identity</li>
                  <li>• Insurance information (if applicable)</li>
                  <li>• Medical records or imaging (if available)</li>
                  <li>• List of current medications</li>
                </ul>
              </div>

              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Clothing</h3>
                <p className="text-foreground/70">
                  Wear comfortable, loose fitting clothing that allows easy access to the area being treated. You may be asked to change into examination clothes.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Payment</h3>
                <p className="text-foreground/70">
                  We accept cash, card (Visa, Mastercard), and bank transfers. Private health insurance is also accepted. Payment is due at the time of service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Book your appointment today and take the first step toward recovery and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://wa.me/447729482216?text=Hi%20Prolific%20Rehab%20Center%2C%20I%27d%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-8">
                  Book on WhatsApp
                </Button>
              </a>
              <a href="tel:+447729482216">
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base h-12 px-8">
                  Call: +44 7729 482216
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
