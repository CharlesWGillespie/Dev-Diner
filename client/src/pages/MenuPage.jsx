import React, { useState } from 'react';
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItemCard from "../components/Menu-Item"; 
import CategoryNav from "../components/CategoryNav";
import menuData from "../../../server/seeders/menuSeeds.json";
import AddCategoryForm from '../components/AddCategoryForm';
import AddMenuItemForm from '../components/AddMenuItemForm'; 

import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES, QUERY_MENUITEMS } from '../utils/queries';

export default function MenuPage() {
  const [cartItems, setCartItems] = useState([]);
  const [submittedCategory, setSubmittedCategory] = useState(null);
  const [showMenuItemForm, setShowMenuItemForm] = useState({}); // State to control visibility of menu item form for each category
  const [newMenuItems, setNewMenuItems] = useState({}); // State to store new menu items for each category

  const categoryResponse = useQuery(QUERY_CATEGORIES);
  const menuItemResponse = useQuery(QUERY_MENUITEMS);

  if (categoryResponse.data) {
    console.log(categoryResponse.data.categories);
  }
  if (menuItemResponse.data) {
    console.log(menuItemResponse.data.menuItems);
  }

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
    setSubmittedCategory(category);
    console.log('Submitted category:', category);
  };

  const handleAddMenuItem = (menuItem) => {
    setNewMenuItems(prevState => ({
      ...prevState,
      [menuItem.category]: prevState[menuItem.category] ? [...prevState[menuItem.category], menuItem] : [menuItem]
    }));
    console.log('New menu item:', menuItem);
    setShowMenuItemForm(prevState => ({
      ...prevState,
      [menuItem.category]: false // Hide the form after submission
    }));
  };

  const handleToggleMenuItemForm = (category) => {
    setShowMenuItemForm(prevState => ({
      ...prevState,
      [category]: !prevState[category] // Toggle the visibility of form for a specific category
    }));
  };

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
              {/* Toggle button to show/hide add menu item form */}
              <button onClick={() => handleToggleMenuItemForm(category)}>Add Menu Item</button>
              {/* Render the menu item form if showMenuItemForm is true for this category */}
              {showMenuItemForm[category] && <AddMenuItemForm category={category} onSubmit={handleAddMenuItem} />}
              {/* Render the new menu item cards for this category */}
              {newMenuItems[category] && newMenuItems[category].map((newMenuItem, index) => (
                <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
                  <MenuItemCard
                    name={newMenuItem.foodName}
                    description={newMenuItem.description}
                    price={newMenuItem.price}
                    imageUrl={newMenuItem.imageUrl}
                    addToCart={addToCart}
                  />
                </Grid>
              ))}
            </div>
          ))}
        </div>
        {submittedCategory && <h1>{submittedCategory}</h1>}
        <AddCategoryForm onCategorySubmit={onCategorySubmit} />
      </Container>
    </>
  );
}
