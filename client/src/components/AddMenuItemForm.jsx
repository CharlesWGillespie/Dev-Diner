import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddMenuItemForm = ({ onSubmit }) => {
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ foodName, description, price, imageUrl });
    // Reset form fields after submission
    setFoodName('');
    setDescription('');
    setPrice('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Food Name"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Menu Item
      </Button>
    </form>
  );
};

export default AddMenuItemForm;
