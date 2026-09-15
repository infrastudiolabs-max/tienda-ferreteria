# AGENTS.md - Reglas para Agentes IA

Documento de referencia para agentes IA que trabajen en este proyecto.

## 🎯 Objetivo del Proyecto

**Tienda Ferretería:** E-commerce de productos ferreteros.

**Estado Actual:** FASE 0 - Base técnica lista. Lista para FASE 1 (catálogo).

## 📋 Stack Tecnológico

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript
- **Estilos:** Tailwind CSS
- **Base de Datos:** Supabase (PostgreSQL)
- **Hosting:** Vercel
- **Testing:** Jest + React Testing Library
- **Linting:** ESLint

## ✅ Reglas Generales

### 1. Estructura y Organización

```
✓ Componentes en: components/
✓ Páginas en: app/
✓ Tipos en: types/index.ts
✓ Librerías en: lib/
✓ Tests junto a código: components/__tests__/
✓ Migraciones SQL en: migrations/
```

### 2. TypeScript

- **SIEMPRE** usa TypeScript, nunca JavaScript puro
- Todos los componentes deben estar tipados
- Exporta tipos desde `types/index.ts` cuando sean compartidos
- Usa `strict: true` en tsconfig.json

### 3. Componentes

```typescript
// ✓ CORRECTO
'use client'
import { FC } from 'react'

export const MyComponent: FC = () => {
  return <div>Contenido</div>
}

// ✗ INCORRECTO
export default function MyComponent() {
  return <div>Contenido</div>
}
```

### 4. Estilos

- **SIEMPRE** Tailwind CSS, nunca CSS modules o styled-components
- Clases en orden: responsive → estado → color
- Mantén estilos consistentes con `tailwind.config.ts`

```typescript
// ✓ CORRECTO
className="md:grid-cols-2 hover:bg-primary text-white"

// ✗ INCORRECTO
className="text-white hover:bg-primary md:grid-cols-2"
```

### 5. Testing

- Tests junto al código: `components/__tests__/Component.test.tsx`
- Usa React Testing Library (NO Enzyme)
- Cubre al menos casos principal y edge cases
- Ejecuta antes de hacer push: `npm run test`

```typescript
// ✓ CORRECTO
it('renders header with title', () => {
  render(<Header />)
  expect(screen.getByText('Ferretería')).toBeInTheDocument()
})
```

### 6. Variables de Entorno

- Variables públicas: `NEXT_PUBLIC_*`
- Nunca incluyas valores reales en `.env.example`
- Secrets solo en `.env.local` (NO en Git)
- Usa `process.env` con validación

```typescript
// ✓ CORRECTO
const url = process.env.NEXT_PUBLIC_SUPABASE_URL
if (!url) throw new Error('Missing env var')

// ✗ INCORRECTO
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'default'
```

### 7. Commits

- Mensajes en español, descriptivos
- Formato: `[Tipo]: Descripción breve`
- Tipos: `App`, `Components`, `Lib`, `Types`, `Tests`, `Docs`, `Config`, `Migrations`

```
✓ CORRECTO:
Components: Agregar Header component
Lib: Actualizar cliente Supabase
Tests: Agregar tests para Header

✗ INCORRECTO:
fixed stuff
update
wip
```

### 8. Antes de hacer Push

```bash
npm run lint      # ESLint
npm run test      # Tests
npm run build     # Build check
```

## 📊 Fases del Proyecto

### FASE 0 ✅ (Actual - Base Técnica)
- ✅ Next.js, TypeScript, Tailwind
- ✅ Supabase configurado
- ✅ ESLint, Jest
- ✅ Ready para Vercel

### FASE 1 ⏳ (Próxima - Catálogo)
- [ ] Crear tabla `products` en Supabase
- [ ] Crear tabla `categories` en Supabase
- [ ] Componente ProductCard
- [ ] Página /products
- [ ] Filtros y búsqueda

### FASE 2 (Carrito)
- [ ] Tabla `cart_items`
- [ ] Context API para carrito
- [ ] Página /cart
- [ ] Checkout básico

### FASE 3 (Autenticación)
- [ ] Auth Supabase configurado
- [ ] Tabla `users`
- [ ] Login/Signup
- [ ] Protected routes

### FASE 4 (Órdenes)
- [ ] Tabla `orders`
- [ ] Tabla `order_items`
- [ ] Historial de órdenes
- [ ] Estado de órdenes

### FASE 5 (Admin)
- [ ] Panel administrativo
- [ ] Gestión de productos
- [ ] Gestión de órdenes

### FASE 6 (Pagos)
- [ ] Integración Stripe
- [ ] Checkout completo
- [ ] Confirmación de pago

## 🔒 Seguridad

### NUNCA
- ❌ Commits con `.env.local`
- ❌ Credenciales hardcodeadas
- ❌ Service role keys en cliente
- ❌ Secrets en GitHub Actions (usar secrets de GitHub)

### SIEMPRE
- ✅ Usa `.env.example` como template
- ✅ Valida inputs en el servidor
- ✅ Usa Row Level Security (RLS) en Supabase
- ✅ Inyección SQL: usa parámetros, nunca string interpolation

## 🧪 Testing

```bash
npm run test              # Ejecutar tests
npm run test:watch       # Watch mode
npm run test -- --coverage
```

## 🚀 Deploy

### Local
```bash
npm run dev
```

### Producción (Vercel)
1. Push a main
2. Deploy automático en Vercel
3. Variables de entorno en Vercel Settings

## 📚 Documentación Útil

- [README.md](./README.md) - Instalación y setup
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤖 Tareas Típicas para Agentes

### Crear Nuevo Componente
1. Crear archivo en `components/ComponentName.tsx`
2. Crear archivo de tests en `components/__tests__/ComponentName.test.tsx`
3. Exportar desde componente
4. Usar en páginas
5. Commit: `Components: Agregar ComponentName`

### Agregar Nueva Página
1. Crear carpeta en `app/pagename/`
2. Crear `page.tsx`
3. Usar componentes existentes
4. Tests en `components/__tests__/`
5. Commit: `App: Agregar página /pagename`

### Crear Migración SQL
1. Archivo en `migrations/NNN_description.sql`
2. Número secuencial
3. Comentarios explicativos
4. Ejecutar en Supabase Dashboard o CLI
5. Commit: `Migrations: Crear tabla xyz`

### Actualizar Tipos
1. Editar `types/index.ts`
2. Exportar tipos
3. Usar en componentes/páginas
4. Tests actualizados
5. Commit: `Types: Agregar tipo XYZ`

## 📞 Contacto

- **Propietario:** Infra Studio Labs
- **Email:** infrastudiolabs@gmail.com
- **Repo:** https://github.com/infrastudiolabs-max/tienda-ferreteria

---

**Última actualización:** 2026-09-15
**Versión:** 1.0
