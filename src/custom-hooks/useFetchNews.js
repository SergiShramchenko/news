import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectors } from '../redux/news/news.selectors';
import { newsActions } from '../redux/news/news.actions';

export default () => {
  const news = useSelector(selectors.articles);
  const category = useSelector(selectors.category);
  const selectedСategory = useSelector(selectors.selectedCategory);
  const loading = useSelector(selectors.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsActions.init());
  }, [dispatch]);

  return {
    news,
    category,
    selectedСategory,
    loading,
  };
};
