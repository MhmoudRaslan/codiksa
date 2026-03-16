interface SectionHeaderProps {
  label: string
  title: string
  highlight?: string
  description?: string
  center?: boolean
}

export default function SectionHeader({ label, title, highlight, description, center = false }: SectionHeaderProps) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      <span className="section-label block mb-3">{label}</span>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
      >
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-brand-gradient">{highlight}</span>
            {titleParts[1]}
          </>
        ) : title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''}`} style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      )}
    </div>
  )
}
