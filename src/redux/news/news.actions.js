import { types } from './types';

export const newsActions = {
  init: () => ({ type: types.INIT }),
  init_category: () => ({ type: types.INIT_CATEGORY }),
  init_search: () => ({ type: types.INIT_SEARCH }),
  init_default: () => ({ type: types.INIT_DEFAULT }),

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
  clearError: () => ({
    type: types.CLEAR_ERROR,
  }),
  getNewsArticles: (data) => ({
    type: types.GET_NEWS_ARTICLES,
    payload: data,
  }),
  getNewCategory: (category) => ({
    type: types.CHAGNE_CATEGORY,
    payload: category,
  }),
  getSearchQuery: (searchQuery) => ({
    type: types.GET_SEARCH_QUERY,
    payload: searchQuery,
  }),
  clearSearchQuery: () => ({
    type: types.CLEAR_SEARCH_QUERY,
  }),

  // INFINITE SCROLL WORKING IN PROCESS...
  getMoreNews: () => ({
    type: types.GET_MORE_NEWS,
  }),
  changePageSize: (pageSize) => ({
    type: types.CHANGE_PAGE_SIZE,
    payload: pageSize,
  }),
  startFetchMoreNews: () => ({
    type: types.START_FETCH_MORE_NEWS,
  }),
  stopFetchMoreNews: () => ({
    type: types.STOP_FETCH_MORE_NEWS,
  }),
  setDefaultPageSize: () => ({
    type: types.SET_DEFAULT_PAGE_SIZE,
  }),
};
