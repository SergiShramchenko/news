import { types } from './types';

const initialState = {
  themeMode: 'day',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_THEME_MODE:
      return {
        ...state,
        themeMode: state.themeMode === 'day' ? 'night' : 'day',
      };

    default:
      return state;
  }
};
