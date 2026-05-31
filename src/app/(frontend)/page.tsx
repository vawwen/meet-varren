import './styles.css'
import Header from '@/app/(frontend)/pages/Header'
import Home from './pages/Home'
import Footer from './pages/Footer'
import { ThemeProvider } from './context/ThemeContext'
import Investment from './pages/Investment'
import Hobby from './pages/Hobby'
import Skills from './pages/Skills'

export default function HomePage() {
  return (
    <div className="home">
      <div className="content-wrapper">
        <div className="content">
          <ThemeProvider>
            <Header />
            <Home />
            <Skills />
            <Investment />
            <Hobby />
            <Footer />
          </ThemeProvider>
        </div>
      </div>
    </div>
  )
}
