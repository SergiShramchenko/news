import { useDispatch } from 'react-redux';

import { newsActions } from '../redux/news/news.actions';

export default () => {
  const dispatch = useDispatch();

  const changeCategory = (category) => {
    dispatch(newsActions.getNewCategory(category));
  };

  return {
    changeCategory,
  };
};
