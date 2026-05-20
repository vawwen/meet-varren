'use client'

import React from 'react'
import './styles.css'

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" data-theme="light">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
