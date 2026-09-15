-- Migración 003: Habilitar Row Level Security (RLS)
-- Descripción: Configurar políticas de seguridad para acceso público a lectura

-- Habilitar RLS en tabla categories
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Política: Permitir lectura pública a categorías
CREATE POLICY "allow_read_categories" ON categories
  FOR SELECT
  USING (true);

-- Política: Denegar escritura sin autenticación
CREATE POLICY "deny_write_categories" ON categories
  FOR INSERT
  WITH CHECK (false);

CREATE POLICY "deny_update_categories" ON categories
  FOR UPDATE
  USING (false);

CREATE POLICY "deny_delete_categories" ON categories
  FOR DELETE
  USING (false);

-- Habilitar RLS en tabla products
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Política: Permitir lectura pública a productos
CREATE POLICY "allow_read_products" ON products
  FOR SELECT
  USING (true);

-- Política: Denegar escritura sin autenticación
CREATE POLICY "deny_write_products" ON products
  FOR INSERT
  WITH CHECK (false);

CREATE POLICY "deny_update_products" ON products
  FOR UPDATE
  USING (false);

CREATE POLICY "deny_delete_products" ON products
  FOR DELETE
  USING (false);

-- Comentarios
COMMENT ON POLICY "allow_read_categories" ON categories IS 'Todos pueden leer categorías públicamente';
COMMENT ON POLICY "deny_write_categories" ON categories IS 'Bloqueado: escritura no autenticada';
COMMENT ON POLICY "deny_write_products" ON products IS 'Bloqueado: escritura no autenticada';
COMMENT ON POLICY "allow_read_products" ON products IS 'Todos pueden leer productos públicamente';
