import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../redux/ui/ui.actions';
import { newsActions } from '../redux/news/news.actions';

import { uiSelectors } from '../redux/ui/ui.selectors';
import { selectors } from '../redux/news/news.selectors';

import handleClickAndEnter from '../utils/handleClickAndEnter';

export default () => {
  const dispatch = useDispatch();
  const searchInputValue = useSelector(uiSelectors.searchInputValue);
  const searchInputQuery = useSelector(selectors.searchQuery);

  const getInputValue = (e) =>
    dispatch(uiActions.getSearchInputValue(e.target.value));

  const fetchQuery = (e) => {
    e.preventDefault();
    if (searchInputValue !== '') {
      dispatch(newsActions.getSearchQuery(searchInputValue));
      dispatch(newsActions.init_search());
    }
  };

  const clearSearchInputAndQuery = (e) => {
    if (handleClickAndEnter(e)) {
      if (searchInputQuery) {
        dispatch(uiActions.clearSearchInput());
        dispatch(newsActions.clearSearchQuery());
        dispatch(newsActions.init_default());
      } else if (!searchInputQuery && searchInputValue) {
        dispatch(uiActions.clearSearchInput());
      }
    }
  };

  return {
    getInputValue,
    fetchQuery,
    clearSearchInputAndQuery,
    searchInputValue,
  };
};
