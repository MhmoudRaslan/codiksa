'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { projects, projectCategories } from '@/data'
import PageHero from '@/components/ui/PageHero'

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <PageHero
        label="Our Work"
        title="Projects We're "
        highlight="Proud Of"
        description="A curated selection of products we've built for clients across different industries and tech stacks."
      />

      <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: active === cat ? 'var(--brand)' : 'var(--bg-card)',
                  color: active === cat ? 'white' : 'var(--text-secondary)',
                  border: `1px solid ${active === cat ? 'var(--brand)' : 'var(--border)'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden card-hover group"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(13,17,23,0.7)' }}
                  >
                    <Link
                      href={project.link}
                      className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl"
                      style={{ backgroundColor: 'var(--brand)', color: 'white' }}
                    >
                      View Project <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
                <div className="p-5">
                  <div
                    className="text-xs font-semibold mb-2"
                    style={{ color: 'var(--brand)' }}
                  >
                    {project.category}
                  </div>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
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

          {filtered.length === 0 && (
            <div className="text-center py-20" style={{ color: 'var(--text-muted)' }}>
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  )
}
