import { types } from './types';

export const newsActions = {
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
};
