import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

export function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300">
      {/* Star Rating */}
      <div className="flex gap-1 mb-3 md:mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? 'fill-accent text-accent' : 'text-border'}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground/80 mb-3 md:mb-4 leading-relaxed italic text-sm md:text-base">
        &quot;{content}&quot;
      </p>

      {/* Author */}
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-foreground/60">{role}</p>
      </div>
    </div>
  )
}
