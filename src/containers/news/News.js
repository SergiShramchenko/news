import React from 'react';

import useFetchNews from '../../custom-hooks/useFetchNews';

import NewsList from '../../components/news-list';
import NewsOptions from '../../components/news-options';

import './news.css';

export default () => {
  const { news, category } = useFetchNews();

  return (
    <div className='news'>
      <div className='news-content'>
        <NewsOptions category={category} />
        <NewsList news={news} />
      </div>
    </div>
  );
};
