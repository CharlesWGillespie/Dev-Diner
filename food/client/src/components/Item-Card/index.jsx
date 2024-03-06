import React from 'react';
import RestaurantItem from '../Resturant-Item/index'; // Adjust the path as per your file structure

export default function HomePage() {
  // Sample restaurant items data
  const restaurantItems = [
    {
      id: 1,
      name: 'Item 1',
      description: 'Description of item 1',
      price: 10.99,
      image: 'item1.jpg',
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description of item 2',
      price: 8.99,
      image: 'item2.jpg',
    },
    
  ];

  return (
    <div className="homepage">
      <h2>Welcome to Our Restaurant</h2>
      <div className="restaurant-items">
        {restaurantItems.map(item => (
          <RestaurantItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

