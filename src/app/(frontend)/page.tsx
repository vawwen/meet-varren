import './styles.css'
import Header from '@/app/(frontend)/pages/Header'
import Home from './pages/Home'
import Footer from './pages/Footer'
import { ThemeProvider } from './context/ThemeContext'

export default function HomePage() {
  return (
    <div className="home">
      <div className="content-wrapper">
        <div className="content">
          <ThemeProvider>
            <Header />
            <Home />
            <Footer />
          </ThemeProvider>
        </div>
      </div>
    </div>
  )
}
