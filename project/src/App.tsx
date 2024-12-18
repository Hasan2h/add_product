import React from 'react';
import { ProductForm } from './components/ProductForm/ProductForm';
import { ProductList } from './components/ProductList/ProductList';
import { useProducts } from './hooks/useProducts';

function App() {
  const { products, addProduct, increasePrice, deleteProduct } = useProducts();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ProductForm onSubmit={addProduct} />
        <ProductList
          products={products}
          onIncreasePrice={increasePrice}
          onDelete={deleteProduct}
        />
      </div>
    </div>
  );
}

export default App;