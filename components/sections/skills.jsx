'use client'

import { useState } from 'react'
import { FadeInUp, ScaleIn } from '@/components/scroll-animations'
import { cn } from '@/lib/utils'

const skillCategories = [
  {
    title: 'SEO & Organic',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    skills: [
      { name: 'Technical SEO', level: 95 },
      { name: 'Keyword Research', level: 92 },
      { name: 'On-page / Off-page', level: 90 },
      { name: 'Link Building', level: 88 },
      { name: 'Content Optimization', level: 93 },
      { name: 'Local SEO', level: 85 },
    ],
  },
  {
    title: 'Paid Advertising',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
    ),
    skills: [
      { name: 'Google Ads', level: 94 },
      { name: 'Meta Ads', level: 91 },
      { name: 'LinkedIn Ads', level: 82 },
      { name: 'Retargeting', level: 90 },
      { name: 'Budget Optimization', level: 88 },
      { name: 'A/B Testing', level: 92 },
    ],
  },
  {
    title: 'Analytics & Data',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    skills: [
      { name: 'Google Analytics 4', level: 96 },
      { name: 'Dashboard Reporting', level: 90 },
      { name: 'Attribution Modeling', level: 85 },
      { name: 'Conversion Tracking', level: 93 },
      { name: 'Customer Journeys', level: 87 },
      { name: 'Data Visualization', level: 89 },
    ],
  },
  {
    title: 'Marketing Ops',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    skills: [
      { name: 'Email Funnels', level: 88 },
      { name: 'HubSpot Workflows', level: 91 },
      { name: 'Lead Scoring', level: 86 },
      { name: 'CRM Management', level: 89 },
      { name: 'CRO', level: 90 },
      { name: 'MarTech Stack', level: 84 },
    ],
  },
]

const tools = [
  'Google Analytics', 'SEMrush', 'HubSpot', 'Ahrefs',
  'Google Ads', 'Meta Ads', 'Mailchimp', 'Hootsuite',
  'Canva', 'WordPress', 'Looker Studio', 'Hotjar',
]

const certs = [
  { name: 'Google Analytics Certified', provider: 'Google', year: '2024' },
  { name: 'Google Ads Certification', provider: 'Google', year: '2024' },
  { name: 'HubSpot Inbound Marketing', provider: 'HubSpot', year: '2023' },
  { name: 'SEMrush SEO Toolkit', provider: 'SEMrush', year: '2023' },
  { name: 'Meta Blueprint', provider: 'Meta', year: '2022' },
]

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-14">
            <span className="text-sm font-medium tracking-widest uppercase text-primary">Expertise</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
              Skills & Tools
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Core competencies honed through 5.5+ years of hands-on experience across multiple marketing disciplines.
            </p>
          </div>
        </FadeInUp>

        {/* Skills Categories - Tab Layout */}
        <FadeInUp delay={100}>
          <div className="bg-card border border-border rounded-2xl overflow-hidden mb-16">
            {/* Tab Headers */}
            <div className="flex overflow-x-auto border-b border-border">
              {skillCategories.map((cat, i) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    'flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-300 border-b-2 -mb-px',
                    activeTab === i
                      ? 'border-primary text-primary bg-primary/5'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  {cat.icon}
                  <span className="hidden sm:inline">{cat.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                {skillCategories[activeTab].title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {skillCategories[activeTab].skills.map((skill, i) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Tools Cloud */}
        <FadeInUp delay={150}>
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-foreground mb-6">Tools I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, i) => (
                <ScaleIn key={tool} delay={i * 40}>
                  <span className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-foreground bg-card border border-border rounded-full hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default">
                    {tool}
                  </span>
                </ScaleIn>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Certifications */}
        <FadeInUp delay={200}>
          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground text-center mb-8">Certifications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certs.map((cert, i) => (
                <ScaleIn key={cert.name} delay={i * 60}>
                  <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cert.provider} &middot; {cert.year}
                      </p>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
