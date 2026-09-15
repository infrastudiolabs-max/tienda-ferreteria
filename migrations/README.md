# Migraciones Supabase

Esta carpeta contiene las migraciones SQL para la base de datos.

## Estructura

Nombra los archivos de migración así:

```
001_create_users.sql
002_create_products.sql
003_add_orders_table.sql
```

## Ejecución

Las migraciones se pueden ejecutar de dos formas:

### 1. Supabase Dashboard (Manual)

1. Ve a tu proyecto en supabase.com
2. SQL Editor
3. Copia y pega el contenido del archivo
4. Ejecuta

### 2. Supabase CLI (Recomendado para equipos)

```bash
supabase migration up
```

## Notas

- NUNCA modifiques migraciones anteriores
- Cada migración debe ser independiente
- Incluye comentarios explicativos
- SIEMPRE prueba localmente primero
