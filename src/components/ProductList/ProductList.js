// src/components/ProductList/ProductList.js
import React from 'react';
import './ProductList.css'; // Import your CSS file for product list styles

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
