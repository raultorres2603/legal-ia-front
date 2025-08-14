import ThemeToggle from "../ThemeToggle"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface NavBarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function NavBar({ isMenuOpen, setIsMenuOpen }: NavBarProps) {
  const router = useRouter()


  return (
    <nav className="bg-secondary/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="LegalIA Logo" width={48} height={48} />
            <div>
              <h1 className="text-primary text-xl font-bold">LegalIA</h1>
              <p className="text-muted text-xs">Inteligencia Artificial Legal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-corporate-gray hover:text-tech-blue transition-colors font-medium">
              Características
            </a>
            <a href="#contact" className="text-corporate-gray hover:text-tech-blue transition-colors font-medium">
              Contacto
            </a>
            <button
              onClick={() => router.push('/register')}
              className="bg-tech-blue text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all cursor-pointer">
              Registrate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-corporate-gray hover:text-tech-blue p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-corporate-gray hover:text-tech-blue transition-colors font-medium">
                Características
              </a>
              <a href="#features" className="text-corporate-gray hover:text-tech-blue transition-colors font-medium">
                Contacto
              </a>
              <button
                onClick={() => router.push('/register')}
                className="bg-tech-blue text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all w-fit">
                Registrate
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}