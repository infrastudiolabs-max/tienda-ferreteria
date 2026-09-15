'use client'

import { FC } from 'react'
import { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategoryId?: string
  onCategoryChange: (categoryId: string | undefined) => void
}

export const CategoryFilter: FC<CategoryFilterProps> = ({
  categories,
  selectedCategoryId,
  onCategoryChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Categorías</h3>
      <div className="space-y-2">
        {/* Opción: Todas las categorías */}
        <button
          onClick={() => onCategoryChange(undefined)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            !selectedCategoryId
              ? 'bg-blue-600 text-white font-semibold'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Todas las categorías
        </button>

        {/* Categorías */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategoryId === category.id
                ? 'bg-blue-600 text-white font-semibold'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}
