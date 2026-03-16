import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import { teamMembers } from '@/data'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the developers, designers, and engineers behind Codiksa.',
}

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github size={15} />,
  linkedin: <Linkedin size={15} />,
  twitter: <Twitter size={15} />,
}

export default function TeamPage() {
  return (
    <>
      <style>{`
        .team-social { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); border: 1px solid var(--border); transition: all 0.2s; text-decoration: none; }
        .team-social:hover { color: var(--brand); border-color: var(--brand); background-color: var(--brand-glow); }
      `}</style>

      <PageHero
        label="Our Team"
        title="The People Behind "
        highlight="Codiksa"
        description="A small, senior team of engineers, designers, and AI specialists who care deeply about the products they build."
      />

      <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-2xl card-hover group relative overflow-hidden"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: 'radial-gradient(ellipse at top, var(--brand-glow), transparent 70%)' }}
                />
                <div className="relative">
                  <div className="relative w-20 h-20 mb-4">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="rounded-2xl object-cover"
                      style={{ border: '2px solid var(--border)', backgroundColor: 'var(--bg)' }}
                    />
                    <div
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2"
                      style={{ backgroundColor: '#22c55e', borderColor: 'var(--bg-card)' }}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-0.5" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: 'var(--brand)' }}>{member.role}</p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{member.bio}</p>
                  <div className="flex items-center gap-2">
                    {Object.entries(member.socials).map(([platform, href]) => (
                      <a key={platform} href={href} target="_blank" rel="noopener noreferrer" className="team-social" aria-label={platform}>
                        {socialIcons[platform]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Culture"
                title="How We Work "
                highlight="Together"
                description="We are a remote-first team that values deep work, clear communication, and continuous learning."
              />
              <div className="flex flex-col gap-4">
                {[
                  {  title: 'Remote First', desc: 'We work from wherever we do our best thinking.' },
                  {  title: 'Always Learning', desc: 'Every team member has a personal learning budget.' },
                  {  title: 'Async by Default', desc: 'Thoughtful writing over unnecessary meetings.' },
                  {  title: 'Ship Together', desc: 'We celebrate every deploy as a team.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-0.5" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl relative overflow-hidden" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #14b371, transparent)' }} />
              <div className="relative">
                
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                  We're Always Looking for Great People
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  If you are passionate about building great software and want to work with a team that takes craft seriously — we would love to hear from you.
                </p>
                <Link href="/contact" className="btn-primary">Get in Touch <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
