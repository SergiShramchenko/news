import React from 'react';

import './newsOptions.css';

export default ({ category }) => (
  <div className='news-options'>
    {category.map(({ img, name }) => (
      <img
        className='news-options__img'
        key={name}
        src={img}
        alt={name}
        title={name}
        tabIndex='0'
      />
    ))}
  </div>
);
