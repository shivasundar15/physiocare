import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Award, Briefcase, BookOpen } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Therapist Image */}
          <div className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden border border-border shadow-lg">
            <Image
              src="/therapist.png"
              alt="Professional therapist portrait"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
                Meet Your Therapist
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Professional Care From an Experienced Expert
              </h2>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Aaron Fernando is a physiotherapist specializing in musculoskeletal injuries, sports rehabilitation, and post-surgical recovery. Having interned with Arsenal Football Club and Watford Football Club, Aaron has hands-on experience supporting professional athletes during competitive matches — and is passionate about helping every patient return to the activities they love.
            </p>

            {/* Qualifications */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sports Physiotherapy Experience</p>
                  <p className="text-sm text-foreground/70">Internships with Arsenal FC &amp; Watford FC</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BookOpen size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">BSc Physiotherapy (in progress)</p>
                  <p className="text-sm text-foreground/70">University of Hertfordshire, UK</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Briefcase size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Match-Day Support</p>
                  <p className="text-sm text-foreground/70">Hands-on experience assisting players during football matches</p>
                </div>
              </div>
            </div>

            <p className="text-foreground/70">
              Treatment philosophy: &quot;Every patient is unique. I combine evidence-based practice with a compassionate approach, focusing not just on pain relief but on helping you achieve your goals and prevent future injuries.&quot;
            </p>

            <Link href="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Learn More About Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
