import React from 'react';
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItemCard from '../components/Menu-Item'; 
import menuData from '../../../server/seeders/menuSeeds.json'; 

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Menu Items</h1>
        <Grid container spacing={2}>
          {menuData.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
              <MenuItemCard
                name={item.food_name}
                description={item.description}
                price={item.price}
                imageUrl={item.food_picture}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}