import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tienda Ferretería - Herramientas y Materiales de Construcción',
  description: 'Tienda online de herramientas, materiales de construcción y equipos de seguridad de calidad.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <Header />
        <main>
          {children}
        </main>
        <footer className="bg-gray-900 text-gray-300 mt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">Sobre Nosotros</h3>
                <p className="text-sm">Tienda Ferretería es tu plataforma confiable para comprar herramientas y materiales de construcción de calidad.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Catálogo</h3>
                <ul className="text-sm space-y-2">
                  <li><a href="/catalogo" className="hover:text-white transition-colors">Ver Catálogo</a></li>
                  <li><a href="/catalogo" className="hover:text-white transition-colors">Herramientas</a></li>
                  <li><a href="/catalogo" className="hover:text-white transition-colors">Materiales</a></li>
                  <li><a href="/catalogo" className="hover:text-white transition-colors">Seguridad</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Ayuda</h3>
                <ul className="text-sm space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Fases de Desarrollo</h3>
                <ul className="text-sm space-y-2">
                  <li>💫 <span className="text-white">FASE 0</span>: Base Técnica</li>
                  <li>💫 <span className="text-white">FASE 1</span>: Catálogo (Actual)</li>
                  <li>🔘 FASE 2: Carrito</li>
                  <li>🔘 FASE 3: Autenticación</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-center text-sm">&copy; 2026 Tienda Ferretería. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
