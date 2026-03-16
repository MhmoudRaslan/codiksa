'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/technologies', label: 'Technologies' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Team' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--bg-secondary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center brand-gradient"
          >
            <Code2 size={16} color="white" strokeWidth={2.5} />
          </div>
          <span
            className="font-display font-700 text-lg tracking-tight"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
          >
            Codiksa
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? 'var(--brand)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'var(--brand-glow)' : 'transparent',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-primary)'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand)'
                e.currentTarget.style.borderColor = 'var(--brand)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          {/* CTA */}
          <Link href="/contact" className="btn-primary hidden md:inline-flex" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ color: 'var(--text-primary)', border: '1px solid var(--border)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
        >
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      color: isActive ? 'var(--brand)' : 'var(--text-secondary)',
                      backgroundColor: isActive ? 'var(--brand-glow)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li className="mt-2 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
