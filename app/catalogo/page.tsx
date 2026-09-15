'use client'

import { useEffect, useState } from 'react'
import { Product, Category, ProductFilters } from '@/types'
import { getProducts, getFeaturedProducts, getPriceRange } from '@/lib/products'
import { getCategories } from '@/lib/categories'
import { ProductCard } from '@/components/ProductCard'
import { CategoryFilter } from '@/components/CategoryFilter'
import { PriceRangeFilter } from '@/components/PriceRangeFilter'
import { SortFilter } from '@/components/SortFilter'
import { SearchBar } from '@/components/SearchBar'
import { LoadingSpinner, EmptyState, ErrorState } from '@/components/States'

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalCount, setTotalCount] = useState(0)

  // Filtros
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>()
  const [searchQuery, setSearchQuery] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [selectedMinPrice, setSelectedMinPrice] = useState(0)
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(1000)
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'newest' | 'name'>('newest')
  const [currentPage, setCurrentPage] = useState(1)

  // Cargar categorías y rango de precios
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [cats, priceRange] = await Promise.all([
          getCategories(),
          getPriceRange(),
        ])
        setCategories(cats)
        setMinPrice(Math.floor(priceRange.min))
        setMaxPrice(Math.ceil(priceRange.max))
        setSelectedMinPrice(Math.floor(priceRange.min))
        setSelectedMaxPrice(Math.ceil(priceRange.max))
      } catch (err) {
        setError('Error cargando datos iniciales')
        console.error(err)
      }
    }
    loadInitialData()
  }, [])

  // Cargar productos con filtros
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        const filters: ProductFilters = {
          categoryId: selectedCategoryId,
          minPrice: selectedMinPrice,
          maxPrice: selectedMaxPrice,
          search: searchQuery,
          sortBy,
          page: currentPage,
          limit: 12,
        }
        const { data, count } = await getProducts(filters)
        setProducts(data)
        setTotalCount(count)
      } catch (err) {
        setError('Error cargando productos')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [selectedCategoryId, searchQuery, selectedMinPrice, selectedMaxPrice, sortBy, currentPage])

  const totalPages = Math.ceil(totalCount / 12)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Catálogo de Productos</h1>
          <p className="text-gray-600">Explora nuestro amplio catálogo de herramientas, materiales y equipos de seguridad</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filtros */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Búsqueda */}
            <SearchBar onSearch={setSearchQuery} />

            {/* Filtro por Categoría */}
            <CategoryFilter
              categories={categories}
              selectedCategoryId={selectedCategoryId}
              onCategoryChange={setSelectedCategoryId}
            />

            {/* Filtro por Rango de Precio */}
            <PriceRangeFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              selectedMinPrice={selectedMinPrice}
              selectedMaxPrice={selectedMaxPrice}
              onMinPriceChange={setSelectedMinPrice}
              onMaxPriceChange={setSelectedMaxPrice}
            />

            {/* Ordenamiento */}
            <SortFilter sortBy={sortBy} onSortChange={setSortBy} />
          </aside>

          {/* Main Content - Productos */}
          <main className="lg:col-span-3">
            {/* Información */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Mostrando <span className="font-semibold">{products.length}</span> de{' '}
                <span className="font-semibold">{totalCount}</span> productos
              </p>
            </div>

            {/* Productos */}
            {loading ? (
              <LoadingSpinner />
            ) : error ? (
              <ErrorState message={error} />
            ) : products.length === 0 ? (
              <EmptyState message="No se encontraron productos. Intenta cambiar los filtros." />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Paginación */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 mt-8">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Anterior
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Siguiente
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
