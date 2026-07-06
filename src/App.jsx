import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1 className="company-name">Paradise Nursery</h1>
        <AboutUs />
        <Link to="/products">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;

