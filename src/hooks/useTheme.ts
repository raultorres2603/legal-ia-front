'use client'

import { useTheme as useThemeContext } from '@/contexts/ThemeContext'

export function useTheme() {
  return useThemeContext()
}

// Hook for get current them classes
export function useThemeClasses() {
  const { theme, isLoading } = useTheme()

  // If is loading, use default classes
  if (isLoading) {
    return {
      bgPrimary: 'bg-white',
      bgSecondary: 'bg-gray-50',
      bgTertiary: 'bg-gray-100',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textMuted: 'text-gray-500',
      legalGold: 'text-yellow-500',
      legalGoldBg: 'bg-yellow-500',
      techBlue: 'text-blue-600',
      techBlueBg: 'bg-blue-600',
      border: 'border-gray-200',
      borderSecondary: 'border-gray-300',
      success: 'text-green-600',
      successBg: 'bg-green-600',
      error: 'text-red-600',
      errorBg: 'bg-red-600',
      warning: 'text-yellow-600',
      warningBg: 'bg-yellow-600',
      info: 'text-blue-600',
      infoBg: 'bg-blue-600',
      shadow: 'shadow-lg',
      cardShadow: 'shadow-md',
    }
  }

  return {
    // Backgrounds
    bgPrimary: theme === 'light' ? 'bg-white' : 'bg-gray-900',
    bgSecondary: theme === 'light' ? 'bg-gray-50' : 'bg-gray-800',
    bgTertiary: theme === 'light' ? 'bg-gray-100' : 'bg-gray-700',

    // Text colors
    textPrimary: theme === 'light' ? 'text-gray-900' : 'text-gray-100',
    textSecondary: theme === 'light' ? 'text-gray-600' : 'text-gray-300',
    textMuted: theme === 'light' ? 'text-gray-500' : 'text-gray-400',

    // Colors
    legalGold: theme === 'light' ? 'text-yellow-500' : 'text-yellow-400',
    legalGoldBg: theme === 'light' ? 'bg-yellow-500' : 'bg-yellow-400',
    techBlue: theme === 'light' ? 'text-blue-600' : 'text-blue-400',
    techBlueBg: theme === 'light' ? 'bg-blue-600' : 'bg-blue-400',

    // Bordes
    border: theme === 'light' ? 'border-gray-200' : 'border-gray-600',
    borderSecondary: theme === 'light' ? 'border-gray-300' : 'border-gray-500',

    // States
    success: theme === 'light' ? 'text-green-600' : 'text-green-400',
    successBg: theme === 'light' ? 'bg-green-600' : 'bg-green-400',
    error: theme === 'light' ? 'text-red-600' : 'text-red-400',
    errorBg: theme === 'light' ? 'bg-red-600' : 'bg-red-400',
    warning: theme === 'light' ? 'text-yellow-600' : 'text-yellow-400',
    warningBg: theme === 'light' ? 'bg-yellow-600' : 'bg-yellow-400',
    info: theme === 'light' ? 'text-blue-600' : 'text-blue-400',
    infoBg: theme === 'light' ? 'bg-blue-600' : 'bg-blue-400',

    // Shadows
    shadow: theme === 'light' ? 'shadow-lg' : 'shadow-2xl shadow-black/20',
    cardShadow: theme === 'light' ? 'shadow-md' : 'shadow-xl shadow-black/10',
  }
}

/**
 * Hook for check if theme is available (not loading)
 * @returns True if theme is available, otherwise false
 */
export function useThemeReady() {
  const { isLoading } = useTheme()
  return !isLoading
}
