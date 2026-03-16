'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'hello@codixa.dev',
    href: 'mailto:hello@codixa.dev',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+20 100 000 0000',
    href: 'tel:+201000000000',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Cairo, Egypt',
    href: 'https://maps.google.com/?q=Cairo,Egypt',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200)) // simulate API call
    setLoading(false)
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg)',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-body)',
  }

  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Start a "
        highlight="Conversation"
        description="Have a project in mind? Want to join the team? Or just want to say hi? We'd love to hear from you."
      />

      <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ─── LEFT — Info ─────────────────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Contact cards */}
              <div className="flex flex-col gap-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'Location' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl card-hover"
                    style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', textDecoration: 'none' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--brand-glow)', color: 'var(--brand)' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability badge */}
              <div
                className="p-5 rounded-xl"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Currently Available
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  We are open to new projects. Typical response time is within 24 hours on business days.
                </p>
              </div>

              {/* Socials */}
              <div>
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>
                  Find us online
                </p>
                <div className="flex items-center gap-3">
                  {[
                    { icon: <Github size={16} />, href: '#', label: 'GitHub' },
                    { icon: <Linkedin size={16} />, href: '#', label: 'LinkedIn' },
                    { icon: <Twitter size={16} />, href: '#', label: 'Twitter' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all"
                      style={{
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border)',
                        backgroundColor: 'var(--bg-card)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--brand)'
                        e.currentTarget.style.borderColor = 'var(--brand)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)'
                        e.currentTarget.style.borderColor = 'var(--border)'
                      }}
                    >
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── RIGHT — Form ─────────────────────────────────────────── */}
            <div
              className="lg:col-span-3 p-8 rounded-2xl"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'var(--brand-glow)' }}
                  >
                    <CheckCircle2 size={28} style={{ color: 'var(--brand)' }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-sm max-w-xs" style={{ color: 'var(--text-secondary)' }}>
                    Thanks for reaching out. We will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="btn-outline mt-6"
                    style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div>
                  <h3
                    className="text-xl font-bold mb-6"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
                  >
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ahmed Mohamed"
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderColor = 'var(--brand)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ahmed@example.com"
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderColor = 'var(--brand)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label style={labelStyle}>Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--brand)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    >
                      <option value="">Select a subject...</option>
                      <option value="new-project">New Project</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, budget, or anything else..."
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--brand)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.email || !form.message}
                    className="btn-primary w-full justify-center"
                    style={{
                      opacity: (!form.name || !form.email || !form.message) ? 0.5 : 1,
                      cursor: (!form.name || !form.email || !form.message) ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {loading ? (
                      <>
                        <span
                          className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={15} />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
