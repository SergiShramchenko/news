import { useDispatch } from 'react-redux';

import { newsActions } from '../redux/news/news.actions';

export default () => {
  const dispatch = useDispatch();

  const changeCategory = (category, event) => {
    if (!event || event.key === 'Enter')
      dispatch(newsActions.getNewCategory(category));
  };

  return {
    changeCategory,
  };
};
