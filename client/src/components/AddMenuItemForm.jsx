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

    const newValue = name === 'price' ? parseFloat(value) : value;
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
    };
    onSubmit(menuItemWithCategoryId);

    setMenuItem({
      foodName: '',
      description: '',
      price: 0,
      foodPicture: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={inputContainerStyle}>
        <label htmlFor="foodName" style={labelStyle}>Food Name:</label>
        <input type="text" id="foodName" name="foodName" value={menuItem.foodName} onChange={handleChange} style={inputStyle} />
      </div>
      <div style={inputContainerStyle}>
        <label htmlFor="description" style={labelStyle}>Description:</label>
        <textarea id="description" name="description" value={menuItem.description} onChange={handleChange} style={{ ...inputStyle, ...{ height: '100px', minHeight: '20px', resize: 'none' } }} />
      </div>
      <div style={inputContainerStyle}>
        <label htmlFor="price" style={labelStyle}>Price of Item:</label>
        <input type="number" id="price" name="price" value={menuItem.price} onChange={handleChange} style={inputStyle} />
      </div>
      <div style={inputContainerStyle}>
        <label htmlFor="foodPicture" style={labelStyle}>Image URL:</label>
        <input type="text" id="foodPicture" name="foodPicture" value={menuItem.foodPicture} onChange={handleChange} style={inputStyle} />
      </div>
      <button type="submit" style={submitButtonStyle}>Submit</button>
    </form>
  );
};

const formStyle = {
  border: '2px solid white',
  padding: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const inputContainerStyle = {
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center'
};

const labelStyle = {
  color: 'white',
  marginRight: '10px',
  width: '150px'
};

const inputStyle = {
  padding: '5px',
  width: '200px',
  maxHeight: '20px'
};

const submitButtonStyle = {
  backgroundColor: 'white',
  color: 'black',
  padding: '8px 16px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer'
};

export default AddMenuItemForm;
