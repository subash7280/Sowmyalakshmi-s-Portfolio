'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FadeInUp, FadeInLeft, FadeInRight } from '@/components/scroll-animations'

function ArrowDownIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function TwitterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function EmailIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}

const roles = [
  'Digital Marketing Analyst',
  'SEO Specialist',
  'Marketing Strategist',
  'Data-Driven Marketer',
  'Growth Expert'
]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseDuration = 2000

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseDuration)
      return
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      )
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <FadeInLeft>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Available for opportunities</span>
              </div>
            </FadeInLeft>

            <FadeInLeft delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I&apos;m{' '}
                <span className="text-primary">Your Name</span>
              </h1>
            </FadeInLeft>

            <FadeInLeft delay={200}>
              <div className="text-2xl md:text-3xl text-muted-foreground">
                <span>{displayText}</span>
                <span className="animate-pulse text-primary">|</span>
              </div>
            </FadeInLeft>

            <FadeInLeft delay={300}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Results-driven digital marketing professional with{' '}
                <span className="text-foreground font-semibold">5.5 years</span> of experience 
                driving revenue through strategic online marketing and SEO techniques. 
                Passionate about turning complex data into actionable insights.
              </p>
            </FadeInLeft>

            <FadeInLeft delay={400}>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group"
                  asChild
                >
                  <a href="#contact">
                    Get In Touch
                    <ArrowDownIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-border hover:bg-muted group bg-transparent"
                  asChild
                >
                  <a href="#projects">
                    View My Work
                  </a>
                </Button>
              </div>
            </FadeInLeft>

            <FadeInLeft delay={500}>
              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm text-muted-foreground">Find me on</span>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    aria-label="Email"
                  >
                    <EmailIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </FadeInLeft>
          </div>

          {/* Right Content - Stats Card */}
          <FadeInRight delay={200}>
            <div className="relative">
              {/* Main Stats Card */}
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-xl bg-muted/50">
                    <div className="text-3xl md:text-4xl font-bold text-primary">5.5+</div>
                    <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-muted/50">
                    <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-muted/50">
                    <div className="text-3xl md:text-4xl font-bold text-primary">150%</div>
                    <div className="text-sm text-muted-foreground mt-1">Avg ROI Increase</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-muted/50">
                    <div className="text-3xl md:text-4xl font-bold text-primary">10M+</div>
                    <div className="text-sm text-muted-foreground mt-1">Traffic Generated</div>
                  </div>
                </div>

                {/* Tools Section */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Tools I work with</p>
                  <div className="flex flex-wrap gap-2">
                    {['Google Analytics', 'SEMrush', 'HubSpot', 'Ahrefs', 'Meta Ads'].map((tool) => (
                      <span 
                        key={tool}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-xl animate-float" />
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm">Scroll Down</span>
          <ArrowDownIcon className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
