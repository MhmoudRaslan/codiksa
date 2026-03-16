'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { services } from '@/data'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Everything You Need to "
        highlight="Ship"
        description="From concept to production — we offer end-to-end software development services tailored to your product and business goals."
      />

      {/* ─── SERVICES GRID ───────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="p-8 rounded-2xl card-hover"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-start gap-5">
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
                        0{i + 1}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                          <CheckCircle2 size={13} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="How We Work"
            title="Our "
            highlight="Process"
            description="A simple, transparent process designed to keep you in the loop at every stage."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We start by deeply understanding your goals, users, and technical constraints through workshops and research.' },
              { step: '02', title: 'Build', desc: 'We design and develop your product in focused sprints, with weekly demos and continuous feedback loops.' },
              { step: '03', title: 'Launch & Grow', desc: 'We deploy your product and provide post-launch support, monitoring, and iteration as you scale.' },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                  style={{ backgroundColor: 'var(--brand-glow)', color: 'var(--brand)', fontFamily: 'var(--font-display)' }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
            Have a project in mind?
          </h2>
          <p className="text-base mb-8" style={{ color: 'var(--text-secondary)' }}>
            Let's discuss how we can help bring your idea to life.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
