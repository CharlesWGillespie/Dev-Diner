import React, { useState } from 'react';

const AddMenuItemForm = ({ category, onSubmit }) => {
  const [formData, setFormData] = useState({
    food_name: '',
    description: '',
    price: '',
    food_picture: '',
    category: category // Pass the category to the form
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onSubmit function with the form data
    onSubmit(formData);
    // Reset form data after submission
    setFormData({
      food_name: '',
      description: '',
      price: '',
      food_picture: '',
      category: category
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="food_name"
          value={formData.food_name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="food_picture"
          value={formData.food_picture}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMenuItemForm;
