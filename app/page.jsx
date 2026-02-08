import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AnimatedBackground, FloatingShapes } from '@/components/animated-background'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ExperienceSection } from '@/components/sections/experience'
import { ProjectsSection } from '@/components/sections/projects'
import { SkillsSection } from '@/components/sections/skills'
import { EducationSection } from '@/components/sections/education'
import { AchievementsSection } from '@/components/sections/achievements'
import { ContactSection } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Animated Background */}
      <AnimatedBackground />
      <FloatingShapes />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        {/* <AchievementsSection /> */}
        <ContactSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
