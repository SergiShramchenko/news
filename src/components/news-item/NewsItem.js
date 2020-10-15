import React from 'react';
import PropTypes from 'prop-types';

import './newsItem.scss';

const NewsItem = ({ url, title }) => (
  <li className='news-list__item'>
    <a
      className='news-list__item__link'
      rel='noopener noreferrer'
      href={url}
      target='_blank'
    >
      {title}
    </a>
  </li>
);

NewsItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsItem;
