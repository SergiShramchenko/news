import { useDispatch, useSelector } from 'react-redux';

import { newsActions } from '../redux/news/news.actions';
import { uiActions } from '../redux/ui/ui.actions';
import { uiSelectors } from '../redux/ui/ui.selectors';

export default () => {
  const dispatch = useDispatch();
  const searchInputValue = useSelector(uiSelectors.searchInputValue);

  const getInputValue = (e) =>
    dispatch(uiActions.getSearchInputValue(e.target.value));

  const fetchQuery = (e) => {
    e.preventDefault();
    if (searchInputValue !== '') {
      dispatch(newsActions.getSearchQuery(searchInputValue));
      dispatch(newsActions.startSearchQuery());
    }
  };

  return {
    getInputValue,
    fetchQuery,
    searchInputValue,
  };
};
