import React, { useState, useEffect } from 'react';
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItemCard from "../components/Menu-Item";  // Corrected import path
import CategoryNav from "../components/CategoryNav";
import menuData from "../../../server/seeders/menuSeeds.json";

import { useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_MENUITEMS } from '../utils/actions';
import { QUERY_MENUITEMS } from '../utils/queries';

export default function MenuPage() {

  const [state, dispatch] = useStoreContext()

  const { loading, data: menuItemData } = useQuery(QUERY_MENUITEMS)

  useEffect(() => {
    if(menuItemData){
      dispatch({
        type: UPDATE_MENUITEMS,
        menuItems: menuItemData.menuItems
      })
    }
  }, [menuItemData, loading, dispatch])
  
  const [cartItems, setCartItems] = useState([]);

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
      </Container>
    </>
  );
}

