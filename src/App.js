// src/App.js
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import './App.css';

const TechMart = () => {
  const [products] = useState([
    { id: 1, name: 'Laptop', description: 'High performance laptop for gaming and work.', price: 999.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGxhcHRvcHxlbnwwfHx8fDE2Mjk3NzI3ODQ&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 2, name: 'Headphones', description: 'Noise-cancelling over-ear headphones.', price: 199.99, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGhlYWRwaG9uZXN8ZW58MHx8fHwxNjI5NzcxODI4&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 3, name: 'Smartphone', description: 'Latest model smartphone with all the new features.', price: 799.99, image: 'https://i.pinimg.com/564x/c7/f2/04/c7f204445af608e1603da1df38a76f2b.jpg' },
    { id: 4, name: 'Smartwatch', description: 'Wearable smartwatch with health tracking features.', price: 299.99, image: 'https://i.pinimg.com/564x/95/c0/ee/95c0ee2192594a898618fcd1cd963510.jpg' },
    { id: 5, name: 'Camera', description: 'DSLR camera with 24MP sensor and 4K video.', price: 1299.99, image: 'https://i.pinimg.com/564x/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg' },
    { id: 6, name: 'Tablet', description: 'Portable tablet with high-resolution display.', price: 499.99, image: 'https://i.pinimg.com/564x/a8/be/0a/a8be0a5273786d3a7759c66839d49838.jpg' },
    { id: 7, name: 'Wireless Mouse', description: 'Ergonomic wireless mouse with fast response time.', price: 49.99, image: 'https://i.pinimg.com/564x/28/1e/6b/281e6b60256793b9df0b36d94efea7b4.jpg' },
    { id: 8, name: 'External Hard Drive', description: '1TB external hard drive for backup and storage.', price: 129.99, image: 'https://i.pinimg.com/564x/50/8e/6c/508e6cf87527cb52ae5ec068f68be468.jpg' },
    { id: 9, name: 'Wireless Earbuds', description: 'True wireless earbuds with noise-cancelling technology.', price: 179.99, image: 'https://i.pinimg.com/564x/14/d6/a4/14d6a497b4859b669d2a5d606a8129ec.jpg' },
    { id: 10, name: 'Gaming Chair', description: 'Ergonomic gaming chair for long hours of gaming.', price: 299.99, image: 'https://i.pinimg.com/564x/fd/6e/39/fd6e39eeb96f41e7007bc075c9ddaf9d.jpg' },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <ProductList products={products} addToCart={addToCart} />
        <Cart items={cartItems} removeFromCart={removeFromCart} total={calculateTotal()} />
      </div>
      <Footer />
    </div>
  );
};

export default TechMart; // Exporting with the new name
