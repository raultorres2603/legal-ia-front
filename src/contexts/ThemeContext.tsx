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
    // Function to get the initial theme
    const getInitialTheme = (): Theme => {
      // First try to get the theme from localStorage
      try {
        const savedTheme = localStorage.getItem('legal-ia-theme')
        if (savedTheme === 'light' || savedTheme === 'dark') {
          return savedTheme
        }
      } catch (error) {
        console.warn('Error accessing localStorage:', error)
      }

      // If no theme is saved, use system preference
      try {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark'
        }
      } catch (error) {
        console.warn('Error accessing media query:', error)
      }

      // Default theme is light
      return 'light'
    }

    const initialTheme = getInitialTheme()
    setThemeState(initialTheme)
    setIsLoading(false)

    // Apply the theme immediately
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(initialTheme)
  }, [])

  // Apply changes on theme
  useEffect(() => {
    if (isLoading) return

    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)

    // Save theme in localStorage
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

// Additional hook for components that need to know if the theme is loading
export function useThemeWithLoading() {
  return useTheme()
}
