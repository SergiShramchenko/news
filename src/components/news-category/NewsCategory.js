import React from 'react';
import PropTypes from 'prop-types';

import NewsCategoryItem from '../news-category-item';

import './newsCategory.css';

const NewsCategory = ({ category, selectedСategory, changeCategory }) => (
  <div className='news-options'>
    {category.map(({ img, name }) => (
      <NewsCategoryItem
        key={name}
        category={name}
        img={img}
        selectedСategory={selectedСategory}
        changeCategory={changeCategory}
      />
    ))}
  </div>
);

NewsCategory.propTypes = {
  changeCategory: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
  selectedСategory: PropTypes.string.isRequired,
};

export default NewsCategory;
