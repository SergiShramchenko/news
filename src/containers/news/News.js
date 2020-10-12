import React from 'react';

import useFetchNews from '../../custom-hooks/useFetchNews';
import useNewsCategory from '../../custom-hooks/useNewsCategory';

import NewsList from '../../components/news-list';
import NewsCategory from '../../components/news-category';
import Spinner from '../../components/spinner';

import './news.css';

const News = () => {
  const { news, category, selectedСategory, loading } = useFetchNews();
  const { changeCategory } = useNewsCategory();

  return (
    <div className='news'>
      <div className='news-content'>
        <NewsCategory
          category={category}
          selectedСategory={selectedСategory}
          changeCategory={changeCategory}
        />
        {loading ? <Spinner /> : <NewsList news={news} />}
      </div>
    </div>
  );
};

export default News;
