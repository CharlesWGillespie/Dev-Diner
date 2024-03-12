import React, { useState } from 'react';

const AddMenuItemForm = ({ onSubmit, categoryId }) => {
  const [menuItem, setMenuItem] = useState({
    foodName: '',
    description: '',
    price: 0,
    foodPicture: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newValue = name === 'price' ? parseFloat(value) : value
    setMenuItem(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const menuItemWithCategoryId = {
      ...menuItem,
      categoryId: categoryId
    }
    onSubmit(menuItemWithCategoryId);

    setMenuItem({
      foodName: '',
      description: '',
      price: 0,
      foodPicture: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px solid white', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="foodName" style={{ color: 'white' }}>Food Name:</label>
        <input type="text" id="foodName" name="foodName" value={menuItem.foodName} onChange={handleChange} style={{ marginLeft: '10px', padding: '5px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="description" style={{ color: 'white' }}>Description:</label>
        <textarea id="description" name="description" value={menuItem.description} onChange={handleChange} style={{ marginLeft: '10px', padding: '5px', resize: 'none' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="price" style={{ color: 'white' }}>Price:</label>
        <input type="number" id="price" name="price" value={menuItem.price} onChange={handleChange} style={{ marginLeft: '10px', padding: '5px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="foodPicture" style={{ color: 'white' }}>Image URL:</label>
        <input type="text" id="foodPicture" name="foodPicture" value={menuItem.foodPicture} onChange={handleChange} style={{ marginLeft: '10px', padding: '5px' }} />
      </div>
      <button type="submit" style={{ backgroundColor: 'white', color: 'black', padding: '8px 16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Submit</button>
    </form>
  );
};

export default AddMenuItemForm;
