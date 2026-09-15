-- FASE 1: Crear tabla de categorías
-- Esta tabla almacena las categorías de productos para el catálogo

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índice para búsquedas rápidas por nombre
CREATE INDEX idx_categories_name ON categories(name);

-- Habilitar Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Política: todos pueden leer categorías
CREATE POLICY "categories_readable_by_all" 
  ON categories 
  FOR SELECT 
  USING (true);

-- Política: nadie puede escribir (solo admin en el futuro)
CREATE POLICY "categories_no_write" 
  ON categories 
  FOR INSERT
  WITH CHECK (false);

CREATE POLICY "categories_no_update" 
  ON categories 
  FOR UPDATE
  USING (false);

CREATE POLICY "categories_no_delete" 
  ON categories 
  FOR DELETE
  USING (false);