'use client'

import { useEffect, useState } from 'react'
import { Product } from '@/types'
import { getFeaturedProducts } from '@/lib/products'
import { ProductCard } from '@/components/ProductCard'
import { LoadingSpinner } from '@/components/States'
import Link from 'next/link'

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const products = await getFeaturedProducts(6)
        setFeaturedProducts(products)
      } catch (error) {
        console.error('Error loading featured products:', error)
      } finally {
        setLoading(false)
      }
    }

    loadFeaturedProducts()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bienvenido a Tienda Ferretería
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Tu plataforma de compra de herramientas y materiales de construcción de calidad.
            </p>
            <Link
              href="/catalogo"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* FASE 0 Status */}
      <section className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">✅ FASE 0: Base Técnica Completada</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Next.js 14 (App Router)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  TypeScript Estricto
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Supabase Configurado
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ESLint y Jest
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Vercel Ready
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">FASE 1: Catálogo 🎯</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Catálogo de Productos
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Búsqueda y Filtros
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Detalle de Producto
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  15 Productos de Ejemplo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
            <p className="text-gray-600 text-lg">Explora nuestros productos más populares en herramientas, materiales y seguridad.</p>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : featuredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center">
                <Link
                  href="/catalogo"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  Ver Todos los Productos
                </Link>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600">No hay productos disponibles en este momento.</p>
          )}
        </div>
      </section>

      {/* Categorías */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Nuestras Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Herramientas', icon: '🔧', desc: 'Herramientas manuales y eléctricas' },
              { name: 'Materiales', icon: '📦', desc: 'Materiales de construcción' },
              { name: 'Seguridad', icon: '🛡️', desc: 'Equipos de protección personal' },
            ].map((cat) => (
              <Link key={cat.name} href={`/catalogo?category=${cat.name.toLowerCase()}`}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg hover:shadow-lg transition-shadow cursor-pointer text-center">
                  <div className="text-5xl mb-4">{cat.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{cat.name}</h3>
                  <p className="text-gray-600">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amplio Catálogo</h3>
              <p className="text-gray-600">15+ productos de calidad en herramientas, materiales y seguridad.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Busca Fácilmente</h3>
              <p className="text-gray-600">Encuentra lo que necesitas con búsqueda, filtros y ordenamiento.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Precios Justos</h3>
              <p className="text-gray-600">Productos a precios competitivos con información completa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para explorar?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Navega nuestro catálogo completo y encuentra lo que necesitas.
          </p>
          <Link
            href="/catalogo"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Ir al Catálogo
          </Link>
        </div>
      </section>
    </div>
  )
}
