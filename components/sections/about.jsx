'use client'

import Image from "next/image";
import { FadeInUp, FadeInLeft, FadeInRight, CountUp } from '@/components/scroll-animations'

const quickFacts = [
  { label: 'Location', value: 'City, State' },
  { label: 'Experience', value: '5.5+ Years' },
  { label: 'Speciality', value: 'SEO & Analytics' },
  { label: 'Industries', value: 'SaaS, Real Estate' },
]

const services = [
  {
    title: 'SEO Strategy',
    description: 'Technical audits, keyword research, on-page optimization, and link building to grow organic traffic.',
  },
  {
    title: 'Paid Advertising',
    description: 'Google Ads, Meta Ads, and LinkedIn campaigns with advanced targeting and budget optimization.',
  },
  {
    title: 'Marketing Analytics',
    description: 'GA4 setup, dashboards, attribution modeling, and data-driven insights for smarter decisions.',
  },
  {
    title: 'Content Strategy',
    description: 'Blog content, whitepapers, and email funnels designed to attract, engage, and convert.',
  },
]

const imageUrl = "/image2.jpeg";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section label */}
        <FadeInUp>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">About Me</p>
        </FadeInUp>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-5">

          {/* Main bio - large card */}
          <FadeInUp delay={50} className="md:col-span-6 lg:col-span-7">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6 text-balance">
                  Turning data into growth strategies that actually work.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I&apos;m a results-driven Digital Marketing Analyst with over 5.5 years of experience
                  supporting diverse projects and driving revenue through strategic online marketing
                  and SEO techniques. I specialize in turning complex data into actionable insights
                  that enhance campaign performance and maximize ROI.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;ve worked on high-impact marketing projects across the SaaS and real estate sectors,
                  using tools like Google Analytics, SEMrush, and HubSpot to fuel growth. My approach
                  combines analytical rigor with creative strategy to deliver measurable results.
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Profile card */}
          <FadeInUp delay={100} className="md:col-span-3 lg:col-span-5">
            <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-5 ring-2 ring-primary/20 ring-offset-4 ring-offset-card">
                {
                  (imageUrl)
                    ?
                    (
                      <Image
                        src={imageUrl}
                        alt="Sowmyalakshmi"
                        width={500}
                        height={100}
                        className="object-cover"
                      />
                    )
                    :
                    (
                      <span className="text-3xl font-bold text-primary">SL</span>
                    )
                }
              </div>

              <h3 className="text-xl font-bold text-foreground">Sowmyalakshmi</h3>

              <p className="text-muted-foreground text-sm mt-1 mb-5">Digital Marketing Analyst</p>

              <div className="flex items-center gap-2 text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />

                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>

                <span className="text-muted-foreground">Open to opportunities</span>
              </div>
            </div>
          </FadeInUp>

          {/* Quick facts */}
          <FadeInUp delay={150} className="md:col-span-3 lg:col-span-5">
            <div className="bg-card border border-border rounded-2xl p-6 h-full">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-5">Quick Facts</h3>
              <div className="space-y-4">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0">
                    <span className="text-sm text-muted-foreground">{fact.label}</span>
                    <span className="text-sm font-semibold text-foreground">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Stats row */}
          <FadeInUp delay={200} className="md:col-span-6 lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-full">
              {[
                { value: 50, suffix: '+', label: 'Campaigns' },
                { value: 150, suffix: '%', label: 'Avg ROI Boost' },
                { value: 10, suffix: 'M+', label: 'Traffic Driven' },
                { value: 25, suffix: '+', label: 'Happy Clients' },
              ].map((stat, i) => (
                <div key={stat.label} className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl md:text-3xl font-bold text-primary">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs text-muted-foreground mt-1.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeInUp>

          {/* What I Do - services grid spanning full width */}
          <FadeInUp delay={250} className="md:col-span-6 lg:col-span-12">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">What I Do</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, i) => (
                  <div key={service.title} className="group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>

        </div>
      </div>
    </section>
  )
}
