import React from 'react';

import useFetchNews from '../../custom-hooks/useFetchNews';
import useNewsCategory from '../../custom-hooks/useNewsCategory';

import NewsList from '../../components/news-list';
import NewsCategory from '../../components/news-category';

import WithSpinner from '../../components/with-spinner';
import ErrorBoundary from '../../components/error-boundary';

import { no_results, not_found } from '../../utils/explanation-messages';

import './news.scss';

const News = () => {
  const {
    news,
    category,
    selectedСategory,
    searchQuery,
    loading,
    newsError,
  } = useFetchNews();
  const { changeCategory } = useNewsCategory();

  return (
    <div className='news'>
      <div className='news-content'>
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
      </div>
    </div>
  );
};

export default News;
