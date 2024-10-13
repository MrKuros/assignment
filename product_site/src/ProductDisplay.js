import React from 'react';
import { productDisplayPropTypes } from './propTypes';

const ProductDisplay = ({ product, onUpdate }) => {
  return React.createElement('div', { className: 'bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto' },
    React.createElement('h3', { className: 'text-xl font-semibold mb-2' }, product.name),
    React.createElement('p', { className: 'text-gray-600 mb-4' }, product.description),
    React.createElement('p', { className: 'text-lg font-bold mb-4' }, `$${product.price.toFixed(2)}`),
    React.createElement('button', {
      className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
      onClick: onUpdate
    }, 'Update Product')
  );
};

ProductDisplay.propTypes = productDisplayPropTypes;

export default ProductDisplay;
