import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import './CartItem.css';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const parsePrice = (cost) => parseFloat(cost.replace('$', ''));

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.cost) * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    alert('Checkout functionality coming soon!');
  };

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-container">
        <h1 className="cart-heading">Your Shopping Cart</h1>

        <div className="cart-summary">
          <p className="cart-summary-item">Total Plants: <span>{totalQuantity}</span></p>
          <p className="cart-summary-item">Total Cost: <span>${totalAmount.toFixed(2)}</span></p>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} className="cart-item-thumbnail" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-unit-price">Unit Price: {item.cost}</p>
                  <p className="cart-item-subtotal">
                    Subtotal: ${(parsePrice(item.cost) * item.quantity).toFixed(2)}
                  </p>
                  <div className="quantity-controls">
                    <button className="quantity-button" onClick={() => handleDecrement(item)}>-</button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button className="quantity-button" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                </div>
                <button className="delete-button" onClick={() => handleDelete(item)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-actions">
          <button className="continue-shopping-button" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

