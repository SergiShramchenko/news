import { FETCH_NEWS, GET_NEWS } from './types';

export const newsActions = {
  fetchNews: () => ({
    type: FETCH_NEWS,
  }),
  getNews: (data) => ({
    type: GET_NEWS,
    payload: data,
  }),
};
