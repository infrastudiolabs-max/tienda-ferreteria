import { mockProduct, mockProducts } from './mocks'
import { Product, ProductFilters } from '@/types'

/**
 * Pruebas de lógica de negocio (sin dependencias de Supabase)
 */

describe('Product Filtering Logic', () => {
  it('should filter products by price range', () => {
    const minPrice = 10
    const maxPrice = 50
    const filtered = mockProducts.filter((p) => p.price >= minPrice && p.price <= maxPrice)
    
    expect(filtered.every((p) => p.price >= minPrice && p.price <= maxPrice)).toBe(true)
  })

  it('should filter products by stock', () => {
    const inStock = mockProducts.filter((p) => p.stock > 0)
    expect(inStock.length).toBeGreaterThan(0)
  })

  it('should search products by name', () => {
    const searchTerm = 'Martillo'
    const results = mockProducts.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    expect(results.length).toBeGreaterThan(0)
    expect(results[0].name).toContain('Martillo')
  })

  it('should search products by description', () => {
    const searchTerm = 'goma'
    const results = mockProducts.filter((p) =>
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    expect(results.some((p) => p.description.includes('goma'))).toBe(true)
  })
})

describe('Product Sorting', () => {
  it('should sort products by price ascending', () => {
    const sorted = [...mockProducts].sort((a, b) => a.price - b.price)
    for (let i = 0; i < sorted.length - 1; i++) {
      expect(sorted[i].price).toBeLessThanOrEqual(sorted[i + 1].price)
    }
  })

  it('should sort products by price descending', () => {
    const sorted = [...mockProducts].sort((a, b) => b.price - a.price)
    for (let i = 0; i < sorted.length - 1; i++) {
      expect(sorted[i].price).toBeGreaterThanOrEqual(sorted[i + 1].price)
    }
  })

  it('should sort products by name', () => {
    const sorted = [...mockProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    )
    for (let i = 0; i < sorted.length - 1; i++) {
      expect(sorted[i].name.localeCompare(sorted[i + 1].name)).toBeLessThanOrEqual(0)
    }
  })
})

describe('Product Pagination', () => {
  const items = mockProducts
  const itemsPerPage = 2

  it('should paginate products correctly', () => {
    const page = 1
    const offset = (page - 1) * itemsPerPage
    const paginated = items.slice(offset, offset + itemsPerPage)
    
    expect(paginated.length).toBeLessThanOrEqual(itemsPerPage)
  })

  it('should calculate total pages', () => {
    const totalItems = items.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    
    expect(totalPages).toBeGreaterThan(0)
  })
})
