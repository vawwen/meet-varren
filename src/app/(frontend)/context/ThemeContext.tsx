'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type ThemeContextType = {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('isdark')

    if (savedTheme !== null) {
      setIsDark(JSON.parse(savedTheme))
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
    }
  }, [])

  useEffect(() => {
    if (isDark === null) return

    const themeValue = isDark ? 'dark' : 'light'
    localStorage.setItem('isdark', JSON.stringify(isDark))
    document.documentElement.setAttribute('data-theme', themeValue)
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ isDark: isDark ?? false, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
