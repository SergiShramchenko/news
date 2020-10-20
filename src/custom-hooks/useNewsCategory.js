import { useSelector, useDispatch } from 'react-redux';
import store from 'store';

import { newsActions } from '../redux/news/news.actions';
import { selectors } from '../redux/news/news.selectors';
import { uiSelectors } from '../redux/ui/ui.selectors';

import handleClickAndEnter from '../utils/handleClickAndEnter';

export default () => {
  const dispatch = useDispatch();
  const searchInputValue = useSelector(uiSelectors.searchInputValue);
  const pageSize = useSelector(selectors.pageSize);
  const searchInputQuery = useSelector(selectors.searchQuery);

  const changeCategory = (category, e) => {
    if (handleClickAndEnter(e)) {
      store.set('selectedCategory', category);

      if (pageSize !== 20) dispatch(newsActions.setDefaultPageSize());
      else if (searchInputValue && !searchInputQuery) {
        dispatch(newsActions.getSearchQuery(searchInputValue, category));
        dispatch(newsActions.getNewCategory(category));
        dispatch(newsActions.init_category());
        return;
      } else if (!searchInputValue && searchInputQuery) {
        dispatch(newsActions.clearSearchQuery());
      }

      dispatch(newsActions.getNewCategory(category));
      dispatch(newsActions.init_category());
    }
  };

  return {
    changeCategory,
  };
};
