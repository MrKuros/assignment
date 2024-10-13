import React, { useState } from 'react';
import ProductDisplay from './ProductDisplay';

const ProductManager = () => {
  const [product, setProduct] = useState({
    name: "Ergonomic Desk Chair",
    description: "A comfortable and adjustable chair perfect for long work hours.",
    price: 199.99,
  });

  const updateProduct = () => {
    setProduct(prevProduct => ({
      ...prevProduct,
      name: `${prevProduct.name} (Updated)`,
      description: `${prevProduct.description} Now with improved features!`,
      price: prevProduct.price + 10,
    }));
  };

  return React.createElement('div', { className: 'container mx-auto p-4' },
    React.createElement('h2', { className: 'text-xl font-bold mb-4 text-center' }, 'Product Manager'),
    React.createElement(ProductDisplay, { product: product, onUpdate: updateProduct })
  );
};

export default ProductManager;
