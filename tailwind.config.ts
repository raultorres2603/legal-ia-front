import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'legal-gold-light': '#F4B942',
        'legal-gold-dark': '#D4A92A',
        'tech-blue-light': '#1E88E5',
        'tech-blue-dark': '#1565C0',
        'corporate-gray-light': '#4A5568',
        'corporate-gray-dark': '#718096',

        'background-primary-light': '#FFFFFF',
        'background-primary-dark': '#0F0F0F',
        'background-secondary-light': '#F8F9FA',
        'background-secondary-dark': '#1A1A1A',
        'background-tertiary-light': '#E9ECEF',
        'background-tertiary-dark': '#2D3748',

        'text-primary-light': '#2C3E50',
        'text-primary-dark': '#E2E8F0',
        'text-secondary-light': '#6C757D',
        'text-secondary-dark': '#94A3B8',
        'text-muted-light': '#9CA3AF',
        'text-muted-dark': '#64748B',

        // Estados
        'success-light': '#28A745',
        'success-dark': '#22C55E',
        'error-light': '#DC3545',
        'error-dark': '#EF4444',
        'warning-light': '#FFC107',
        'warning-dark': '#F59E0B',
        'info-light': '#17A2B8',
        'info-dark': '#0EA5E9',

        // Bordes
        'border-primary-light': '#E2E8F0',
        'border-primary-dark': '#4A5568',
        'border-secondary-light': '#CBD5E0',
        'border-secondary-dark': '#718096',
      },

      // Gradientes personalizados
      backgroundImage: {
        'legal-gradient-light': 'linear-gradient(135deg, #F4B942 0%, #1E88E5 100%)',
        'legal-gradient-dark': 'linear-gradient(135deg, #D4A92A 0%, #1565C0 100%)',
      },

      // Sombras personalizadas
      boxShadow: {
        'legal-light': '0 10px 30px rgba(244, 185, 66, 0.15)',
        'legal-dark': '0 10px 30px rgba(212, 169, 42, 0.15)',
        'tech-light': '0 4px 15px rgba(30, 136, 229, 0.3)',
        'tech-dark': '0 4px 15px rgba(21, 101, 192, 0.3)',
        'card-light': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'card-dark': '0 2px 8px rgba(0, 0, 0, 0.3)',
      },

      // Transiciones personalizadas
      transitionProperty: {
        'theme': 'background-color, border-color, color, fill, stroke, box-shadow',
      },
    },
  },
  plugins: [],
}

export default config
