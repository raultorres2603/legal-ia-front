'use client'

import ThemeToggle from '@/components/ThemeToggle'
import { useTheme } from '@/hooks/useTheme'

export default function Home() {
  const { theme, isLoading } = useTheme()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
      </div>
    )
  }

  return (
    <div>
    </div>
  )
}
