
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { services, stats, testimonials, projects } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
        {/* Background grid */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Radial glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(ellipse, #14b371, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-5"
          style={{ background: 'radial-gradient(ellipse, #14b371, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
              style={{ backgroundColor: 'var(--brand-glow)', color: 'var(--brand)', border: '1px solid var(--brand)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              We Build
              <br />
              <span className="text-brand-gradient">Digital</span>
              <br />
              Products
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
              Codiksa is a software development team turning ideas into fast, beautiful, and scalable digital products — web, mobile, and AI.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-2 mb-10">
              {['Clean, production-grade code', 'Transparent communication', 'On-time delivery'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                See Our Work <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-brand-gradient" style={{ fontFamily: 'var(--font-display)' }}>
                    {s.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[520px]">
              {/* Main card */}
              <div
                className="absolute inset-x-8 top-8 bottom-8 rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow)',
                }}
              >
                {/* Code snippet visual */}
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
                    <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
                    <span className="ml-2 text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>codixa/app.tsx</span>
                  </div>
                  <div className="font-mono text-xs leading-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                    <div><span style={{ color: '#569cd6' }}>import</span> <span style={{ color: '#9cdcfe' }}>{'{ Codiksa }'}</span> <span style={{ color: '#569cd6' }}>from</span> <span style={{ color: '#ce9178' }}>'./team'</span></div>
                    <br />
                    <div><span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>project</span> = {'{'}</div>
                    <div className="pl-4"><span style={{ color: '#9cdcfe' }}>idea</span>: <span style={{ color: '#ce9178' }}>"Your Vision"</span>,</div>
                    <div className="pl-4"><span style={{ color: '#9cdcfe' }}>stack</span>: [<span style={{ color: '#ce9178' }}>"Next.js"</span>, <span style={{ color: '#ce9178' }}>"AI"</span>],</div>
                    <div className="pl-4"><span style={{ color: '#9cdcfe' }}>quality</span>: <span style={{ color: '#b5cea8' }}>100</span>,</div>
                    <div>{'}'}</div>
                    <br />
                    <div><span style={{ color: '#569cd6' }}>export default</span> <span style={{ color: '#dcdcaa' }}>Codiksa</span>.<span style={{ color: '#dcdcaa' }}>build</span>(project)</div>
                    <div className="mt-2 text-green-400">{'// ✓ Shipped on time. Every time.'}</div>
                  </div>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div
                className="absolute -top-2 -right-2 px-4 py-2 rounded-xl text-xs font-semibold shadow-lg z-10"
                style={{ backgroundColor: 'var(--brand)', color: 'white' }}
              >
                 Ready to Ship
              </div>

              {/* Floating review card — bottom left */}
              <div
                className="absolute -bottom-4 -left-4 p-4 rounded-xl z-10"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow)',
                  minWidth: '180px',
                }}
              >
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="#14b371" color="#14b371" />
                  ))}
                </div>
                <p className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>
                  "Exceeded expectations!"
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>— Tarek M., CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="What We Do"
            title="Services Built for "
            highlight="Modern Products"
            description="From idea to deployment — we cover the full stack."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                href="/services"
                key={service.id}
                className="p-6 rounded-2xl card-hover"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow)',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                
                <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {service.shortDesc}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS PREVIEW ────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <SectionHeader
              label="Portfolio"
              title="Recent "
              highlight="Projects"
              description="A selection of our latest work."
            />
            <Link href="/projects" className="btn-outline shrink-0 self-start md:self-end mb-14">
              All Projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden card-hover"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                  <div
                    className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-semibold"
                    style={{ backgroundColor: 'var(--bg-card)', color: 'var(--brand)' }}
                  >
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{ backgroundColor: 'var(--brand-glow)', color: 'var(--brand)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Testimonials"
            title="What Our "
            highlight="Clients Say"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#14b371" color="#14b371" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: 'var(--text-secondary)' }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                    style={{ border: '2px solid var(--brand)', backgroundColor: 'var(--bg)' }}
                  />
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-label block mb-4">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
            Let's Build Something
            <span className="text-brand-gradient"> Great Together</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Have a project in mind? We'd love to hear about it. Let's talk.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
