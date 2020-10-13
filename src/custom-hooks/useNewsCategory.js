import { useSelector, useDispatch } from 'react-redux';

import { newsActions } from '../redux/news/news.actions';
import { uiSelectors } from '../redux/ui/ui.selectors';

export default () => {
  const dispatch = useDispatch();
  const searchInputValue = useSelector(uiSelectors.searchInputValue);

  const changeCategory = (category, event) => {
    if (!event || event.key === 'Enter') {
      dispatch(newsActions.getSearchQuery(searchInputValue));
      dispatch(newsActions.getNewCategory(category));
    }
  };

  return {
    changeCategory,
  };
};
