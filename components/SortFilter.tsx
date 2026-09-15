'use client'

import { FC } from 'react'

interface SortFilterProps {
  sortBy: 'price-asc' | 'price-desc' | 'newest' | 'name'
  onSortChange: (sort: 'price-asc' | 'price-desc' | 'newest' | 'name') => void
}

const SORT_OPTIONS = [
  { value: 'newest' as const, label: 'Más recientes' },
  { value: 'name' as const, label: 'Nombre (A-Z)' },
  { value: 'price-asc' as const, label: 'Precio (menor a mayor)' },
  { value: 'price-desc' as const, label: 'Precio (mayor a menor)' },
]

export const SortFilter: FC<SortFilterProps> = ({ sortBy, onSortChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Ordenar por</h3>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as any)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
