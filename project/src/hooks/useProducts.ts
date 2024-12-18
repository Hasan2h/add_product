import { useState } from 'react';
import { Product } from '../types/product';

const initialProducts: Product[] = [
  { id: '1', name: 'Laptop', price: 1000 },
  { id: '2', name: 'Phone', price: 500 },
  { id: '3', name: 'Headphones', price: 150 },
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (name: string, price: string) => {
    const newProduct: Product = {
      id: Date.now().toString(),
      name,
      price: parseFloat(price),
    };
    setProducts([...products, newProduct]);
  };

  const increasePrice = (id: string) => {
    setProducts(products.map(product => 
      product.id === id 
        ? { ...product, price: product.price + 10 }
        : product
    ));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return {
    products,
    addProduct,
    increasePrice,
    deleteProduct,
  };
}