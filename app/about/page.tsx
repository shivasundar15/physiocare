import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Award, BookOpen, Briefcase, Heart } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'About Our Physiotherapist | Professional Care',
  description: 'Meet Aaron Fernando, a sports physiotherapist who has interned with Arsenal FC and Watford FC, currently studying at the University of Hertfordshire, UK.',
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
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">About</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Meet Your Physiotherapist
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                With hands on experience supporting professional athletes at Arsenal Football Club and Watford Football Club, Aaron Fernando is dedicated to helping patients recover from injury, manage chronic conditions, and achieve their wellness goals.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Professional Background</h2>
                
                <p className="text-foreground/70 leading-relaxed">
                  Aaron Fernando is currently pursuing a BSc in Physiotherapy at the University of Hertfordshire in the UK. Alongside his studies, Aaron has gained valuable sports physiotherapy experience through internships with Arsenal Football Club and Watford Football Club, supporting players during training and competitive matches. Aaron is committed to evidence based, compassionate care and to continued professional development throughout his career.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Football Club Experience</h3>
                      <p className="text-sm text-foreground/70">Internships with Arsenal FC &amp; Watford FC</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Education</h3>
                      <p className="text-sm text-foreground/70">BSc Physiotherapy (in progress), University of Hertfordshire</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Experience</h3>
                      <p className="text-sm text-foreground/70">Sports physiotherapy with professional football clubs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20 border border-border shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Award size={64} className="mx-auto text-secondary/60" />
                    <p className="text-foreground/60 font-medium">[Add Photo of Aaron Fernando]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Philosophy */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Treatment Philosophy</h2>
            
            <div className="bg-white border border-border rounded-lg p-8 mb-8">
              <p className="text-lg text-foreground/80 leading-relaxed italic mb-4">
                &quot;Every patient is unique. I believe in combining evidence based practice with a compassionate, personalized approach. My goal isn&apos;t just to relieve your pain—it&apos;s to help you understand your body, achieve your goals, and build lasting habits to prevent future injuries.&quot;
              </p>
              <p className="font-semibold text-secondary">— Aaron Fernando</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-3">Evidence-Based Care</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Treatment protocols are grounded in current research and best practices, ensuring you receive the most effective care.
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-3">Patient-Centered Approach</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Your goals, preferences, and lifestyle guide every treatment decision, ensuring care that works for your life.
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-3">Education First</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Understanding your condition empowers you to take an active role in your recovery and long-term health.
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-3">Holistic Wellness</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  We address the root cause of your issues, not just symptoms, considering your overall health and wellbeing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Areas of Specialization</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Sports Injury Rehabilitation',
                'Post-Surgical Recovery',
                'Chronic Pain Management',
                'Musculoskeletal Conditions',
                'Sports Performance Enhancement',
                'Injury Prevention',
              ].map((specialty, idx) => (
                <div key={idx} className="bg-white border border-border rounded-lg p-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Heart className="text-secondary" size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">{specialty}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Professional Care?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Book an appointment with Aaron Fernando today and start your journey to recovery.
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
