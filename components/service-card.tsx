import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export function ServiceCard({ icon: Icon, title, description, href = '#' }: ServiceCardProps) {
  return (
    <div className="group h-full bg-card border border-border rounded-lg p-4 md:p-6 hover:shadow-lg hover:border-secondary/50 transition-all duration-300">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-secondary/20 transition-colors">
        <Icon className="text-secondary" size={24} />
      </div>
      
      <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{description}</p>
      
      <Link href={href} className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium text-sm group/link">
        Learn more
        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
