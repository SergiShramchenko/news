import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useNewsCategory from './useNewsCategory';

import { selectors } from '../redux/news/news.selectors';
import { newsActions } from '../redux/news/news.actions';

export default () => {
  const { changeCategory } = useNewsCategory();

  const news = useSelector(selectors.articles);
  const category = useSelector(selectors.category);
  const selectedСategory = useSelector(selectors.selectedCategory);
  const loading = useSelector(selectors.loading);
  const newsError = useSelector(selectors.newsError);
  const searchQuery = useSelector(selectors.searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsActions.init());
  }, [dispatch]);

  return {
    news,
    category,
    selectedСategory,
    searchQuery,
    loading,
    newsError,
    changeCategory,
  };
};
