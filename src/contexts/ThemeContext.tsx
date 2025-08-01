'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  isLoading: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Función para obtener el tema inicial
    const getInitialTheme = (): Theme => {
      // Primero intentar desde localStorage
      try {
        const savedTheme = localStorage.getItem('legal-ia-theme')
        if (savedTheme === 'light' || savedTheme === 'dark') {
          return savedTheme
        }
      } catch (error) {
        console.warn('Error accessing localStorage:', error)
      }

      // Si no hay tema guardado, usar preferencia del sistema
      try {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark'
        }
      } catch (error) {
        console.warn('Error accessing media query:', error)
      }

      // Por defecto, usar tema claro
      return 'light'
    }

    const initialTheme = getInitialTheme()
    setThemeState(initialTheme)
    setIsLoading(false)

    // Aplicar el tema inmediatamente
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(initialTheme)
  }, [])

  // Aplicar cambios de tema
  useEffect(() => {
    if (isLoading) return

    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)

    // Guardar en localStorage
    try {
      localStorage.setItem('legal-ia-theme', theme)
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error)
    }
  }, [theme, isLoading])

  const toggleTheme = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light')
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
    isLoading,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Hook adicional para componentes que necesitan saber si el tema está cargando
export function useThemeWithLoading() {
  return useTheme()
}
