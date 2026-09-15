'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Product, Category } from '@/types'
import { getProductById } from '@/lib/products'
import { getCategoryById } from '@/lib/categories'
import { LoadingSpinner, ErrorState } from '@/components/States'
import Link from 'next/link'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params?.id as string

  const [product, setProduct] = useState<Product | null>(null)
  const [category, setCategory] = useState<Category | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const loadProduct = async () => {
      if (!productId) {
        setError('Producto no encontrado')
        setLoading(false)
        return
      }

      try {
        const prod = await getProductById(productId)
        if (!prod) {
          setError('El producto no existe')
          setLoading(false)
          return
        }

        setProduct(prod)

        // Cargar categoría
        const cat = await getCategoryById(prod.category_id)
        setCategory(cat)
      } catch (err) {
        setError('Error cargando el producto')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [productId])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <ErrorState message={error || 'Producto no encontrado'} />
          <div className="mt-8 text-center">
            <Link href="/catalogo" className="text-blue-600 hover:text-blue-800 font-semibold">
              ← Volver al catálogo
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const isInStock = product.stock > 0
  const maxQuantity = Math.min(quantity, product.stock)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/catalogo" className="hover:text-blue-600">
              Catálogo
            </Link>
            {category && (
              <>
                <span>/</span>
                <span>{category.name}</span>
              </>
            )}
            <span>/</span>
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Imagen */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Sin imagen disponible</span>
                </div>
              )}
            </div>
          </div>

          {/* Detalles */}
          <div>
            {/* Categoría */}
            {category && (
              <Link href={`/catalogo?category=${category.id}`}>
                <p className="text-blue-600 hover:text-blue-800 font-semibold text-sm mb-2">
                  {category.name}
                </p>
              </Link>
            )}

            {/* Título */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {/* Precio */}
            <div className="mb-6">
              <p className="text-4xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Stock */}
            <div className="mb-6">
              {isInStock ? (
                <p className="text-lg font-semibold text-green-600">
                  ✓ En stock ({product.stock} disponibles)
                </p>
              ) : (
                <p className="text-lg font-semibold text-red-600">Agotado</p>
              )}
            </div>

            {/* Descripción */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Descripción del Producto</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Añadir al carrito */}
            {isInStock && (
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <label className="text-gray-700 font-semibold">Cantidad:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, Number(e.target.value))))}
                      min="1"
                      max={product.stock}
                      className="w-16 px-2 py-2 text-center border-0 focus:outline-none"
                    />
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
                  Añadir al carrito
                </button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Carrito de compras disponible en FASE 2
                </p>
              </div>
            )}

            {/* Botón volver */}
            <Link
              href="/catalogo"
              className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
            >
              ← Volver al catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
