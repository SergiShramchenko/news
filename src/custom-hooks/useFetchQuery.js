import { useDispatch, useSelector } from 'react-redux';

import { newsActions } from '../redux/news/news.actions';
import { selectors } from '../redux/news/news.selectors';

export default () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectors.searchQuery);

  const getInputValue = (e) =>
    dispatch(newsActions.getSearchQuery(e.target.value));

  const fetchQuery = (e) => {
    e.preventDefault();
    if (searchQuery !== '') dispatch(newsActions.startSearchQuery());
  };

  return {
    getInputValue,
    fetchQuery,
    searchQuery,
  };
};
