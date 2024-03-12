import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_CATEGORIES } from '../utils/actions';
import { QUERY_CATEGORIES } from '../utils/queries';

const CategoryNav = ({ categories, scrollToCategory }) => {
  const [state, dispatch] = useStoreContext();

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
    }
  }, [categoryData, loading, dispatch]);

  return (
    <div style={{ display: 'flex', marginBottom: '10px', maxHeight: '80px', overflowY: 'auto' }}>
      {categories.map((category) => (
        <button key={category._id} style={{ marginRight: '10px' }} onClick={() => scrollToCategory(category.categoryName)}>
          {category.categoryName}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;
