import React from 'react';

import './explanationMessage.scss';

export default ({ message, img }) => (
  <div className='exp'>
    <img
      className='exp__img'
      src={img}
      alt={message.reason}
      style={{
        width: '128px',
        height: '128px',
      }}
    />
    <span className='exp__title'>
      {message.reason} <br /> {message.response}
    </span>
  </div>
);
