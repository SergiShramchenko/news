import React from 'react';
import PropTypes from 'prop-types';

import NewsItem from '../news-item';
import ExplanationMessage from '../../components/explanation-message';

import './newsList.scss';

const NewsList = ({ news, query, loading, error, reason }) =>
  !loading && !error && query && !news.size ? (
    <ExplanationMessage message={reason.message} img={reason.img} />
  ) : (
    <ul className='news-list'>
      {news &&
        news.map((item, idx) => (
          <NewsItem key={idx} url={item.get('url')} title={item.get('title')} />
        ))}
    </ul>
  );

NewsList.propTypes = {
  news: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  reason: PropTypes.object.isRequired,
};

export default NewsList;
