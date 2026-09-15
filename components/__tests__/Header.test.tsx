import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

describe('Header Component', () => {
  it('renders the header with logo and title', () => {
    render(<Header />)
    const title = screen.getByText('Ferretería')
    expect(title).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText('Catálogo')).toBeInTheDocument()
    expect(screen.getByText('Carrito')).toBeInTheDocument()
    expect(screen.getByText('Cuenta')).toBeInTheDocument()
  })

  it('has correct styling classes', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    expect(header).toHaveClass('bg-secondary', 'text-white')
  })
})
