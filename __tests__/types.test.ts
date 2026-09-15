import { mockProduct, mockProducts, mockCategory } from './mocks'

/**
 * Pruebas básicas de tipos y datos
 */

describe('Product Type', () => {
  it('should have all required product fields', () => {
    expect(mockProduct).toHaveProperty('id')
    expect(mockProduct).toHaveProperty('name')
    expect(mockProduct).toHaveProperty('description')
    expect(mockProduct).toHaveProperty('price')
    expect(mockProduct).toHaveProperty('category_id')
    expect(mockProduct).toHaveProperty('stock')
    expect(mockProduct).toHaveProperty('created_at')
    expect(mockProduct).toHaveProperty('updated_at')
  })

  it('should have valid product values', () => {
    expect(typeof mockProduct.id).toBe('string')
    expect(typeof mockProduct.name).toBe('string')
    expect(typeof mockProduct.price).toBe('number')
    expect(mockProduct.price).toBeGreaterThan(0)
    expect(typeof mockProduct.stock).toBe('number')
    expect(mockProduct.stock).toBeGreaterThanOrEqual(0)
  })
})

describe('Category Type', () => {
  it('should have all required category fields', () => {
    expect(mockCategory).toHaveProperty('id')
    expect(mockCategory).toHaveProperty('name')
    expect(mockCategory).toHaveProperty('created_at')
  })

  it('should have valid category values', () => {
    expect(typeof mockCategory.id).toBe('string')
    expect(typeof mockCategory.name).toBe('string')
  })
})

describe('Product Array', () => {
  it('should contain multiple products', () => {
    expect(mockProducts.length).toBeGreaterThan(0)
  })

  it('should have unique product IDs', () => {
    const ids = mockProducts.map((p) => p.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('should have positive prices', () => {
    mockProducts.forEach((product) => {
      expect(product.price).toBeGreaterThan(0)
    })
  })
})
