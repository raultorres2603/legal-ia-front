// Exportaciones principales del sistema de temas
export { ThemeProvider, useTheme as useThemeContext } from '@/contexts/ThemeContext'
export { useTheme, useThemeClasses } from '@/hooks/useTheme'
export { default as ThemeToggle } from '@/components/ThemeToggle'

// Tipos y constantes útiles
export type Theme = 'light' | 'dark'

export const themeColors = {
  light: {
    legalGold: '#F4B942',
    techBlue: '#1E88E5',
    corporateGray: '#4A5568',
    bgPrimary: '#FFFFFF',
    bgSecondary: '#F8F9FA',
    textPrimary: '#2C3E50',
    textSecondary: '#6C757D',
    success: '#28A745',
    error: '#DC3545',
  },
  dark: {
    legalGold: '#D4A92A',
    techBlue: '#1565C0',
    corporateGray: '#718096',
    bgPrimary: '#0F172A',
    bgSecondary: '#1A1A1A',
    textPrimary: '#E2E8F0',
    textSecondary: '#94A3B8',
    success: '#22C55E',
    error: '#EF4444',
  },
} as const
