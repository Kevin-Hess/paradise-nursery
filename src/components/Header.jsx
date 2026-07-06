import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="navbar">
      <Link to="/" className="nav-logo">
        <h2>Paradise Nursery</h2>
      </Link>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Plants</Link>
        <Link to="/cart" className="nav-cart">
          <span className="cart-icon" role="img" aria-label="cart">🛒</span>
          <span className="cart-count">{totalQuantity}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
