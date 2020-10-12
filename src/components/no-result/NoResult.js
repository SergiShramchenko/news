import React from 'react';

import alien from '../../assets/svg/no-results/alien.svg';

import './noResult.css';

export default () => (
  <div className='no-result'>
    <img className='no-result__img' src={alien} alt='no-result' />
    <span className='no-result__title'>
      Sorry, we didn't find anything. <br /> Please try another category or
      change your request.
    </span>
  </div>
);
