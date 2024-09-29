import { ThemeProvider } from './ThemeContext'
import Header from './pages/Header'
import MainContent from './pages/MainContent'
import Footer from './pages/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-200">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider>
  )
}