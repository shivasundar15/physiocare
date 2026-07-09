import Image from 'next/image'

export function GallerySection() {
  const galleryItems = [
    { id: 1, title: 'Reception Area', description: 'Welcoming clinic entrance', image: '/gallery-1.png' },
    { id: 2, title: 'Treatment Room', description: 'Professional therapy session', image: '/gallery-2.png' },
    { id: 3, title: 'Sports Rehabilitation', description: 'Injury recovery program', image: '/gallery-3.png' },
    { id: 4, title: 'Modern Facility', description: 'State-of-the-art clinic', image: '/gallery-4.png' },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
            Our Facility
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Professional Clinic Environment
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience treatment in our modern, welcoming clinic designed for your comfort and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative h-48 md:h-56 rounded-lg overflow-hidden border border-border group cursor-pointer hover:shadow-lg transition-all"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-white/80 text-xs">{item.description}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-semibold text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
