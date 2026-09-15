-- FASE 1: Seed de datos de ejemplo
-- Inserta categorías y productos para demostración

-- Insertar categorías
INSERT INTO categories (id, name, description, created_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440001'::uuid, 'Herramientas', 'Herramientas manuales y eléctricas para construcción y reparación', NOW()),
  ('550e8400-e29b-41d4-a716-446655440002'::uuid, 'Materiales', 'Materiales de construcción: cemento, arena, ladrillos y más', NOW()),
  ('550e8400-e29b-41d4-a716-446655440003'::uuid, 'Seguridad', 'Equipos de protección personal y seguridad en el trabajo', NOW());

-- Insertar productos en Herramientas (5 productos)
INSERT INTO products (id, name, description, price, image_url, category_id, stock, created_at, updated_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440011'::uuid, 'Martillo de Goma', 'Martillo con cabeza de goma para trabajos delicados. Mango de madera resistente.', 15.99, 'https://images.unsplash.com/photo-1615486511537-d7c2265c4cc7?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440001'::uuid, 45, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440012'::uuid, 'Destornillador Phillips Set', 'Set de 6 destornilladores Phillips de diferentes tamaños. Manejo ergonómico.', 12.50, 'https://images.unsplash.com/photo-1586418302244-e3876e83b31b?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440001'::uuid, 60, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440013'::uuid, 'Taladro Inalámbrico 20V', 'Taladro profesional con batería recargable. Incluye 2 baterías y cargador.', 89.99, 'https://images.unsplash.com/photo-1608777203418-b21ff3b32f53?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440001'::uuid, 22, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440014'::uuid, 'Sierra de Mano', 'Sierra manual con hoja de acero templado. Ideal para corte preciso de madera.', 18.75, 'https://images.unsplash.com/photo-1589932932868-8d1da2bb7c5a?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440001'::uuid, 35, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440015'::uuid, 'Llave Inglesa Ajustable', 'Llave inglesa cromada con apertura de hasta 30mm. Muy versátil y duradera.', 9.99, 'https://images.unsplash.com/photo-1634026505663-8ac0b8e9d14b?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440001'::uuid, 78, NOW(), NOW()),

-- Insertar productos en Materiales (5 productos)
  ('550e8400-e29b-41d4-a716-446655440021'::uuid, 'Cemento Gris 50kg', 'Cemento Portland tipo I. Presentación en bolsa de 50kg. Ideal para estructuras.', 8.50, 'https://images.unsplash.com/photo-1590080876-c1d6e9d0a7ba?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440002'::uuid, 150, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440022'::uuid, 'Arena Fina 20kg', 'Arena fina tamizada para construcción y acabados. Bolsa de 20kg.', 3.75, 'https://images.unsplash.com/photo-1552840042-f3facad58a9a?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440002'::uuid, 200, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440023'::uuid, 'Ladrillos Rojos (1000 unid)', 'Ladrillos cerámicos rojos 6x12x24cm. Lote de 1000 unidades.', 120.00, 'https://images.unsplash.com/photo-1576784857594-cf5ba4834e2a?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440002'::uuid, 20, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440024'::uuid, 'Tubo PVC 4 pulgadas 3m', 'Tubo de PVC rígido para sistemas de agua. Diámetro 4 pulgadas, largo 3m.', 22.50, 'https://images.unsplash.com/photo-1561518776-e76a4a0c3356?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440002'::uuid, 85, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440025'::uuid, 'Tablero de Madera Contrachapado 1.22x2.44m', 'Contrachapado de 15mm de espesor. Dimensiones estándar para construcción.', 45.00, 'https://images.unsplash.com/photo-1565249409695-7b5ef63a2efb?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440002'::uuid, 30, NOW(), NOW()),

-- Insertar productos en Seguridad (5 productos)
  ('550e8400-e29b-41d4-a716-446655440031'::uuid, 'Casco de Seguridad Amarillo', 'Casco protector amarillo certificado. Ajuste con ruleta y correa para barbilla.', 14.99, 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440003'::uuid, 120, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440032'::uuid, 'Guantes de Trabajo Nitrilo', 'Guantes resistentes de nitrilo para protección. Caja de 100 pares.', 19.50, 'https://images.unsplash.com/photo-1584622281413-abc14130e97d?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440003'::uuid, 95, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440033'::uuid, 'Gafas de Seguridad Transparentes', 'Gafas protectoras con lentes transparentes. Protección contra impactos.', 7.75, 'https://images.unsplash.com/photo-1580268656055-41b8b35db6a5?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440003'::uuid, 150, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440034'::uuid, 'Chaleco Reflectivo Naranja', 'Chaleco de seguridad con franjas reflectivas. Ideal para trabajos en carreteras.', 11.25, 'https://images.unsplash.com/photo-1576271458955-426174fab686?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440003'::uuid, 85, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440035'::uuid, 'Botas de Seguridad Acero', 'Botas con puntera de acero y suela resistente. Tallas disponibles 35-48.', 65.00, 'https://images.unsplash.com/photo-1560070132-daf6e65f3384?w=500&h=500&fit=crop', '550e8400-e29b-41d4-a716-446655440003'::uuid, 40, NOW(), NOW());