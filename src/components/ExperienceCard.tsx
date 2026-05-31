import React from 'react'

interface ExperienceCardProps {
  companyName: string
  position: string
  timeline: string
  description: React.ReactNode
  logoSrc?: string
  accentClass?: string
}

export default function ExperienceCard({
  companyName,
  position,
  timeline,
  description,
  logoSrc,
  accentClass = 'border-neutral',
}: ExperienceCardProps) {
  return (
    <div
      className={`w-full rounded-2xl border border-base-content/10 bg-base-100/40 backdrop-blur-md p-6 transition-all duration-300 hover:${accentClass} hover:shadow-lg group`}
    >
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center md:text-2xl tracking-tight overflow-hidden shadow-md border border-base-content/5">
          <img src={logoSrc} alt={`${companyName} logo`} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 min-w-0 w-full space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="text-xl xl:text-2xl font-semibold text-base-content tracking-tight transition-colors duration-200 leading-snug text-left">
              {companyName}
            </h3>
            <span className="text-base md:text-lg xl:text-xl text-base-content/80 font-semibold opacity-60 sm:text-right">
              {timeline}
            </span>
          </div>

          <div className="text-base md:text-lg xl:text-xl text-base-content/80">{position}</div>

          <div className="w-full h-[1px] bg-base-content/5 my-2" />

          <div className="text-base md:text-lg xl:text-xl text-base-content/80 leading-relaxed pt-1">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}
