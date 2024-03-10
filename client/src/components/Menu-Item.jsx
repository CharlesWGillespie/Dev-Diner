import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button'; // Import Button component

const MenuItemCard = ({ name, description, price, imageUrl, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ name, price }); // Pass item details to addToCart function
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="auto"
        image={imageUrl}
        alt={name}
        sx={{ maxHeight: 150 }}
      />
      {/* Container with fixed height and hidden overflow */}
      <div style={{ height: '180px', overflow: 'hidden' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
      </div>
      {/* Container to center the button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <Button variant="contained" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default MenuItemCard;
