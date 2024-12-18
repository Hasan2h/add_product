import React from 'react';
import { ProductItem } from './ProductItem';
import { Product } from '../../types/product';

interface ProductListProps {
  products: Product[];
  onIncreasePrice: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ProductList({ products, onIncreasePrice, onDelete }: ProductListProps) {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onIncreasePrice={onIncreasePrice}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}