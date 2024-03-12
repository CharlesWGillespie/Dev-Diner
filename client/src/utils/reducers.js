import {
    ADD_TO_CART,
    UPDATE_CATEGORIES,
    UPDATE_MENUITEMS
  } from './actions';
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case UPDATE_MENUITEMS:
        return {
          ...state,
          menuItems: [...action.menuItems],
        };
        
        case UPDATE_CATEGORIES:
          return {
            ...state,
            categories: [...action.categories],
          };
          
        case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.menuItem],
        };
      default:
        return state;
    }
  };
  