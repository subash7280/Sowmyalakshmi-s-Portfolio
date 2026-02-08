'use client'

import { useState } from 'react'
import { FadeInUp } from '@/components/scroll-animations'
import { Badge } from '@/components/ui/badge'

function ChevronDownIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

function MapPinIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  )
}

function LinkIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
  )
}

const experiences = [
  {
    title: 'Senior Digital Marketing Analyst',
    company: 'TechGrowth Solutions',
    companyUrl: '#',
    location: 'Remote',
    period: '2022 - Present',
    type: 'Full-time',
    description: 'Leading digital marketing initiatives for SaaS clients, managing multi-channel campaigns, and driving data-driven strategies for sustainable growth.',
    achievements: [
      'Increased organic traffic by 180% through comprehensive SEO overhaul',
      'Managed $500K+ annual ad spend across Google Ads and Meta platforms',
      'Implemented marketing automation workflows, improving lead quality by 45%',
      'Built real-time analytics dashboards for executive stakeholders'
    ],
    skills: ['SEO', 'Google Ads', 'Marketing Automation', 'Data Analytics', 'HubSpot']
  },
  {
    title: 'Digital Marketing Specialist',
    company: 'RealEstate Pro',
    companyUrl: '#',
    location: 'New York, NY',
    period: '2020 - 2022',
    type: 'Full-time',
    description: 'Developed and executed digital marketing strategies for real estate clients, focusing on lead generation and brand awareness.',
    achievements: [
      'Generated 2,000+ qualified leads monthly through paid campaigns',
      'Improved website conversion rate by 65% through A/B testing',
      'Created content strategy resulting in 300% increase in social engagement',
      'Reduced cost per acquisition by 40% through campaign optimization'
    ],
    skills: ['PPC', 'Content Marketing', 'Social Media', 'CRO', 'Google Analytics']
  },
  {
    title: 'Marketing Coordinator',
    company: 'Digital Ventures Inc.',
    companyUrl: '#',
    location: 'San Francisco, CA',
    period: '2018 - 2020',
    type: 'Full-time',
    description: 'Supported marketing team in executing campaigns, managing social media presence, and analyzing campaign performance.',
    achievements: [
      'Managed social media accounts with 50K+ combined followers',
      'Coordinated 20+ successful product launch campaigns',
      'Developed email marketing strategies with 35% open rate average',
      'Created monthly performance reports for C-suite executives'
    ],
    skills: ['Social Media', 'Email Marketing', 'Campaign Management', 'Reporting']
  }
]

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Section Header */}
        <FadeInUp>
          <div className="mb-16">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Career Path</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 tracking-tight">
              Work Experience
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
              Over 5 years of experience driving growth through strategic digital marketing and data-driven decision making.
            </p>
          </div>
        </FadeInUp>

        {/* Experience Accordion */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <FadeInUp key={index} delay={index * 100}>
              <div 
                className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
                  expandedIndex === index 
                    ? 'border-primary/30 bg-card shadow-lg shadow-primary/5' 
                    : 'border-border bg-card/50 hover:border-primary/20 hover:bg-card'
                }`}
              >
                {/* Header - Always Visible */}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                  className="w-full p-6 flex items-start gap-4 text-left"
                >
                  {/* Timeline Indicator */}
                  <div className="flex flex-col items-center pt-1">
                    <div className={`w-3 h-3 rounded-full transition-colors ${
                      expandedIndex === index ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`} />
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2 min-h-[60px]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <a 
                            href={exp.companyUrl}
                            className="text-primary hover:underline font-medium flex items-center gap-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {exp.company}
                            <LinkIcon className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground flex-shrink-0">
                        <span className="font-medium">{exp.period}</span>
                        <Badge variant="secondary" className="font-normal">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPinIcon className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <div className={`transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}>
                    <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
                  </div>
                </button>

                {/* Expanded Content */}
                <div className={`transition-all duration-500 ease-in-out ${
                  expandedIndex === index 
                    ? 'max-h-[800px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pl-[52px]">
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Total Experience Summary */}
        <FadeInUp delay={400}>
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground text-sm uppercase tracking-wide">Total Experience</p>
                <p className="text-3xl font-bold text-foreground mt-1">5.5+ Years</p>
              </div>
              <div className="flex gap-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">3</p>
                  <p className="text-sm text-muted-foreground">Companies</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">$2M+</p>
                  <p className="text-sm text-muted-foreground">Ad Spend Managed</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
