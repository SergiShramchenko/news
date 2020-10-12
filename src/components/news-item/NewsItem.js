import React from 'react';
import PropTypes from 'prop-types';

import './newsItem.css';

const NewsItem = ({ url, title }) => (
  <li className='news-item'>
    <a
      className='news-item__link'
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
