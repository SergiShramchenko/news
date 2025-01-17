import React from 'react';

import newsLogo from '../../assets/svg/logo/news.svg';

import './logotype.scss';

export default () => (
  <div className='logo' tabIndex='0'>
    <img
      className='logo__img'
      src={newsLogo}
      alt='news'
      style={{
        width: '54px',
        height: '54px',
      }}
    />
    <h1 className='logo__title'>NEWS</h1>
  </div>
);
