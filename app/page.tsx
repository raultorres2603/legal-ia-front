'use client'

import Footer from '@/components/layout/Footer'
import NavBar from '@/components/layout/NavBar'
import { useTheme } from '@/hooks/useTheme'
import { useState } from 'react'

export default function Home() {
  const { theme, isLoading } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tech-blue"></div>
      </div>
    )
  }

  const features = [
    {
      title: 'IA Avanzada',
      description: 'Motor de inteligencia artificial especializado en análisis legal'
    },
    {
      title: 'Velocidad Extrema',
      description: 'Análisis completo de contratos automatizados vs 2-3 horas manual'
    },
    {
      title: 'Seguridad Total',
      description: 'Encriptación, antivirus, cumplimiento completo con GDPR y normativas locales'
    },
    {
      title: 'Análisis Profundo',
      description: 'Identificación automática de riesgos, cláusulas problemáticas y sugerencias de mejora'
    },
    {
      title: 'Precisión Legal',
      description: 'Entrenado con documentos legales y jurisprudencia actualizada'
    },
    {
      title: 'ROI Garantizado',
      description: 'Reduce costos operativos hasta 80% y aumenta la productividad del equipo legal'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary text-3xl md:text-5xl font-bold mb-6">
              Potencia tus documentos con IA de Vanguardia
            </h2>
            <p className="text-secondary text-xl max-w-3xl mx-auto">
              Descubre cómo LegalIA está transformando la industria legal con tecnología
              de inteligencia artificial específicamente diseñada para profesionales del derecho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-primary rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-primary text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
