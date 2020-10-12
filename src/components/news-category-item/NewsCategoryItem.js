import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import activeClass from '../../utils/activeClass';

import './newsCategoryItem.css';

const NewsCategoryItem = ({
  changeCategory,
  category,
  img,
  selectedСategory,
}) => (
  <img
    className={classNames('news-options__img', {
      active: activeClass(category, selectedСategory),
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

NewsCategoryItem.propTypes = {
  changeCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  selectedСategory: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default NewsCategoryItem;
