'use client'

'use client'

import Link from 'next/link'
import { Code2, Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Web Development', href: '/services' },
    { label: 'Mobile Development', href: '/services' },
    { label: 'UI/UX Design', href: '/services' },
    { label: 'Backend & APIs', href: '/services' },
    { label: 'AI Integration', href: '/services' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center brand-gradient">
                <Code2 size={18} color="white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                Codiksa
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'var(--text-secondary)' }}>
              A team of passionate developers building modern web, mobile, and AI-powered products. Fast, clean, and built to last.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <Mail size={14} style={{ color: 'var(--brand)' }} />
                hello@codixa.dev
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <Phone size={14} style={{ color: 'var(--brand)' }} />
                +20 100 000 0000
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <MapPin size={14} style={{ color: 'var(--brand)' }} />
                Cairo, Egypt
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: <Github size={16} />, href: '#' },
                { icon: <Linkedin size={16} />, href: '#' },
                { icon: <Twitter size={16} />, href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--brand)'
                    e.currentTarget.style.borderColor = 'var(--brand)'
                    e.currentTarget.style.backgroundColor = 'var(--brand-glow)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Codiksa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs transition-colors" style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >Privacy Policy</Link>
            <Link href="#" className="text-xs transition-colors" style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
