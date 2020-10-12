import React from 'react';

import useFetchNews from '../../custom-hooks/useFetchNews';
import useNewsCategory from '../../custom-hooks/useNewsCategory';

import NewsList from '../../components/news-list';
import NewsCategory from '../../components/news-category';
import Spinner from '../../components/spinner';

import NoResult from '../../components/no-result';
import NotFound from '../../components/not-found';

import './news.css';

const News = () => {
  const { news, category, selectedСategory, loading, error } = useFetchNews();
  const { changeCategory } = useNewsCategory();

  return (
    <div className='news'>
      <div className='news-content'>
        <NewsCategory
          category={category}
          selectedСategory={selectedСategory}
          changeCategory={changeCategory}
        />
        {loading ? (
          <Spinner />
        ) : !loading && !error && !news.length ? (
          <NoResult />
        ) : error ? (
          <NotFound />
        ) : (
          <NewsList news={news} />
        )}
      </div>
    </div>
  );
};

export default News;
