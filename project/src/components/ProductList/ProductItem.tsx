import React from 'react';
import { Trash2 } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductItemProps {
  product: Product;
  onIncreasePrice: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ProductItem({ product, onIncreasePrice, onDelete }: ProductItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
      <span className="text-lg font-medium">
        {product.name} - ${product.price}
      </span>
      <div className="space-x-2">
        <button
          onClick={() => onIncreasePrice(product.id)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Increase Price
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}