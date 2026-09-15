-- Migración 001: Crear tabla categories
-- Descripción: Tabla de categorías de productos

CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(255) NOT NULL UNIQUE,
  descripcion TEXT,
  creado_en TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índice para búsquedas por nombre
CREATE INDEX IF NOT EXISTS idx_categories_nombre ON categories(nombre);

-- Comentarios para documentación
COMMENT ON TABLE categories IS 'Categorías de productos de ferretería';
COMMENT ON COLUMN categories.id IS 'Identificador único UUID';
COMMENT ON COLUMN categories.nombre IS 'Nombre de la categoría (único)';
COMMENT ON COLUMN categories.descripcion IS 'Descripción detallada de la categoría';
COMMENT ON COLUMN categories.creado_en IS 'Fecha y hora de creación';
COMMENT ON COLUMN categories.updated_at IS 'Fecha y hora de última actualización';
