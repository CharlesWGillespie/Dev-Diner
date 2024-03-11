import React, { useState } from 'react';
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItemCard from "../components/Menu-Item";  // Corrected import path
import CategoryNav from "../components/CategoryNav"; 
import menuData from "../../../server/seeders/menuSeeds.json"; 
import AddCategoryForm from '../components/AddCategoryForm';

import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES, QUERY_MENUITEMS } from '../utils/queries';

export default function MenuPage() {
  const [cartItems, setCartItems] = useState([]);
  
  const categoryResponse = useQuery(QUERY_CATEGORIES)
  const menuItemResponse = useQuery(QUERY_MENUITEMS)
  if(categoryResponse.data){console.log(categoryResponse.data.categories)}
  if(menuItemResponse.data){console.log(menuItemResponse.data.menuItems)}

  const addToCart = (item) => {
    console.log("Adding item to cart:", item);
    setCartItems([...cartItems, item]);
  };
  console.log("Current cart items:", cartItems);
  
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

  const onCategorySubmit = (category) => {
    // Implement logic to handle category submission
    console.log('Submitted category:', category);
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
                <MenuItemCard
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
                    <MenuItemCard
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
        <AddCategoryForm onCategorySubmit={onCategorySubmit} />
      </Container>
    </>
  );
}
