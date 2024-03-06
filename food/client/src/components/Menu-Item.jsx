import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const MenuItemCard = ({ name, description, price, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="auto"
        image={imageUrl}
        alt={name}
        sx={{ maxHeight: 150 }}
      />
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
    </Card>
  );
};

export default MenuItemCard;