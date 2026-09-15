'use client'

export const Header = () => {
  return (
    <header className="bg-secondary text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">🔧</span>
            </div>
            <h1 className="text-2xl font-bold">Ferretería</h1>
          </div>
          
          <nav className="flex items-center gap-6">
            <a href="/" className="hover:text-primary transition">
              Inicio
            </a>
            <a href="#" className="hover:text-primary transition" title="Próximamente">
              Catálogo
            </a>
            <a href="#" className="hover:text-primary transition" title="Próximamente">
              Carrito
            </a>
            <a href="#" className="hover:text-primary transition" title="Próximamente">
              Cuenta
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
