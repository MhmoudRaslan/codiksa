
import Link from 'next/link'
import { ArrowRight, Target, Heart, Zap, Users } from 'lucide-react'
import { stats } from '@/data'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'

const values = [
  {
    icon: <Target size={20} />,
    title: 'Quality Over Quantity',
    description: 'We take on fewer projects to give each one the attention it deserves. Every line of code matters.',
  },
  {
    icon: <Heart size={20} />,
    title: 'People First',
    description: 'Great products start with happy teams and happy clients. We invest in both relationships.',
  },
  {
    icon: <Zap size={20} />,
    title: 'Ship Fast, Iterate',
    description: 'We believe in getting real products to real users quickly, then improving based on actual feedback.',
  },
  {
    icon: <Users size={20} />,
    title: 'Transparent by Default',
    description: 'No surprises. Clear communication, honest timelines, and proactive updates throughout every project.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Codiksa"
        title="We Are Developers "
        highlight="Who Care"
        description="Codiksa is a software development team based in Cairo, Egypt. We partner with startups and businesses to build products that are fast, beautiful, and built to scale."
      />

      {/* ─── STORY ───────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Our Story"
                title="Built by Developers, "
                highlight="for Builders"
                description="Codiksa started as a small group of developers frustrated with agencies that over-promised and under-delivered. We set out to build something different — a team that ships clean, maintainable code on time, every time."
              />
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Today, we are a tight-knit team of engineers, designers, and AI specialists working on projects ranging from startup MVPs to enterprise platforms. Our strength is our ability to move fast without cutting corners.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We are not just vendors — we embed ourselves in your project, understand your goals, and work as true partners committed to your success.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl text-center"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="text-4xl font-bold mb-2 text-brand-gradient"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ──────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Our Values"
            title="What We "
            highlight="Believe In"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl card-hover"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--brand-glow)', color: 'var(--brand)' }}
                >
                  {value.icon}
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
            Want to work with us?
          </h2>
          <p className="text-base mb-8" style={{ color: 'var(--text-secondary)' }}>
            We are always open to interesting new projects. Let's have a conversation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get in Touch <ArrowRight size={16} /></Link>
            <Link href="/team" className="btn-outline">Meet the Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
