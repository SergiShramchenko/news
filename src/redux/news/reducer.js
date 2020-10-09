import { types } from './types';
import { category } from '../../utils/category.js';
import {
  startFetchNews,
  stopFetchNews,
  catchError,
  clearError,
  getNewsArticle,
} from './reducer.util';

const initialState = {
  data: [],
  category: [
    { name: 'general', img: category.genearal },
    { name: 'health', img: category.health },
    { name: 'business', img: category.business },
    { name: 'sports', img: category.sports },
    { name: 'science', img: category.science },
    { name: 'entertainment', img: category.entertainment },
    { name: 'tech', img: category.tech },
  ],
  selectedСategory: 'general',
  loading: false,
  error: false,
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START_FETCH_NEWS:
      return startFetchNews(state);
    case types.STOP_FETCH_NEWS:
      return stopFetchNews(state);
    case types.CATCH_ERROR:
      return catchError(state, action);
    case types.CLEAR_ERROR:
      return clearError(state);
    case types.GET_NEWS_ARTICLES:
      return getNewsArticle(state, action);

    default:
      return state;
  }
};
