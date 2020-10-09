import { updateState } from '../../utils/reducer.util';

export const startFetchNews = (state) => updateState(state, { loading: true });
export const stopFetchNews = (state) => updateState(state, { loading: false });
export const catchError = (state, action) =>
  updateState(state, { error: true, errorMessage: action.error });
export const clearError = (state) =>
  updateState(state, { error: false, errorMessage: '' });
export const getNewsArticle = (state, action) =>
  updateState(state, { data: action.payload });
