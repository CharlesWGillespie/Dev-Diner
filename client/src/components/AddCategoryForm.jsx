import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';

const AddCategoryForm = ({ onCategorySubmit }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCategorySubmit(categoryName);
   
    setCategoryName('');
  };

  return (
    <Card sx={{ fontSize: '15px', maxWidth: 200, maxHeight: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1rem' }}> {/* Adjust the font size as needed */}
          Add Category
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="categoryName"
            label="Category Name"
            variant="outlined"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
            fullWidth
            margin="dense"
            sx={{ fontSize: '15px',  }} // Adjust the font size as needed
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ marginTop: '1rem', fontSize: '15px', }} 
          >
            Add Category
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddCategoryForm;
