'use client'

import { useEffect, useState } from 'react'

export default function RotatingSubtitle() {
  const phrases = ['Full-Stack Developer', 'Stardew Farmer', 'LeBron Glazer', 'UI/UX Designer']
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        setFade(true)
      }, 500)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <p
      className={`text-[14px] text-base-content/70 transition-opacity duration-300 ease-in-out ${
        fade ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {phrases[index]}
    </p>
  )
}
