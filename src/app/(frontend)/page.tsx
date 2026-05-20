import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import Header from '@/components/Header'
import Home from './pages/Home'
import Footer from './pages/Footer'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  // href={payloadConfig.routes.admin}

  return (
    <div className="home">
      <Header />
      <div className="content-wrapper">
        <div className="content">
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  )
}
