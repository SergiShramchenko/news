import React from 'react';

import useFetchNews from '../../custom-hooks/useFetchNews';

import NewsList from '../../components/news-list';
import NewsCategory from '../../components/news-category';

import WithSpinner from '../../components/with-spinner';
import ErrorBoundary from '../../components/error-boundary';

import { no_results, not_found } from '../../utils/expMessages';

import './news.scss';

const News = () => {
  const {
    news,
    category,
    selectedСategory,
    searchQuery,
    loading,
    newsError,
    changeCategory,
  } = useFetchNews();

  return (
    <main className='main'>
      <NewsCategory
        category={category}
        selectedСategory={selectedСategory}
        changeCategory={changeCategory}
      />
      <ErrorBoundary error={newsError} reason={not_found}>
        <WithSpinner loading={loading}>
          <NewsList
            news={news}
            query={searchQuery}
            loading={loading}
            error={newsError}
            reason={no_results}
          />
        </WithSpinner>
      </ErrorBoundary>
    </main>
  );
};

export default News;
