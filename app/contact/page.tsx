import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | Prolific Rehab Center',
  description: 'Get in touch with Prolific Rehab Center. Call, email, or visit us. We&apos;re here to answer your questions about our services.',
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
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">Get in Touch</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Contact Prolific Rehab Center
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Have questions about our services? Ready to book an appointment? Get in touch with us today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Phone */}
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Phone className="text-secondary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <a href="tel:+447729482216" className="text-secondary hover:text-secondary/80 font-medium">
                  +44 7729 482216
                </a>
              </div>

              {/* Email */}
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Mail className="text-secondary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:Prolificrehabcenter@gmail.com" className="text-secondary hover:text-secondary/80 font-medium break-all">
                  Prolificrehabcenter@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-foreground/70 text-sm">
                  4/39/0-1, Saint Thomas Mount 3rd Lane,<br />
                  Saint Patrick&apos;s Church Road,<br />
                  Chennai, India
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Clock className="text-secondary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <div className="text-sm text-foreground/70 space-y-1">
                  <p>Mon-Fri: 9AM - 6PM</p>
                  <p>Sat: 10AM - 3PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-96 rounded-lg overflow-hidden border border-border">
              <iframe
                title="Prolific Rehab Center location"
                src="https://www.google.com/maps?q=Saint+Thomas+Mount+3rd+Lane,+Saint+Patrick%27s+Church+Road,+Chennai&output=embed"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Send us a Message</h2>
            
            <div className="bg-white border border-border rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                    placeholder="+44 7729 482216"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                    placeholder="Tell us about your inquiry or condition..."
                  />
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Send Message
                </Button>
              </form>
            </div>

            <p className="text-sm text-foreground/70 text-center mt-6">
              We&apos;ll respond to your inquiry within 24 hours. For urgent matters, please call us directly.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey to Recovery?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Book your appointment today and let us help you achieve your wellness goals.
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
