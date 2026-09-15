'use client'

import { FC, useState } from 'react'
import Link from 'next/link'

export const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🔧</span>
            </div>
            <span className="text-2xl font-bold hidden sm:inline">Ferretería</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="hover:text-blue-400 transition-colors py-2 px-3 rounded-lg hover:bg-gray-800"
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="hover:text-blue-400 transition-colors py-2 px-3 rounded-lg hover:bg-gray-800"
            >
              Catálogo
            </Link>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors py-2 px-3 rounded-lg hover:bg-gray-800 opacity-50 cursor-not-allowed"
              title="Disponible en FASE 2"
            >
              Carrito
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors py-2 px-3 rounded-lg hover:bg-gray-800 opacity-50 cursor-not-allowed"
              title="Disponible en FASE 3"
            >
              Cuenta
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-4">
            <Link
              href="/"
              className="block py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="block py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Catálogo
            </Link>
            <a
              href="#"
              className="block py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors opacity-50 cursor-not-allowed"
              title="Disponible en FASE 2"
            >
              Carrito
            </a>
            <a
              href="#"
              className="block py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors opacity-50 cursor-not-allowed"
              title="Disponible en FASE 3"
            >
              Cuenta
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
