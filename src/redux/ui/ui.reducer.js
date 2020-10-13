import { fromJS } from 'immutable';

import { types } from './types';
import { themeMode } from '../../utils/storage';

const initialState = fromJS({
  themeMode,
  searchInputValue: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_THEME_MODE:
      return state.set('themeMode', !state.get('themeMode'));
    case types.GET_SEARCH_INPUT_VALUE:
      return state.set('searchInputValue', action.payload);
    case types.CLEAR_SEARCH_INPUT:
      return state.set('searchInputValue', '');

    default:
      return state;
  }
};
