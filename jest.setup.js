/**
 * Configuración de Jest setup
 */

import '@testing-library/jest-dom'

// Mock de Supabase para tests
jest.mock('@/lib/supabase', () => ({
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({ single: jest.fn() })),
        order: jest.fn(() => ({ limit: jest.fn() })),
        range: jest.fn(),
      })),
      update: jest.fn(),
      insert: jest.fn(),
      delete: jest.fn(),
    })),
  },
}))
