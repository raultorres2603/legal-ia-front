'use client'

import { useTheme } from '@/hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function ThemeToggle({ className = '', size = 'md' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  const sizeClasses = {
    sm: 'w-12 h-6',
    md: 'w-14 h-7',
    lg: 'w-16 h-8'
  }

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }

  const translateClasses = {
    sm: theme === 'light' ? 'translate-x-1' : 'translate-x-6',
    md: theme === 'light' ? 'translate-x-1' : 'translate-x-7',
    lg: theme === 'light' ? 'translate-x-1' : 'translate-x-9'
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center rounded-full p-1
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${theme === 'light'
          ? 'bg-gradient-to-r from-yellow-200 to-yellow-300 focus:ring-yellow-500'
          : 'bg-gradient-to-r from-blue-900 to-purple-900 focus:ring-blue-500'
        }
        ${sizeClasses[size]}
        ${className}
      `}
      aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      {/* Toggle circle */}
      <div className={`
        ${translateClasses[size]}
      `}>
        {theme === 'light' ? (
          <Sun className={`${iconSizes[size]} text-black`} />
        ) : (
          <Moon className={`${iconSizes[size]} text-white`} />
        )}
      </div>

      {/* Hidden label for screen readers */}
      <span className="sr-only">
        {theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
      </span>
    </button>
  )
}
