import { types } from './types';

export const newsActions = {
  init: () => ({ type: types.INIT }),
  startFetchNews: () => ({
    type: types.START_FETCH_NEWS,
  }),
  stopFetchNews: () => ({
    type: types.STOP_FETCH_NEWS,
  }),
  catchError: (error) => ({
    type: types.CATCH_ERROR,
    error,
  }),
  getNewsArticles: (data) => ({
    type: types.GET_NEWS_ARTICLES,
    payload: data,
  }),
  getNewCategory: (category) => ({
    type: types.CHAGNE_CATEGORY,
    payload: category,
  }),
  startSearchQuery: () => ({
    type: types.START_SEARCH_QUERY,
  }),
  getSearchQuery: (searchQuery) => ({
    type: types.GET_SEARCH_QUERY,
    payload: searchQuery,
  }),
};
