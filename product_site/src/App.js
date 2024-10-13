import React from 'react';
import ProductManager from './ProductManager';

const App = () => {
  return React.createElement('div', { className: 'app' },
    React.createElement('header', { className: 'bg-blue-500 text-white p-4 mb-4' },
      React.createElement('h1', { className: 'text-2xl font-bold' }, 'Product Management App')
    ),
    React.createElement(ProductManager)
  );
};

export default App;
