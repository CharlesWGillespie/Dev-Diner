
import React from 'react';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_CATEGORIES } from '../utils/actions';
import { QUERY_CATEGORIES } from '../utils/queries';


const CategoryNav = ({ categories, scrollToCategory }) => {
const [state, dispatch] = useStoreContext()

// const {categories} = state

const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES)

  useEffect(()=>{
    if(categoryData){
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      })
    }

  }, [categoryData, loading, dispatch])
  
  return (
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      {categories.map((category) => (
        <button key={category} style={{ marginRight: '10px' }} onClick={() => scrollToCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;
