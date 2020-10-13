import React from 'react';
import PropTypes from 'prop-types';

import NewsItem from '../news-item';
import ExplanationMessage from '../../components/explanation-message';

import './newsList.css';

const NewsList = ({ news, query, loading, error, reason }) =>
  !loading && !error && query && !news.size ? (
    <ExplanationMessage message={reason.message} img={reason.img} />
  ) : (
    <ul className='news-list'>
      {news &&
        news.map((item) => (
          <NewsItem
            key={item.get('url')}
            url={item.get('url')}
            title={item.get('title')}
          />
        ))}
    </ul>
  );

NewsList.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsList;
