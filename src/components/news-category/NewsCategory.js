import React from 'react';
import PropTypes from 'prop-types';

import NewsCategoryItem from '../news-category-item';

import './newsCategory.scss';

const NewsCategory = ({ category, selectedСategory, changeCategory }) => {
  return (
    <div className='news-category'>
      {category.map((item) => (
        <NewsCategoryItem
          key={item.get('name')}
          category={item.get('name')}
          img={item.get('img')}
          selectedСategory={selectedСategory}
          changeCategory={changeCategory}
        />
      ))}
    </div>
  );
};

NewsCategory.propTypes = {
  changeCategory: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  selectedСategory: PropTypes.string.isRequired,
};

export default NewsCategory;
