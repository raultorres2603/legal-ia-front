# 🎨 LegalIA Frontend

Aplicación frontend moderna para servicios legales con inteligencia artificial, construida con **Next.js 15**, **TypeScript**, y **Tailwind CSS v4**.

## ✨ Características Principales

- 🌓 **Sistema de Temas Dual** - Modo claro y oscuro con paleta legal personalizada
- ⚡ **Next.js 15** - App Router con las últimas características
- 🎨 **Tailwind CSS v4** - Estilos utilitarios con configuración personalizada
- 📱 **Responsive Design** - Optimizado para todos los dispositivos
- 🔒 **TypeScript** - Tipado estático para mejor desarrollo
- 🎯 **Componentes Legales** - Librería de componentes especializados
- 🚀 **Performance** - Optimizado para velocidad y SEO

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🎨 Sistema de Temas

Este proyecto incluye un sistema completo de temas claro/oscuro diseñado específicamente para aplicaciones legales:

### Paleta de Colores Legal

| Elemento | Modo Claro | Modo Oscuro | Uso |
|----------|------------|-------------|-----|
| **Dorado Legal** | `#F4B942` | `#D4A92A` | Títulos, certificaciones |
| **Azul Tech** | `#1E88E5` | `#1565C0` | Botones, enlaces |
| **Gris Corporativo** | `#4A5568` | `#718096` | Texto secundario |
| **Fondo Principal** | `#FFFFFF` | `#0F0F0F` | Fondo de aplicación |
| **Fondo Secundario** | `#F8F9FA` | `#1A1A1A` | Cards, modales |

### Uso del Sistema de Temas

```tsx
import { useTheme } from '@/hooks/useTheme'
import ThemeToggle from '@/components/ThemeToggle'

function MyComponent() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div className="bg-white dark:bg-gray-900">
      <h1 className="text-legal-gold">LegalIA</h1>
      <button className="bg-tech-blue text-white">
        Acción Principal
      </button>
      <ThemeToggle />
    </div>
  )
}
```

Ver documentación completa: [THEME_SYSTEM.md](./THEME_SYSTEM.md)

## 📁 Estructura del Proyecto

```
legal-ia-front/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales y variables CSS
│   ├── layout.tsx         # Layout principal con ThemeProvider
│   └── page.tsx           # Página de inicio/demostración
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── ThemeToggle.tsx
│   │   └── LegalComponents.tsx
│   ├── contexts/         # Contextos de React
│   │   └── ThemeContext.tsx
│   ├── hooks/            # Hooks personalizados
│   │   └── useTheme.ts
│   ├── services/         # Servicios y APIs
│   ├── types/            # Definiciones de TypeScript
│   └── theme/            # Sistema de temas
│       └── index.ts
├── public/               # Archivos estáticos
├── tailwind.config.ts    # Configuración de Tailwind
└── tsconfig.json         # Configuración de TypeScript
```

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript 5+
- **Estilos**: Tailwind CSS v4
- **Estado**: React Context API
- **Herramientas**: ESLint, PostCSS

## 🎯 Componentes Legales

El proyecto incluye componentes especializados para aplicaciones legales:

### LegalCard
```tsx
<LegalCard 
  title="Contrato de Servicios"
  status="approved"
  description="Documento legal procesado"
  date="2025-01-15"
  type="contract"
/>
```

### LegalForm
```tsx
<LegalForm />
```

### LegalNavigation
```tsx
<LegalNavigation />
```

## 🔧 Configuración

### Variables de Entorno
Crea un archivo `.env.local`:

```env
# Configuración de la aplicación
NEXT_PUBLIC_APP_NAME=LegalIA
NEXT_PUBLIC_APP_URL=http://localhost:3000

# APIs y servicios
NEXT_PUBLIC_API_URL=your-api-url
```

### Personalización de Temas

Edita `tailwind.config.ts` para personalizar colores:

```ts
theme: {
  extend: {
    colors: {
      'legal-gold': {
        light: '#F4B942',
        dark: '#D4A92A',
      },
      // Añade más colores...
    }
  }
}
```

## 📱 Características Responsive

- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: CSS Grid y Flexbox para layouts complejos
- **Touch Friendly**: Elementos táctiles optimizados para móviles

## 🔒 Seguridad y Performance

- **CSP Headers**: Content Security Policy configurado
- **Image Optimization**: Optimización automática de imágenes
- **Bundle Analysis**: Análisis de tamaño de bundles
- **Tree Shaking**: Eliminación de código no utilizado
- **Code Splitting**: Carga bajo demanda de componentes

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t legal-ia-front .
docker run -p 3000:3000 legal-ia-front
```

### Build Manual
```bash
npm run build
npm start
```

## 🤝 Contribute

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crea un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 🆘 Soporte

- 📖 [Documentación del Sistema de Temas](./THEME_SYSTEM.md)
- 🐛 [Reportar un Bug](https://github.com/tu-usuario/legal-ia-front/issues)
- 💡 [Solicitar Feature](https://github.com/tu-usuario/legal-ia-front/issues)

---

Hecho con ❤️ para la industria legal moderna
