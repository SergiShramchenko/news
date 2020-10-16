import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectors } from '../redux/news/news.selectors';
import { newsActions } from '../redux/news/news.actions';

import { debounce } from '../utils/debounce';
import {
  MAX_NEWS_ITEMS,
  NEWS_ITEM_INCREMENT,
  SCROLL_TOP_DISTANCE,
} from '../constants/index.js';

import topScrollPosition from '../utils/topScrollPosition';

export default () => {
  const pageSize = useSelector(selectors.pageSize);
  const loadMoreNews = useSelector(selectors.loadMoreNews);
  const dispatch = useDispatch();

  const handleScroll = debounce(() => {
    if (topScrollPosition('.App') >= SCROLL_TOP_DISTANCE) {
      return false;
    } else {
      dispatch(newsActions.getMoreNews());
    }
  }, 150);

  useEffect(() => {
    if (!loadMoreNews) return;
    else if (pageSize + NEWS_ITEM_INCREMENT >= MAX_NEWS_ITEMS)
      dispatch(newsActions.changePageSize(MAX_NEWS_ITEMS));
    else {
      const newPageSize = pageSize + NEWS_ITEM_INCREMENT;
      dispatch(newsActions.changePageSize(newPageSize));
    }
  }, [loadMoreNews, dispatch]);

  useEffect(() => {
    document.querySelector('.App').addEventListener('scroll', handleScroll);
    return () =>
      document.querySelector('.App').addEventListener('scroll', handleScroll);
  }, [handleScroll]);
};
