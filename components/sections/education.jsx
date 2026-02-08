'use client'

import { FadeInUp, FadeInLeft, FadeInRight } from '@/components/scroll-animations'

function AcademicCapIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  )
}

function BookOpenIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  )
}

const education = [
  {
    degree: 'Master of Business Administration (MBA)',
    field: 'Marketing Specialization',
    institution: 'University Name',
    location: 'City, State',
    period: '2018 - 2020',
    highlights: [
      'Specialized in Digital Marketing and Analytics',
      'Graduated with Distinction (GPA: 3.8/4.0)',
      'Thesis: "Impact of Data-Driven Marketing on ROI"',
      'Marketing Club President'
    ]
  },
  {
    degree: 'Bachelor of Business Administration (BBA)',
    field: 'Business Management',
    institution: 'University Name',
    location: 'City, State',
    period: '2014 - 2018',
    highlights: [
      'Minor in Information Technology',
      'Dean\'s List - All Semesters',
      'Led university\'s digital marketing initiatives',
      'Internship at leading marketing agency'
    ]
  }
]

const courses = [
  {
    name: 'Advanced Google Analytics',
    provider: 'Google',
    year: '2024'
  },
  {
    name: 'Digital Marketing Specialization',
    provider: 'Coursera',
    year: '2023'
  },
  {
    name: 'Growth Marketing Certification',
    provider: 'GrowthSchool',
    year: '2023'
  },
  {
    name: 'SQL for Data Analysis',
    provider: 'Udemy',
    year: '2022'
  },
  {
    name: 'Marketing Analytics',
    provider: 'edX',
    year: '2022'
  },
  {
    name: 'Content Marketing Strategy',
    provider: 'HubSpot Academy',
    year: '2021'
  }
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <FadeInUp>
          <div className="text-center mb-16">
            <span className="text-primary font-medium">My Background</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>
        </FadeInUp>

        {/* Education Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <FadeInUp key={edu.degree} delay={index * 100}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <AcademicCapIcon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.field}</p>
                  </div>
                </div>

                <div className="pl-18 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Continuous Learning */}
        <FadeInUp>
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpenIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Continuous Learning</h3>
                <p className="text-muted-foreground">Online courses & certifications</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course, index) => (
                <div
                  key={course.name}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-foreground text-sm truncate">{course.name}</h4>
                    <p className="text-xs text-muted-foreground">{course.provider} • {course.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
