import React from 'react';

// Category
import business from '../../assets/svg/category/business-one.svg';
import science from '../../assets/svg/category/science-one.svg';
import entertainment from '../../assets/svg/category/entertainment.svg';
import genearal from '../../assets/svg/category/general.svg';
import health from '../../assets/svg/category/health-one.svg';
import sports from '../../assets/svg/category/sports.svg';
import tech from '../../assets/svg/category/tech.svg';

import './newsOptions.css';

export default () => (
  <div className='news-options'>
    <h1 className='news-options__title'>Category</h1>
    <div className='news-options__content'>
      <div className='news-options__content-block'>
        <img
          className='news-options__content-block__img'
          src={genearal}
          alt='general'
          title='general'
        />
        <img
          className='news-options__content-block__img'
          src={health}
          alt='health'
          title='health'
        />
        <img
          className='news-options__content-block__img'
          src={business}
          alt='business'
          title='business'
        />
        <img
          className='news-options__content-block__img'
          src={sports}
          alt='sports'
          title='sports'
        />
      </div>
      <div className='news-options__content-block'>
        <img
          className='news-options__content-block__img'
          src={science}
          alt='science'
          title='science'
        />
        <img
          className='news-options__content-block__img'
          src={entertainment}
          alt='entertainment'
          title='entertainment'
        />
        <img
          className='news-options__content-block__img'
          src={tech}
          alt='tech'
          title='tech'
        />
      </div>
    </div>
  </div>
);
