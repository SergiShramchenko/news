import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import activeClass from '../../utils/activeClass';

import './newsCategoryItem.scss';

const NewsCategoryItem = ({
  changeCategory,
  category,
  img,
  selectedСategory,
}) => {
  return (
    <img
      className={classNames('news-category__img', {
        'news-category__img_active': activeClass(category, selectedСategory),
      })}
      key={category}
      src={img}
      alt={category}
      title={category}
      tabIndex='0'
      onClick={() => changeCategory(category)}
      onKeyPress={() => changeCategory(category)}
    />
  );
};

NewsCategoryItem.propTypes = {
  changeCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  selectedСategory: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default NewsCategoryItem;
