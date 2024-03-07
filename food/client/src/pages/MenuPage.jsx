import React, { useState } from 'react';
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItem from '../components/Menu-Item'; 
import CategoryNav from '../components/CategoryNav'; 
import menuData from '../../../server/seeders/menuSeeds.json'; 

export default function MenuPage() {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  
  const specials = menuData.filter(item => item.category === 'Specials');
  const menuItemsByCategory = menuData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  
  const handleScrollToCategory = (category) => {
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Filter out the "Specials" category from the list of categories
  const categories = Object.keys(menuItemsByCategory).filter(category => category !== 'Specials');
  
  return (
    <>
      <NavBar />
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ marginTop: '100px', width: '100%' }}>
          <CategoryNav categories={categories} scrollToCategory={handleScrollToCategory} />
          <h1>Specials</h1>
          <Grid container spacing={2}>
            {specials.map((item, index) => (
              <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
                <MenuItem
                  name={item.food_name}
                  description={item.description}
                  price={item.price}
                  imageUrl={item.food_picture}
                  addToCart={addToCart}
                />
              </Grid>
            ))}
          </Grid>
          
          {categories.map((category) => (
            <div key={category} id={category} style={{ marginBottom: '20px' }}>
              <h2>{category}</h2>
              <Grid container spacing={2}>
                {menuItemsByCategory[category].map((item, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
                    <MenuItem
                      name={item.food_name}
                      description={item.description}
                      price={item.price}
                      imageUrl={item.food_picture}
                      addToCart={addToCart}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
