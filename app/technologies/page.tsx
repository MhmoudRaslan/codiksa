
import { technologies } from '@/data'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'

const categories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Mobile', 'AI/ML']

const categoryDescriptions: Record<string, string> = {
  Frontend: 'Modern, component-based UI frameworks for fast, beautiful interfaces.',
  Backend: 'Robust server-side technologies for reliable and scalable APIs.',
  Database: 'From relational to NoSQL — the right storage for every use case.',
  DevOps: 'Cloud infrastructure and automation to ship and scale confidently.',
  Mobile: 'Cross-platform frameworks for smooth native mobile experiences.',
  'AI/ML': 'Cutting-edge AI tools to embed intelligence into your products.',
}

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        label="Tech Stack"
        title="The Tools We "
        highlight="Master"
        description="We carefully choose technologies that are proven in production, well-maintained, and right for the job. No hype — just tools that work."
      />

      <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-16">
            {categories.map((category) => {
              const techs = technologies.filter((t) => t.category === category)
              return (
                <div key={category}>
                  <div className="flex items-start gap-8 mb-6">
                    <div className="flex-1">
                      <h2
                        className="text-2xl font-bold mb-1"
                        style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
                      >
                        {category}
                      </h2>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {categoryDescriptions[category]}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {techs.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center gap-3 p-5 rounded-2xl card-hover cursor-default"
                        style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
                      >
                        
                        <span
                          className="text-sm font-semibold text-center"
                          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
                        >
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 h-px" style={{ backgroundColor: 'var(--border)' }} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeader
            label="Philosophy"
            title="Right Tool for the "
            highlight="Right Job"
            description="We do not have a single rigid stack. We choose technologies based on your project's specific needs — considering performance, team expertise, maintainability, and ecosystem maturity."
            center
          />
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Battle-tested', desc: 'Only production-proven tools' },
              { label: 'Well-maintained',  desc: 'Active communities and updates' },
              { label: 'Right fit',  desc: 'Chosen for each project specifically' },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{item.label}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
