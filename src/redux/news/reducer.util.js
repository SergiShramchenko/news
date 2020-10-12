import { updateState } from '../../utils/updateState';

export const startFetchNews = (state) => updateState(state, { loading: true });
export const stopFetchNews = (state) => updateState(state, { loading: false });
export const catchError = (state, action) =>
  updateState(state, { error: true, errorMessage: action.error });
export const clearError = (state) =>
  updateState(state, { error: false, errorMessage: '' });
export const getNewsArticle = (state, action) =>
  updateState(state, { data: action.payload });
export const getCategory = (state, action) =>
  updateState(state, { selectedСategory: action.payload });
export const getSearchQuery = (state, action) =>
  updateState(state, { searchQuery: action.payload });
