import { types } from './types';

export const uiActions = {
  changeThemeMode: () => ({ type: types.CHANGE_THEME_MODE }),
  getSearchInputValue: (searchValue) => ({
    type: types.GET_SEARCH_INPUT_VALUE,
    payload: searchValue,
  }),
};
