import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image src="/logo.png" alt="LegalIA Logo" width={64} height={64} />

              <div>
                <h3 className="text-primary text-2xl font-bold">LegalIA</h3>
                <p className="text-muted">Inteligencia Artificial Legal</p>
              </div>
            </div>
            <p className="text-secondary text-lg leading-relaxed mb-6 max-w-md">
              Revolucionamos la industria legal con tecnología de vanguardia. Nuestro motor de IA analiza contratos, identifica riesgos y optimiza procesos legales.
            </p>
          </div>

          <div>
            <h4 className="text-primary font-bold text-lg mb-6">Producto</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-corporate-gray hover:text-tech-blue transition-colors">Análisis de Contratos</a></li>
              <li><a href="#" className="text-corporate-gray hover:text-tech-blue transition-colors">Gestión de Riesgos</a></li>
              <li><a href="#" className="text-corporate-gray hover:text-tech-blue transition-colors">Plantillas Legales</a></li>
              <li><a href="#" className="text-corporate-gray hover:text-tech-blue transition-colors">API para Desarrolladores</a></li>
              <li><a href="#" className="text-corporate-gray hover:text-tech-blue transition-colors">Integraciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-lg mb-6">Soporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-corporate-gray hover:text-tech-blue transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-corporate-gray hover:text-tech-blue transition-colors">Documentación</a></li>
              <li><a href="#" className="text-corporate-gray hover:text-tech-blue transition-colors">Capacitaciones</a></li>
              <li><a href="#" className="text-corporate-gray hover:text-tech-blue transition-colors">Estado del Sistema</a></li>
              <li><a href="#" className="text-corporate-gray hover:text-tech-blue transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted">
            &copy; 2025 LegalIA. Todos los derechos reservados. Transformando el futuro legal con IA.
          </p>
        </div>
      </div>
    </footer>
  )
}