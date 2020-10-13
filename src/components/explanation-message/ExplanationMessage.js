import React from 'react';

import './explanationMessage.css';

export default ({ message, img }) => (
  <div className='exp'>
    <img className='exp__img' src={img} alt={message.reason} />
    <span className='exp__title'>
      {message.reason} <br /> {message.response}
    </span>
  </div>
);
