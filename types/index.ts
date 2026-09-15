// Tipos TypeScript para la aplicación

export interface Category {
  id: string
  name: string
  description: string | null
  created_at: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string | null
  category_id: string
  stock: number
  created_at: string
  updated_at: string
}

export interface ProductWithCategory extends Product {
  categories?: Category
}

export interface PaginatedResponse<T> {
  data: T[]
  count: number
  error: string | null
}

export interface ProductFilters {
  categoryId?: string
  minPrice?: number
  maxPrice?: number
  search?: string
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'name'
  page?: number
  limit?: number
}
