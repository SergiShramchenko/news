import React from 'react';

export default ({ article: { url, title } }) => (
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
