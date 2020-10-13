import { createSelector } from 'reselect';

const selectUi = (state) => state.ui;

export const uiSelectors = {
  themeMode: createSelector(selectUi, (ui) => ui.get('themeMode')),
  searchInputValue: createSelector(selectUi, (ui) =>
    ui.get('searchInputValue')
  ),
};
