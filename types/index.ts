/**
 * Tipos compartidos para toda la aplicación - FASE 1: Catálogo
 */

// ============================================
// Respuestas API genéricas
// ============================================

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
}

export interface PaginationParams {
  page: number
  limit: number
}

// ============================================
// Entidades de Base de Datos
// ============================================

/**
 * Categoría de productos
 */
export interface Category {
  id: string
  nombre: string
  descripcion: string | null
  creado_en: string
  updated_at: string
}

/**
 * Producto en el catálogo
 */
export interface Product {
  id: string
  nombre: string
  descripcion: string | null
  precio: number
  imagen_url: string | null
  categoria_id: string
  stock: number
  creado_en: string
  actualizado_en: string
}

/**
 * Producto con datos de categoría incluidos (join)
 */
export interface ProductWithCategory extends Product {
  categories?: Category
}

// ============================================
// Parámetros de consulta
// ============================================

/**
 * Filtros para búsqueda de productos
 */
export interface ProductFilters {
  search?: string
  categoria_id?: string
  minPrice?: number
  maxPrice?: number
  sortBy?: 'nombre' | 'precio' | 'creado_en' | 'stock'
  sortOrder?: 'asc' | 'desc'
  page?: number
  limit?: number
}

/**
 * Resultado paginado de búsqueda
 */
export interface PaginatedResult<T> {
  data: T[]
  total: number
  page: number
  limit: number
  pages: number
}

// ============================================
// Estados de carga
// ============================================

/**
 * Estado de una consulta a la API
 */
export interface QueryState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

// ============================================
// Validaciones
// ============================================

/**
 * Resultado de validación
 */
export interface ValidationResult {
  valid: boolean
  errors: Record<string, string[]>
}
