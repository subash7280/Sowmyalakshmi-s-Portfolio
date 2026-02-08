'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export function FadeInUp({ children, delay = 0, className }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function FadeInLeft({ children, delay = 0, className }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-10',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function FadeInRight({ children, delay = 0, className }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-10',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function ScaleIn({ children, delay = 0, className }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-90',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function StaggerContainer({ children, className, staggerDelay = 100 }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                'transition-all duration-500 ease-out',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${index * staggerDelay}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}

export function TextReveal({ children, className }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <div
        className={cn(
          'transition-transform duration-700 ease-out',
          isVisible ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function CountUp({ end, duration = 2000, suffix = '', className }) {
  const { ref, isVisible } = useScrollAnimation()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime
    const startValue = 0

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * (end - startValue) + startValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}
