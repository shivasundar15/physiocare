'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Do I need a doctor\'s referral to see a physiotherapist?',
      answer: 'No, you can access our services directly without a referral. However, if you\'ve been seeing your GP, bringing your medical information can help us provide better care.',
    },
    {
      question: 'How long does each treatment session last?',
      answer: 'Initial assessments typically last 45-60 minutes, while follow-up treatment sessions are usually 30-45 minutes. The duration depends on your specific condition and treatment plan.',
    },
    {
      question: 'How many sessions will I need?',
      answer: 'The number of sessions varies depending on your condition, severity, and recovery goals. After your initial assessment, we\'ll provide a realistic estimate of the treatment duration needed.',
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring any relevant medical records, imaging results (X-rays, MRI scans), and a list of current medications. Wear comfortable clothing that allows easy access to the area being treated.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most private health insurance plans. We can provide invoices for insurance reimbursement. Contact us to verify your specific coverage.',
    },
    {
      question: 'What if I need to cancel or reschedule?',
      answer: 'We require at least 24 hours notice for cancellations or rescheduling. Cancellations made with less notice may incur a fee.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
            Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-4 py-3 md:px-6 md:py-4 flex items-center justify-between hover:bg-accent/5 transition-colors text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-secondary transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === idx && (
                              <div className="px-4 py-3 md:px-6 md:py-4 border-t border-border bg-accent/5">
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
