import React from 'react'
import './styles.css'
import { Metadata } from 'next'
import { ThemeProvider } from './context/ThemeContext'

// Metadata works perfectly here now because this is a Server Component
export const metadata: Metadata = {
  title: 'Meet Varren!',
  description:
    "Welcome to Varren's personal website, where you can explore his projects, learn about his skills, and get in touch with him.",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeInitializerScript = `
    (function() {
      try {
        const savedTheme = localStorage.getItem('isdark');
        let isDark = false;
        if (savedTheme !== null) {
          isDark = JSON.parse(savedTheme);
        } else {
          isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      } catch (e) {}
    })();
  `

  return (
    <html lang="en" data-theme="light" className="bg-base-100">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
      </head>
      <body className="bg-base-100 text-base-content">
        <main>{children}</main>
      </body>
    </html>
  )
}
