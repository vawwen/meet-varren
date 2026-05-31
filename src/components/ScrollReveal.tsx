'use client' // Required for hooks and DOM access

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
}

export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger the fade-up by swapping Tailwind classes
          entry.target.classList.remove('opacity-0', 'translate-y-8')
          entry.target.classList.add('opacity-100', 'translate-y-0')

          // Stop observing once animated so it stays visible
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.12, // Triggers when 12% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Triggers slightly before it hits the viewport
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={`opacity-0 translate-y-8 transition-all duration-[1000ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] will-change-transform ${className}`}
    >
      {children}
    </div>
  )
}
