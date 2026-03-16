
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'
import { blogPosts } from '@/data'
import PageHero from '@/components/ui/PageHero'

const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))]

export default function BlogPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <>
      <PageHero
        label="Blog"
        title="Insights From "
        highlight="Our Team"
        description="We write about what we build, what we learn, and what we think is worth sharing — engineering, design, and product."
      />

      <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* ─── FEATURED POST ─────────────────────────────────────────── */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block mb-16 rounded-2xl overflow-hidden card-hover"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: 'var(--brand)', color: 'white' }}
                >
                  Featured
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span
                  className="text-xs font-semibold mb-3 block"
                  style={{ color: 'var(--brand)' }}
                >
                  {featured.category}
                </span>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
                >
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <User size={12} />
                    {featured.author}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <Clock size={12} />
                    {featured.readTime}
                  </div>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {new Date(featured.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <div className="mt-6">
                  <span className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Read Article <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* ─── CATEGORY PILLS ────────────────────────────────────────── */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: cat === 'All' ? 'var(--brand)' : 'var(--bg-card)',
                  color: cat === 'All' ? 'white' : 'var(--text-secondary)',
                  border: `1px solid ${cat === 'All' ? 'var(--brand)' : 'var(--border)'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ─── POSTS GRID ────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden card-hover"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold mb-2 block" style={{ color: 'var(--brand)' }}>
                    {post.category}
                  </span>
                  <h3
                    className="font-bold text-base leading-snug mb-2 group-hover:text-brand-gradient transition-all"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                    {post.excerpt}
                  </p>
                  <div
                    className="flex items-center justify-between pt-3"
                    style={{ borderTop: '1px solid var(--border)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <User size={11} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <Clock size={11} />
                        {post.readTime}
                      </div>
                    </div>
                    <ArrowRight
                      size={15}
                      style={{ color: 'var(--brand)', opacity: 0 }}
                      className="group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ──────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div
          className="max-w-2xl mx-auto px-6 py-12 rounded-2xl text-center relative overflow-hidden"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, #14b371, transparent 70%)' }}
          />
          <div className="relative">
            <span className="section-label block mb-3">Newsletter</span>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              Stay in the Loop
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              Get our latest articles, tutorials, and project updates delivered to your inbox. No spam, ever.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                }}
              />
              <button className="btn-primary" style={{ padding: '0.625rem 1.25rem', whiteSpace: 'nowrap' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
