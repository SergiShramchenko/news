import React from 'react';

import NewsItem from '../news-item';

import './newsList.css';

export default ({ news }) => (
  <ul className='news-list'>
    {news &&
      news.map((article) => <NewsItem key={article.url} article={article} />)}
  </ul>
);
