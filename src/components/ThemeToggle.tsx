'use client'

import { useTheme } from '@/hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      {/* Toggle circle */}
      <div>
        {theme === 'light' ? (
          <Sun className={`w-4 h-4 text-black`} />
        ) : (
          <Moon className={`w-4 h-4 text-white`} />
        )}
      </div>

      {/* Hidden label for screen readers */}
      <span className="sr-only">
        {theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
      </span>
    </button>
  )
}
