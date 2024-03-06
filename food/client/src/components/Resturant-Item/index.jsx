import React from 'react';

export default function RestaurantItem({ item }) {
  const { name, description, price, image } = item;

  const addToCart = () => {
    // Implement add to cart functionality here
    console.log(`Added ${name} to cart`);
  };

  return (
    <div className="restaurant-item">
      <div className="restaurant-item-image">
        <img src={`/food-img/${image}`} alt={name} />
      </div>
      <div className="restaurant-item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

