import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tienda Ferretería',
  description: 'E-commerce de productos ferreteros',
  generator: 'Next.js',
  keywords: ['ferretería', 'herramientas', 'construcción'],
  authors: [{ name: 'Infra Studio Labs' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-white text-secondary">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-secondary text-white text-center py-4 mt-8">
          <p>&copy; 2024 Tienda Ferretería. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  )
}
