
import React from 'react';

const CategoryNav = ({ categories, scrollToCategory }) => {
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
