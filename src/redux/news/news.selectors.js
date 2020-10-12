import { createSelector } from 'reselect';

const selectNews = (state) => state.news;

export const selectors = {
  articles: createSelector([selectNews], (news) => news.data),
  category: createSelector([selectNews], (news) => news.category),
  selectedCategory: createSelector(
    [selectNews],
    (news) => news.selectedСategory
  ),
  searchQuery: createSelector([selectNews], (news) => news.searchQuery),
  loading: createSelector([selectNews], (news) => news.loading),
};
