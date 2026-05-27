'use client'

import { useEffect, useState } from 'react'

type LiveTimeProps = {
  zone: 'HKT' | 'WIB' | string
}

const timezoneMap: Record<string, string> = {
  HKT: 'Asia/Hong_Kong',
  WIB: 'Asia/Jakarta',
}

export default function LiveTime({ zone }: LiveTimeProps) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const resolvedZone = timezoneMap[zone] || zone

    const updateTime = () => {
      try {
        const now = new Date()

        // Formats to: "Thu, 02:25"
        const formattedDate = now.toLocaleTimeString('en-US', {
          timeZone: resolvedZone,
          weekday: 'short', // Gives us "Thu"
          hour: '2-digit', // Gives us "02"
          minute: '2-digit', // Gives us "25"
          hour12: false, // Forces 24-hour style instead of AM/PM strings
        })

        // Clean up the native comma divider and push text to uppercase: "THU 02:25"
        const cleanString = formattedDate.replace(',', '').toUpperCase()

        setTime(cleanString)
      } catch (error) {
        console.error(`Invalid timezone provided: ${zone}`, error)
        setTime('INVALID TIMEZONE')
      }
    }

    updateTime()

    // Pro-Tip: Since we removed seconds, updating every 1000ms is no longer strictly
    // required, but keeping it ensures the minute hand flips precisely right on time!
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [zone])

  if (time === null) {
    return <span className="text-[14px] text-base-content/50 font-mono">--- --:-- ---</span>
  }

  return (
    <span className="font-medium text-base-content/80 font-mono text-[14px]">
      {`${time} ${zone}`}
    </span>
  )
}
