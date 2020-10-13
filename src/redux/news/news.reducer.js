import { fromJS, Map } from 'immutable';

import { types } from './types';
import { category } from '../../utils/storage';

const initialState = fromJS({
  data: [],
  category,
  selectedСategory: 'general',
  searchQuery: '',
  loading: false,
  error: false,
  errorMessage: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START_FETCH_NEWS:
      return state.set('loading', true);
    case types.STOP_FETCH_NEWS:
      return state.set('loading', false);
    case types.GET_NEWS_ARTICLES:
      return state.set('data', action.payload);
    case types.CATCH_ERROR:
      return state.set('error', true).set('errorMessage', action.error);
    case types.CLEAR_ERROR:
      return state.set('error', false).set('errorMessage', Map());
    case types.CHAGNE_CATEGORY:
      return state.set('selectedСategory', action.payload);
    case types.GET_SEARCH_QUERY:
      return state.set('searchQuery', action.payload);
    case types.CLEAR_SEARCH_QUERY:
      return state.set('searchQuery', '');

    default:
      return state;
  }
};
