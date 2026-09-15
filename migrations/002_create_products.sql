-- FASE 1: Crear tabla de productos
-- Esta tabla almacena los productos del catálogo

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL CHECK (price > 0),
  image_url VARCHAR(500),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para búsquedas y filtros rápidos
CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_name ON products(name);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_products_created_at ON products(created_at);

-- Habilitar Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Política: todos pueden leer productos
CREATE POLICY "products_readable_by_all" 
  ON products 
  FOR SELECT 
  USING (true);

-- Política: nadie puede escribir (solo admin en el futuro)
CREATE POLICY "products_no_write" 
  ON products 
  FOR INSERT
  WITH CHECK (false);

CREATE POLICY "products_no_update" 
  ON products 
  FOR UPDATE
  USING (false);

CREATE POLICY "products_no_delete" 
  ON products 
  FOR DELETE
  USING (false);