-- Migración 004: Seed de datos para desarrollo
-- Descripción: Inserta 3 categorías y 15 productos de ejemplo

-- Insertar categorías
INSERT INTO categories (nombre, descripcion) VALUES
  ('Herramientas', 'Herramientas manuales y eléctricas para construcción y reparación'),
  ('Materiales', 'Materiales de construcción, acabados y suministros'),
  ('Seguridad', 'Equipos de protección personal y seguridad industrial');

-- Obtener los IDs de categorías (usaremos en productos)
-- Nota: En producción, es mejor usar CTEs o triggers para mantener integridad

-- Insertar productos - Categoría: Herramientas (5 productos)
INSERT INTO products (nombre, descripcion, precio, imagen_url, categoria_id, stock) 
SELECT 
  'Martillo de Acero 500g',
  'Martillo profesional con cabeza de acero endurecido y mango de madera',
  15.99,
  'https://images.unsplash.com/photo-1557828921-08394bcadabf?w=400&h=400&fit=crop',
  id,
  50
FROM categories WHERE nombre = 'Herramientas'
UNION ALL
SELECT
  'Taladro Percutor 800W',
  'Taladro eléctrico con percusión variable, ideal para madera y hormigón',
  89.99,
  'https://images.unsplash.com/photo-1504148455328-c9760d4c3c64?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Herramientas'),
  30
UNION ALL
SELECT
  'Juego de Destornilladores (20 piezas)',
  'Set completo con destornilladores de punta y estrella en estuche',
  24.50,
  'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Herramientas'),
  45
UNION ALL
SELECT
  'Sierra Eléctrica Circular',
  'Sierra circular 1200W con disco de 185mm para cortes precisos',
  65.00,
  'https://images.unsplash.com/photo-1586432078519-fa9fac861d43?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Herramientas'),
  20
UNION ALL
SELECT
  'Nivel Láser Digital',
  'Nivel láser autonivelante de 2 líneas para trabajos de precisión',
  42.99,
  'https://images.unsplash.com/photo-1517420879113-f3dbc4e74dba?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Herramientas'),
  25;

-- Insertar productos - Categoría: Materiales (5 productos)
INSERT INTO products (nombre, descripcion, precio, imagen_url, categoria_id, stock)
SELECT
  'Cemento Portland 50kg',
  'Cemento de alta calidad para construcción general y estructuras',
  8.99,
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Materiales'),
  120
UNION ALL
SELECT
  'Arena para Construcción 40kg',
  'Arena limpia y cribada para mezclas de concreto y mortero',
  4.50,
  'https://images.unsplash.com/photo-1517427537778-5da8b45b6ea6?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Materiales'),
  150
UNION ALL
SELECT
  'Ladrillo Rojo (1000 unidades)',
  'Ladrillos cerámicos rojos estándar de 6 huecos para construcción',
  125.00,
  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Materiales'),
  500
UNION ALL
SELECT
  'Tubo PVC 4 pulgadas (3 metros)',
  'Tubo de PVC rígido para instalaciones de agua y desagüe',
  18.50,
  'https://images.unsplash.com/photo-1581092963018-91e449913e0f?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Materiales'),
  80
UNION ALL
SELECT
  'Pintura Blanca Interior 4L',
  'Pintura acrílica blanca para interiores, acabado mate',
  22.99,
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Materiales'),
  60;

-- Insertar productos - Categoría: Seguridad (5 productos)
INSERT INTO products (nombre, descripcion, precio, imagen_url, categoria_id, stock)
SELECT
  'Casco de Seguridad Amarillo',
  'Casco de protección ajustable para construcción según normas ANSI',
  12.99,
  'https://images.unsplash.com/photo-1581092163291-91734e1a00a3?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Seguridad'),
  200
UNION ALL
SELECT
  'Guantes de Trabajo Neopreno (Par)',
  'Guantes resistentes con agarre mejorado para manejo de materiales',
  7.50,
  'https://images.unsplash.com/photo-1581092162562-40038e57f027?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Seguridad'),
  300
UNION ALL
SELECT
  'Botas de Seguridad Acero 42',
  'Botas con punta y plantilla de acero, resistentes y cómodas',
  59.99,
  'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Seguridad'),
  100
UNION ALL
SELECT
  'Chaleco Reflectante Naranja',
  'Chaleco de alta visibilidad con bandas reflectantes',
  9.99,
  'https://images.unsplash.com/photo-1581092163546-cccf36c63d61?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Seguridad'),
  150
UNION ALL
SELECT
  'Máscara Respiratoria N95 (Caja 20)',
  'Máscaras de protección respiratoria N95 certificadas',
  34.99,
  'https://images.unsplash.com/photo-1581092163292-cb30ddcdfd34?w=400&h=400&fit=crop',
  (SELECT id FROM categories WHERE nombre = 'Seguridad'),
  500;

-- Comentarios
-- Seed reproducible con categorías y productos reales de ferretería
-- Precios son ilustrativos y realistas para Argentina
-- URLs de imágenes son públicas y de demostración únicamente
