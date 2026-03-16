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
      <style>{`
        .footer-link { color: var(--text-muted); text-decoration: none; font-size: 0.875rem; transition: color 0.2s; }
        .footer-link:hover { color: var(--brand); }
        .footer-social { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); border: 1px solid var(--border); transition: all 0.2s; text-decoration: none; }
        .footer-social:hover { color: var(--brand); border-color: var(--brand); background-color: var(--brand-glow); }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4" style={{ textDecoration: 'none' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center brand-gradient">
                <Code2 size={18} color="white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                Codiksa
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'var(--text-secondary)' }}>
              Codiksa is a software development team turning ideas into fast, beautiful, and scalable digital products — web, mobile, and AI.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <Mail size={14} style={{ color: 'var(--brand)' }} /> hello@codiksa.dev
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <Phone size={14} style={{ color: 'var(--brand)' }} /> +20 100 000 0000
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <MapPin size={14} style={{ color: 'var(--brand)' }} /> Cairo, Egypt
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="footer-social" aria-label="GitHub"><Github size={16} /></a>
              <a href="#" className="footer-social" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" className="footer-social" aria-label="Twitter"><Twitter size={16} /></a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Codiksa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="footer-link" style={{ fontSize: '0.75rem' }}>Privacy Policy</Link>
            <Link href="#" className="footer-link" style={{ fontSize: '0.75rem' }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
