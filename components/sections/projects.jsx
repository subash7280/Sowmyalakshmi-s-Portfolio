'use client'

import { useState } from 'react'
import { FadeInUp, ScaleIn } from '@/components/scroll-animations'
import { cn } from '@/lib/utils'

function ArrowUpRightIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  )
}

const categories = ['All', 'SEO', 'PPC', 'Content', 'Analytics']

const projects = [
  {
    title: 'SaaS Company SEO Overhaul',
    category: 'SEO',
    description: 'Complete SEO strategy revamp for a B2B SaaS platform including technical audits, content optimization, and link building campaigns.',
    result: '+180% organic traffic',
    tools: ['SEMrush', 'Ahrefs', 'Screaming Frog'],
  },
  {
    title: 'Real Estate Lead Generation',
    category: 'PPC',
    description: 'Multi-channel paid advertising for luxury real estate with advanced audience targeting across Google and Meta platforms.',
    result: '2K+ leads/month',
    tools: ['Google Ads', 'Meta Ads', 'HubSpot'],
  },
  {
    title: 'Content Marketing Strategy',
    category: 'Content',
    description: 'Comprehensive content strategy including blog posts, whitepapers, and video content for a tech startup launch.',
    result: '+300% blog traffic',
    tools: ['WordPress', 'Canva', 'Mailchimp'],
  },
  {
    title: 'E-commerce Analytics Dashboard',
    category: 'Analytics',
    description: 'Custom analytics dashboard integrating 12+ data sources for marketing performance tracking and attribution modeling.',
    result: '-80% report time',
    tools: ['Google Analytics', 'Looker Studio', 'BigQuery'],
  },
  {
    title: 'Local SEO Campaign',
    category: 'SEO',
    description: 'Multi-location local SEO optimization improving visibility in Google Maps and local search across 15 locations.',
    result: '+200% local visibility',
    tools: ['Google Business', 'BrightLocal', 'Moz'],
  },
  {
    title: 'Retargeting Optimization',
    category: 'PPC',
    description: 'Advanced retargeting campaigns across display and social channels with creative testing and audience segmentation.',
    result: '450% ROAS',
    tools: ['Google Ads', 'Facebook Pixel', 'Criteo'],
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-14">
            <span className="text-sm font-medium tracking-widest uppercase text-primary">Selected Work</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A selection of campaigns and projects that delivered measurable results for clients across industries.
            </p>
          </div>
        </FadeInUp>

        {/* Filter Tabs */}
        <FadeInUp delay={50}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-5 py-2 text-sm font-medium rounded-full transition-all duration-300',
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <ScaleIn key={project.title} delay={index * 80}>
              <div
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-primary via-chart-2 to-chart-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-6 flex-1 flex flex-col">
                  {/* Category + Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-wider uppercase text-primary/70 bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRightIcon className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Result Badge */}
                  <div className="mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-primary bg-primary/10 rounded-lg border border-primary/20">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                      </svg>
                      {project.result}
                    </span>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs text-muted-foreground bg-muted/50 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  )
}
