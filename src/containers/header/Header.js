import React from 'react';

import newsLogo from '../../assets/svg/logo/news.svg';

import './header.css';

export default () => (
  <header className='header'>
    <div className='header-logo' tabIndex='0'>
      <img className='header-logo__img' src={newsLogo} alt='news' />
      <h1 className='header-logo__title'>NEWS</h1>
    </div>
  </header>
);
