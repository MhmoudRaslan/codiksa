import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react'
import { blogPosts } from '@/data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <ArrowLeft size={15} /> Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 pb-20">
        {/* Header */}
        <header className="mb-10">
          <span className="section-label block mb-4">{post.category}</span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 mb-8">
            <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>
              <User size={14} /> {post.author}
            </div>
            <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>
              <Clock size={14} /> {post.readTime}
            </div>
          </div>

          {/* Cover image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
        </header>

        {/* Excerpt as intro */}
        <div
          className="text-lg leading-relaxed mb-8 p-6 rounded-xl border-l-4"
          style={{
            color: 'var(--text-secondary)',
            backgroundColor: 'var(--bg-card)',
            borderLeftColor: 'var(--brand)',
            border: '1px solid var(--border)',
            borderLeft: '4px solid var(--brand)',
          }}
        >
          {post.excerpt}
        </div>

        {/* Placeholder content */}
        <div className="prose-content" style={{ color: 'var(--text-secondary)' }}>
          {[
            'Software development is constantly evolving, and staying ahead requires both technical expertise and strategic thinking. In this article, we explore the key concepts and best practices that define modern development workflows.',
            'The foundation of any successful project lies in choosing the right tools and methodologies. Whether you are building a startup MVP or scaling an enterprise platform, the decisions made early on have lasting consequences.',
            'Performance, maintainability, and developer experience are the three pillars we always optimize for at Codiksa. These are not trade-offs — with the right architecture, you can have all three.',
          ].map((para, i) => (
            <p key={i} className="text-base leading-relaxed mb-5">
              {para}
            </p>
          ))}

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
          >
            Key Takeaways
          </h2>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              'Start with a clear problem definition before writing any code.',
              'Invest time in developer tooling — it pays dividends across the entire project lifecycle.',
              'Document decisions as you make them, not after the fact.',
              'Ship early, get feedback, iterate quickly.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: 'var(--brand-glow)', color: 'var(--brand)' }}
                >
                  {i + 1}
                </span>
                <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section
          className="py-16"
          style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <h3
              className="text-xl font-bold mb-8"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
            >
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className="flex gap-4 p-4 rounded-xl card-hover"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', textDecoration: 'none' }}
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={rp.image} alt={rp.title} fill className="object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold block mb-1" style={{ color: 'var(--brand)' }}>{rp.category}</span>
                    <h4 className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                      {rp.title}
                    </h4>
                    <span className="text-xs mt-1 block" style={{ color: 'var(--text-muted)' }}>{rp.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
