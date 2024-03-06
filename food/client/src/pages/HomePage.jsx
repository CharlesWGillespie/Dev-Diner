import React from 'react';
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItemCard from '../components/Menu-Item'; // Assuming MenuItemCard.jsx is in the components folder

export default function HomePage() {
  // Sample menu items data
  const menuItems = [
    {
      name: 'Item 1',
      description: 'Description of item 1',
      price: 10.99,
      imageUrl: '/food-img/french-fries.png', // Assuming images are in the public folder
    },
    {
      name: 'Item 2',
      description: 'Description of item 2',
      price: 12.99,
      imageUrl: '/images/item2.jpg',
    },
    // Add more items as needed
  ];

  return (
    <>
      <NavBar />
      <Container>
        <h1>Menu Items</h1>
        <Grid container spacing={2}>
          {menuItems.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
              <MenuItemCard
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
