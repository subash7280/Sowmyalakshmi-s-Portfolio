'use client'

import { FadeInUp, FadeInLeft, FadeInRight, CountUp } from '@/components/scroll-animations'

function TrophyIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
    </svg>
  )
}

function StarIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function SparklesIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  )
}

const achievements = [
  {
    title: 'Top Performer Award',
    organization: 'TechGrowth Solutions',
    year: '2024',
    description: 'Recognized for driving 180% increase in organic traffic and exceeding quarterly targets consistently.',
    icon: TrophyIcon
  },
  {
    title: 'Marketing Excellence Award',
    organization: 'Digital Marketing Association',
    year: '2023',
    description: 'Awarded for innovative campaign strategies that achieved record-breaking ROI for clients.',
    icon: StarIcon
  },
  {
    title: 'Best Campaign of the Year',
    organization: 'RealEstate Pro',
    year: '2022',
    description: 'Lead generation campaign recognized as the most successful in company history.',
    icon: SparklesIcon
  },
  {
    title: 'Rising Star Award',
    organization: 'Digital Ventures Inc.',
    year: '2020',
    description: 'Recognized for exceptional growth and contributions within the first two years.',
    icon: StarIcon
  }
]

const testimonials = [
  {
    quote: "An exceptional marketer who combines analytical rigor with creative strategy. She transformed our digital presence and delivered results beyond expectations.",
    author: "John Smith",
    role: "CEO, TechGrowth Solutions",
    avatar: "JS"
  },
  {
    quote: "Her data-driven approach to marketing is refreshing. She doesn't just run campaigns; she optimizes them to perfection.",
    author: "Sarah Johnson",
    role: "Marketing Director, RealEstate Pro",
    avatar: "SJ"
  },
  {
    quote: "Working with her was a game-changer for our lead generation. Highly recommended for any B2B marketing initiatives.",
    author: "Michael Chen",
    role: "VP of Sales, SaaS Company",
    avatar: "MC"
  }
]

const impactStats = [
  { value: 10, suffix: 'M+', label: 'Total Traffic Generated' },
  { value: 500, suffix: 'K+', label: 'Leads Generated' },
  { value: 2, suffix: 'M+', label: 'Ad Spend Managed' },
  { value: 200, suffix: '%', label: 'Avg Traffic Increase' }
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <FadeInUp>
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Recognition</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Achievements & Impact
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>
        </FadeInUp>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <FadeInUp key={stat.label} delay={index * 100}>
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <FadeInUp key={achievement.title} delay={index * 100}>
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-primary text-sm font-medium mb-2">{achievement.organization}</p>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Testimonials */}
        <FadeInUp>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground">What People Say</h3>
          </div>
        </FadeInUp>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeInUp key={testimonial.author} delay={index * 100}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="text-primary/20 mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
