import { supabase } from './supabase'
import { Product, ProductFilters } from '@/types'

/**
 * Obtiene productos con filtros, búsqueda y ordenamiento
 */
export async function getProducts(filters?: ProductFilters): Promise<{ data: Product[]; count: number }> {
  try {
    let query = supabase.from('products').select('*', { count: 'exact' })

    // Filtro por categoría
    if (filters?.categoryId) {
      query = query.eq('category_id', filters.categoryId)
    }

    // Filtro por rango de precio
    if (filters?.minPrice !== undefined) {
      query = query.gte('price', filters.minPrice)
    }
    if (filters?.maxPrice !== undefined) {
      query = query.lte('price', filters.maxPrice)
    }

    // Búsqueda por texto
    if (filters?.search) {
      const searchTerm = `%${filters.search}%`
      query = query.or(`name.ilike.${searchTerm},description.ilike.${searchTerm}`)
    }

    // Ordenamiento
    const sortBy = filters?.sortBy || 'newest'
    switch (sortBy) {
      case 'price-asc':
        query = query.order('price', { ascending: true })
        break
      case 'price-desc':
        query = query.order('price', { ascending: false })
        break
      case 'name':
        query = query.order('name', { ascending: true })
        break
      case 'newest':
      default:
        query = query.order('created_at', { ascending: false })
    }

    // Paginación
    const page = filters?.page || 1
    const limit = filters?.limit || 12
    const offset = (page - 1) * limit

    query = query.range(offset, offset + limit - 1)

    const { data, error, count } = await query

    if (error) throw error
    return { data: data || [], count: count || 0 }
  } catch (error) {
    console.error('Error fetching products:', error)
    return { data: [], count: 0 }
  }
}

/**
 * Obtiene un producto por ID
 */
export async function getProductById(id: string): Promise<Product | null> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return data || null
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

/**
 * Obtiene productos destacados (los más nuevos o con mejor stock)
 */
export async function getFeaturedProducts(limit: number = 6): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .gt('stock', 0)
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching featured products:', error)
    return []
  }
}

/**
 * Obtiene productos por categoría
 */
export async function getProductsByCategory(categoryId: string, limit?: number): Promise<Product[]> {
  try {
    let query = supabase
      .from('products')
      .select('*')
      .eq('category_id', categoryId)
      .order('name', { ascending: true })

    if (limit) {
      query = query.limit(limit)
    }

    const { data, error } = await query

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching products by category:', error)
    return []
  }
}

/**
 * Obtiene el rango de precios disponibles
 */
export async function getPriceRange(): Promise<{ min: number; max: number }> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('price')
      .order('price', { ascending: true })
      .limit(1)

    const { data: maxData, error: maxError } = await supabase
      .from('products')
      .select('price')
      .order('price', { ascending: false })
      .limit(1)

    if (error || maxError) throw error || maxError

    return {
      min: data?.[0]?.price || 0,
      max: maxData?.[0]?.price || 0,
    }
  } catch (error) {
    console.error('Error fetching price range:', error)
    return { min: 0, max: 0 }
  }
}
