import React from 'react';

import spinner from '../../assets/svg/spinner/spinner.svg';

import './spinner.css';

export default () => (
  <div className='spinner'>
    <img src={spinner} alt='spinner' />
  </div>
);
