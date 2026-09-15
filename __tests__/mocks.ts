import { Product, Category } from '@/types'

/**
 * Tests para servicios de productos
 */

// Mock data
export const mockCategory: Category = {
  id: '550e8400-e29b-41d4-a716-446655440001',
  name: 'Herramientas',
  description: 'Herramientas manuales y eléctricas',
  created_at: '2026-01-01T00:00:00Z',
}

export const mockProduct: Product = {
  id: '550e8400-e29b-41d4-a716-446655440011',
  name: 'Martillo de Goma',
  description: 'Martillo con cabeza de goma para trabajos delicados',
  price: 15.99,
  image_url: 'https://images.unsplash.com/photo-1615486511537-d7c2265c4cc7',
  category_id: '550e8400-e29b-41d4-a716-446655440001',
  stock: 45,
  created_at: '2026-01-01T00:00:00Z',
  updated_at: '2026-01-01T00:00:00Z',
}

export const mockProducts: Product[] = [
  mockProduct,
  {
    ...mockProduct,
    id: '550e8400-e29b-41d4-a716-446655440012',
    name: 'Destornillador Phillips Set',
    price: 12.50,
    stock: 60,
  },
  {
    ...mockProduct,
    id: '550e8400-e29b-41d4-a716-446655440013',
    name: 'Taladro Inalámbrico 20V',
    price: 89.99,
    stock: 22,
  },
]
