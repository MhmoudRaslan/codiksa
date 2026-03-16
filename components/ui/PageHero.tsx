interface PageHeroProps {
  label: string
  title: string
  highlight?: string
  description: string
}

export default function PageHero({ label, title, highlight, description }: PageHeroProps) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
    <section
      className="relative pt-32 pb-20 overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(ellipse, #14b371, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="section-label block mb-4">{label}</span>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          {highlight ? (
            <>
              {titleParts[0]}
              <span className="text-brand-gradient">{highlight}</span>
              {titleParts[1]}
            </>
          ) : title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      </div>
    </section>
  )
}
