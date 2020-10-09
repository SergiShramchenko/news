import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { newsActions } from '../redux/news/actions';

export default () => {
  const news = useSelector((state) => state.news.data);
  const category = useSelector((state) => state.news.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsActions.startFetchNews());
  }, [dispatch]);

  return {
    news,
    category,
  };
};
