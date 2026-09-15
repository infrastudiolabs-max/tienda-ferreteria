import { Metadata } from 'next'
import { Product } from '@/types'
import { getProductById } from '@/lib/products'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const product = await getProductById(params.id)
    if (!product) {
      return {
        title: 'Producto no encontrado | Tienda Ferretería',
      }
    }
    return {
      title: `${product.name} | Tienda Ferretería`,
      description: product.description,
    }
  } catch {
    return {
      title: 'Tienda Ferretería',
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
