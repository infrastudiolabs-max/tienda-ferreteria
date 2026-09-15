/**
 * Tipos compartidos para toda la aplicación
 */

// Tipos de ejemplo para futuro uso
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
}

export interface PaginationParams {
  page: number
  limit: number
}

// Será expandido en fases posteriores con:
// - Product
// - Category
// - User
// - Order
// - CartItem
// etc.
