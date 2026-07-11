import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { ProblemSection } from '@/components/problem-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { HowItWorks } from '@/components/how-it-works'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FAQSection } from '@/components/faq-section'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { StickyCTA } from '@/components/sticky-cta'
import { FloatingContact } from '@/components/floating-contact'

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <ProblemSection />
        <AboutSection />
        <ServicesSection />
        <HowItWorks />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
      <FloatingContact />
    </>
  )
}
