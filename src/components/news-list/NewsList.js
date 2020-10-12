import React from 'react';
import PropTypes from 'prop-types';

import NewsItem from '../news-item';

import './newsList.css';

const NewsList = ({ news }) => (
  <ul className='news-list'>
    {news &&
      news.map(({ url, title }) => (
        <NewsItem key={url} url={url} title={title} />
      ))}
  </ul>
);

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsList;
