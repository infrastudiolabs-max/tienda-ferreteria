export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-secondary">
          Bienvenido a Tienda Ferretería
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tu plataforma de compra de herramientas y materiales de construcción.
          La base técnica está configurada y lista para crecer.
        </p>

        <div className="bg-gradient-to-r from-primary to-orange-500 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            ✅ FASE 0: Base Técnica
          </h2>
          <ul className="text-left max-w-md mx-auto space-y-2">
            <li>✓ Next.js 14 (App Router)</li>
            <li>✓ TypeScript Estricto</li>
            <li>✓ Tailwind CSS</li>
            <li>✓ Supabase Configurado</li>
            <li>✓ ESLint y Jest</li>
            <li>✓ Vercel Ready</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">📁 Estructura</h3>
            <p className="text-sm text-gray-600">
              Proyecto organizado con carpetas para componentes,
              tipos, librerías y migraciones.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">🔐 Seguridad</h3>
            <p className="text-sm text-gray-600">
              Variables de entorno protegidas. Nunca se expondrán
              credenciales en el repositorio.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">🧪 Testing</h3>
            <p className="text-sm text-gray-600">
              Jest y React Testing Library configurados.
              Listo para agregar tests a cada componente.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">🚀 Deploy</h3>
            <p className="text-sm text-gray-600">
              Conectado a GitHub y Vercel. Deploy automático
              en cada push a main.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-8">
          <h3 className="font-semibold text-lg mb-3 text-blue-900">
            📚 Próximos Pasos (FASE 1+)
          </h3>
          <ol className="text-left max-w-md mx-auto space-y-2 text-sm text-blue-800">
            <li>1. Crear tablas en Supabase</li>
            <li>2. Implementar catálogo de productos</li>
            <li>3. Agregar carrito de compras</li>
            <li>4. Autenticación de usuarios</li>
            <li>5. Sistema de órdenes</li>
            <li>6. Panel administrativo</li>
            <li>7. Pagos online (Stripe)</li>
          </ol>
        </div>

        <div className="mt-8 space-y-2">
          <p className="text-sm text-gray-500">
            Documentación: Revisa README.md y AGENTS.md
          </p>
          <p className="text-sm text-gray-500">
            Repository: infrastudiolabs-max/tienda-ferreteria
          </p>
        </div>
      </section>
    </div>
  )
}
