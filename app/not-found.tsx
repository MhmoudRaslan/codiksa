import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full blur-3xl opacity-5"
        style={{ background: 'radial-gradient(ellipse, #14b371, transparent 70%)' }}
      />

      <div className="relative text-center px-6">
        <div
          className="text-8xl md:text-9xl font-bold mb-4 text-brand-gradient"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          404
        </div>
        <h1
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
        >
          Page Not Found
        </h1>
        <p className="text-base mb-8 max-w-sm mx-auto" style={{ color: 'var(--text-secondary)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
