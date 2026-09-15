'use client'

import { FC } from 'react'

interface PriceRangeFilterProps {
  minPrice: number
  maxPrice: number
  selectedMinPrice: number
  selectedMaxPrice: number
  onMinPriceChange: (price: number) => void
  onMaxPriceChange: (price: number) => void
}

export const PriceRangeFilter: FC<PriceRangeFilterProps> = ({
  minPrice,
  maxPrice,
  selectedMinPrice,
  selectedMaxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Rango de Precio</h3>
      <div className="space-y-4">
        {/* Precio mínimo */}
        <div>
          <label className="text-sm text-gray-600 mb-2 block">
            Precio mínimo: ${selectedMinPrice.toFixed(2)}
          </label>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={selectedMinPrice}
            onChange={(e) => onMinPriceChange(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Precio máximo */}
        <div>
          <label className="text-sm text-gray-600 mb-2 block">
            Precio máximo: ${selectedMaxPrice.toFixed(2)}
          </label>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={selectedMaxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Rango */}
        <p className="text-center text-gray-700 font-semibold">
          ${selectedMinPrice.toFixed(2)} - ${selectedMaxPrice.toFixed(2)}
        </p>
      </div>
    </div>
  )
}
