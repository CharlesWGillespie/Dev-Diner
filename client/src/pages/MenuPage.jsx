import React, { useState, useEffect } from 'react';
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItemCard from "../components/Menu-Item";
import CategoryNav from "../components/CategoryNav";
import AddCategoryForm from '../components/AddCategoryForm';
import AddMenuItemForm from '../components/AddMenuItemForm';

import { useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_MENUITEMS, ADD_TO_CART } from '../utils/actions';
import { QUERY_MENUITEMS, QUERY_CATEGORIES } from '../utils/queries';
import { ADD_CATEGORY, ADD_MENUITEM } from '../utils/mutations'
import { useMutation } from '@apollo/client';

export default function MenuPage() {
  const [showMenuItemForm, setShowMenuItemForm] = useState({});
  const [state, dispatch] = useStoreContext()
  const [addCategory] = useMutation(ADD_CATEGORY, {
    refetchQueries: [
      QUERY_CATEGORIES,
      'GetCategories'
    ],
  })
  const [addMenuItem] = useMutation(ADD_MENUITEM, {
    refetchQueries: [
      QUERY_MENUITEMS,
      'GetMenuItems'
    ]
  })

  const { loading, data: menuItemData } = useQuery(QUERY_MENUITEMS)

  useEffect(() => {
    if (menuItemData) {
      dispatch({
        type: UPDATE_MENUITEMS,
        menuItems: menuItemData.menuItems
      })
    }
  }, [menuItemData, loading, dispatch])

  useEffect(() => {
    console.log(state.cart)
  }, [state.cart])

  const addToCart = (item) => {
    dispatch({
      type: ADD_TO_CART,
      menuItem: item
    })
  };

  const onCategorySubmit = async (category) => {
    const mutationResponse = await addCategory({ variables: { categoryName: category } })
  };

  const handleToggleMenuItemForm = (category) => {
    setShowMenuItemForm(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  const categories = state.categories
  const menuItems = state.menuItems

  const menuItemsByCategory = menuItems.reduce((acc, item) => {
    if (!acc[item.categoryId]) {
      acc[item.categoryId] = [];
    }
    acc[item.categoryId].push(item);
    return acc;
  }, {});

  const handleScrollToCategory = (category) => {
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddMenuItem = async (menuItemWithCategoryId) => {
    const mutationResponse = await addMenuItem({ variables: menuItemWithCategoryId })
    setShowMenuItemForm(prevState => ({
      ...prevState,
      [menuItemWithCategoryId.categoryId]: false
    }));
  };
console.log(menuItemsByCategory)
  return (
    <>
      <NavBar />
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ marginTop: '100px', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <CategoryNav categories={categories} scrollToCategory={handleScrollToCategory} style={{ height: '100px', width: '100px' }} />
          <div style={{ width: '200px' }}>
            <AddCategoryForm onCategorySubmit={onCategorySubmit} style={{ height: '100px', width: '100px' }} />
          </div>
        </div>
        <div style={{ width: '100%' }}>
          {categories.map((category) => (
            <div key={category._id} id={category.categoryName} style={{ marginBottom: '20px', position: 'relative' }}>
              <h2>{category.categoryName}</h2>
              <button style={{ position: 'absolute', top: '5px', right: '5px' }} onClick={() => handleDeleteCategory(category._id)}>Delete Category</button>
              <Grid container spacing={2}>
                {menuItemsByCategory[category._id]?.map((item, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
                    <MenuItemCard
                      id={item._id}
                      name={item.foodName}
                      description={item.description}
                      price={item.price}
                      imageUrl={item.foodPicture}
                      addToCart={addToCart}
                    />
                  </Grid>
                ))}
              </Grid>
              <button onClick={() => handleToggleMenuItemForm(category)}>Add Menu Item</button>
              {showMenuItemForm[category] && <AddMenuItemForm categoryId={category._id} onSubmit={handleAddMenuItem} />}
            </div>
          ))}

        </div>
      </Container>
    </>
  );
}
