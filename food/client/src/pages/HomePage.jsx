import React from 'react';
import NavBar from '../components/Nav';
import Container from '@mui/material/Container';
import RestaurantItem from '../components/Resturant-Item/index'; // Adjust the path as per your file structure


  

  return (
    <>
      <NavBar />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
        }}
      >
        <h2>Welcome to Our Restaurant</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {restaurantItems.map(item => (
            <RestaurantItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </>
  );
}
