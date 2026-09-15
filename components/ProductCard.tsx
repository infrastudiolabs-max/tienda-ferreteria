'use client'

import { FC } from 'react'
import { Product } from '@/types'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const isInStock = product.stock > 0
  const stockStatus = isInStock ? 'En stock' : 'Agotado'
  const stockColor = isInStock ? 'text-green-600' : 'text-red-600'

  return (
    <Link href={`/producto/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        {/* Imagen */}
        <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
          {product.image_url ? (
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <span className="text-gray-500">Sin imagen</span>
            </div>
          )}
          {/* Badge de stock */}
          <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-semibold ${stockColor} bg-white`}>
            {stockStatus}
          </div>
        </div>

        {/* Contenido */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Nombre */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600">
            {product.name}
          </h3>

          {/* Descripción */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
            {product.description}
          </p>

          {/* Precio */}
          <div className="mt-auto">
            <p className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Botón */}
          <button
            className={`mt-4 w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
              isInStock
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!isInStock}
            onClick={(e) => {
              e.preventDefault()
              if (isInStock) {
                // Lógica del carrito en FASE 2
              }
            }}
          >
            {isInStock ? 'Ver detalles' : 'Agotado'}
          </button>
        </div>
      </div>
    </Link>
  )
}
