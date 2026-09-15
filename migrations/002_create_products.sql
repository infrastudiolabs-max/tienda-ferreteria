-- Migración 002: Crear tabla products
-- Descripción: Tabla de productos con referencia a categorías

CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL CHECK (precio > 0),
  imagen_url TEXT,
  categoria_id UUID NOT NULL REFERENCES categories(id) ON DELETE RESTRICT ON UPDATE CASCADE,
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
  creado_en TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  actualizado_en TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para optimización de búsquedas
CREATE INDEX IF NOT EXISTS idx_products_categoria_id ON products(categoria_id);
CREATE INDEX IF NOT EXISTS idx_products_nombre ON products(nombre);
CREATE INDEX IF NOT EXISTS idx_products_creado_en ON products(creado_en);
CREATE INDEX IF NOT EXISTS idx_products_precio ON products(precio);

-- Comentarios para documentación
COMMENT ON TABLE products IS 'Productos disponibles en la ferretería';
COMMENT ON COLUMN products.id IS 'Identificador único UUID';
COMMENT ON COLUMN products.nombre IS 'Nombre del producto';
COMMENT ON COLUMN products.descripcion IS 'Descripción detallada del producto';
COMMENT ON COLUMN products.precio IS 'Precio del producto en pesos (debe ser positivo)';
COMMENT ON COLUMN products.imagen_url IS 'URL pública de la imagen del producto';
COMMENT ON COLUMN products.categoria_id IS 'FK a la categoría del producto';
COMMENT ON COLUMN products.stock IS 'Cantidad disponible en inventario';
COMMENT ON COLUMN products.creado_en IS 'Fecha y hora de creación del producto';
COMMENT ON COLUMN products.actualizado_en IS 'Fecha y hora de última actualización';
