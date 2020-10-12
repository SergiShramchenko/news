import React from 'react';

import robot from '../../assets/svg/not-found/robot.svg';

import './notFound.css';

export default () => (
  <div className='not-found'>
    <img className='not-found__img' src={robot} alt='not-found' />
    <span className='not-found__title'>
      Sorry, something went wrong... <br /> We are already working on fixing the
      problem.
    </span>
  </div>
);
