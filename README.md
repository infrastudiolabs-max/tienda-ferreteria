# Tienda Ferretería - E-commerce

## 📋 Descripción

Aplicación e-commerce para venta de productos ferreteros construida con Next.js, TypeScript, React y Supabase.

**FASE ACTUAL:** 0 - Base Técnica

## 🛠️ Tecnología

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript
- **Estilos:** Tailwind CSS
- **Base de Datos:** Supabase (PostgreSQL)
- **Hosting:** Vercel
- **Versionado:** Git/GitHub

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun
- Cuenta en Supabase (https://supabase.com)
- Cuenta en GitHub
- Cuenta en Vercel

### Setup Local

1. **Clonar el repositorio**

```bash
git clone https://github.com/infrastudiolabs-max/tienda-ferreteria.git
cd tienda-ferreteria
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

Copia `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Edita `.env.local` y agrega tus credenciales de Supabase:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

4. **Ejecutar servidor de desarrollo**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura de Carpetas

```
tienda-ferreteria/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── globals.css        # Estilos globales
│   └── api/               # API routes (futuro)
├── components/            # Componentes React reutilizables
│   └── Header.tsx         # Componente Header
├── lib/                   # Utilidades y configuraciones
│   └── supabase.ts        # Cliente Supabase
├── types/                 # Tipos TypeScript
│   └── index.ts           # Tipos compartidos
├── migrations/            # Migraciones Supabase (futuro)
├── public/                # Archivos estáticos
├── .env.example           # Variables de entorno (template)
├── .eslintrc.json         # Configuración ESLint
├── tailwind.config.ts     # Configuración Tailwind
├── tsconfig.json          # Configuración TypeScript
├── jest.config.js         # Configuración Jest
├── next.config.js         # Configuración Next.js
├── package.json           # Dependencias
├── README.md              # Este archivo
└── AGENTS.md              # Reglas para agentes IA
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Producción
npm run build            # Build para producción
npm run start            # Inicia servidor de producción

# Calidad de código
npm run lint             # Ejecuta ESLint

# Tests
npm run test             # Ejecuta tests (Jest)
npm run test:watch       # Tests en modo watch
```

## 🔐 Configuración de Supabase

### Crear Proyecto en Supabase

1. Ve a [Supabase Dashboard](https://app.supabase.com)
2. Click en "New Project"
3. Llena los datos y crea el proyecto
4. Ve a Settings → API
5. Copia:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Variables de Entorno Requeridas

- `NEXT_PUBLIC_SUPABASE_URL`: URL de tu proyecto Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Clave anónima pública de Supabase

⚠️ **IMPORTANTE:** Nunca incluyas secretos reales en el repositorio. Solo usa `.env.local` localmente.

## 🧪 Testing

Este proyecto usa Jest y React Testing Library.

```bash
# Ejecutar tests
npm run test

# Tests en modo watch
npm run test:watch

# Con cobertura
npm run test -- --coverage
```

## 📋 Verificación Pre-Deploy

Antes de desplegar, ejecuta:

```bash
# 1. Lint
npm run lint

# 2. Tests
npm run test

# 3. Build
npm run build

# 4. Start (producción)
npm run start
```

## 🌐 Deploy en Vercel

### Setup Automático

1. Push a GitHub
2. Ve a [Vercel.com](https://vercel.com)
3. Click "New Project"
4. Importa este repositorio
5. Agrega variables de entorno (Settings → Environment Variables)
6. Deploy automático ✅

### Variables en Vercel

Agrega en Settings → Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📚 Documentación Adicional

- [AGENTS.md](./AGENTS.md) - Reglas para futuros agentes IA
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 📝 Roadmap

- **FASE 1:** Catálogo de productos
- **FASE 2:** Carrito de compras
- **FASE 3:** Autenticación y usuarios
- **FASE 4:** Checkout y órdenes
- **FASE 5:** Panel administrativo
- **FASE 6:** Pagos online (Stripe)

## 🔒 Seguridad

- Variables sensibles en `.env.local` (NO en Git)
- Solo credenciales públicas en repositorio
- Supabase anon key (solo lectura por defecto)
- Service role key solo en backend (nunca en cliente)

## 🤝 Contribuciones

Para cambios importantes, abre un issue primero.

## 📄 Licencia

MIT

## 👤 Autor

Infra Studio Labs

## ⚡ Estado del Proyecto

- ✅ Base técnica configurada
- ✅ TypeScript habilitado
- ✅ Tailwind CSS configurado
- ✅ Supabase conectado (configuración)
- ✅ Lint configurado
- ✅ Tests configurado
- ✅ Ready para Vercel
- ⏳ Tablas de negocio (FASE 1)
