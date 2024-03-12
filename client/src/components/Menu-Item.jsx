import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { QUERY_MENUITEMS } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { DELETE_MENUITEM } from '../utils/mutations'

const MenuItemCard = ({ id, name, description, price, imageUrl, addToCart }) => {

  const [deleteMenuItem] = useMutation(DELETE_MENUITEM, {
    refetchQueries: [
      QUERY_MENUITEMS,
      'GetMenuItems'
    ],
  })

  const handleAddToCart = () => {
    addToCart({ name, price });
  };

  const handleDelete = async (id) => {
    console.log(id)
    const response = await deleteMenuItem({ variables: { id: id } })
    return response
  };

  return (
    <Card sx={{ width: 170 }}>
      <CardMedia
        component="img"
        height="auto"
        image={imageUrl}
        alt={name}
        sx={{ maxHeight: 150 }}
      />
      <div style={{ height: '140px', overflow: 'hidden' }}>
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* DELETE BUTTON */}
        <Button variant="contained" startIcon={<DeleteIcon />} style={{ marginBottom: '10px', color: 'red', width: 'fit-content' }} onClick={() => handleDelete(id)}>

          Delete
        </Button>
        <Button variant="contained" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default MenuItemCard;
