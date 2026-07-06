import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://placehold.co/300x300/2f7d3c/ffffff?text=Snake+Plant', cost: '$18.00' },
      { name: 'Spider Plant', image: 'https://placehold.co/300x300/3a8f4a/ffffff?text=Spider+Plant', cost: '$15.00' },
      { name: 'Peace Lily', image: 'https://placehold.co/300x300/246b34/ffffff?text=Peace+Lily', cost: '$22.00' },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', image: 'https://placehold.co/300x300/6b4fa0/ffffff?text=Lavender', cost: '$14.00' },
      { name: 'Jasmine', image: 'https://placehold.co/300x300/7a5cb5/ffffff?text=Jasmine', cost: '$16.00' },
      { name: 'Rosemary', image: 'https://placehold.co/300x300/4f7d5c/ffffff?text=Rosemary', cost: '$12.00' },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { name: 'Aloe Vera', image: 'https://placehold.co/300x300/8a9a3c/ffffff?text=Aloe+Vera', cost: '$10.00' },
      { name: 'Echeveria', image: 'https://placehold.co/300x300/9aa93c/ffffff?text=Echeveria', cost: '$9.00' },
      { name: 'Jade Plant', image: 'https://placehold.co/300x300/6f9a3c/ffffff?text=Jade+Plant', cost: '$11.00' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prevState) => ({ ...prevState, [plant.name]: true }));
  };

  return (
    <div className="product-list-page">
      <Header />
      <div className="product-list-container">
        <h1 className="page-title">Our Plants</h1>
        {plantsData.map((categoryItem) => (
          <div className="category-section" key={categoryItem.category}>
            <h2 className="category-title">{categoryItem.category}</h2>
            <div className="plant-grid">
              {categoryItem.plants.map((plant) => (
                <div className="plant-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <h3 className="plant-name">{plant.name}</h3>
                  <p className="plant-price">{plant.cost}</p>
                  <button
                    className="add-to-cart-button"
                    disabled={Boolean(addedItems[plant.name])}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedItems[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

