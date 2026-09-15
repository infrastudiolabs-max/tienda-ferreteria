/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { ProductCard } from '@/components/ProductCard'
import { mockProduct } from './mocks'

jest.mock('next/link', () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>
  }
})

describe('ProductCard Component', () => {
  it('should render product name', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument()
  })

  it('should render product price', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument()
  })

  it('should render product description', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument()
  })

  it('should render in stock status when stock is available', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('En stock')).toBeInTheDocument()
  })

  it('should render out of stock status when stock is zero', () => {
    const outOfStockProduct = { ...mockProduct, stock: 0 }
    render(<ProductCard product={outOfStockProduct} />)
    expect(screen.getByText('Agotado')).toBeInTheDocument()
  })

  it('should have a link to product details', () => {
    render(<ProductCard product={mockProduct} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', `/producto/${mockProduct.id}`)
  })
})
