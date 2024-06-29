// src/components/Cart/Cart.js
import React from 'react';
import './Cart.css'; // Import your CSS file for cart styles

const Cart = ({ items, removeFromCart, total }) => {

  const placeOrder = () => {
    alert('Your order has been placed!');
    // You can add additional logic here, like sending order details to a backend or resetting the cart
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="place-order-button" onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
