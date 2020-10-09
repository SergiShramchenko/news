import React from 'react';

import './newsItem.css';

export default ({ article: { url, title } }) => (
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
