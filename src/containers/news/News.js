import React from 'react';

import useFetchNews from '../../custom-hooks/useFetchNews';

// components
import NewsList from '../../components/news-list';
import NewsOptions from '../../components/news-options';

import './news.css';

export default () => {
  const { news } = useFetchNews();

  return (
    <div className='container'>
      <div className='news'>
        <div className='news-content'>
          <NewsList news={news} />
          <NewsOptions />
        </div>
      </div>
    </div>
  );
};
