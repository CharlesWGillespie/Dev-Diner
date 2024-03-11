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
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ marginTop: '1rem' }}
          >
            Add Category
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddCategoryForm;
