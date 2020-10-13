import { createSelector } from 'reselect';

const selectNews = (state) => state.news;

export const selectors = {
  articles: createSelector(selectNews, (news) => news.get('data')),
  category: createSelector(selectNews, (news) => news.get('category')),
  selectedCategory: createSelector(selectNews, (news) =>
    news.get('selectedСategory')
  ),
  searchQuery: createSelector(selectNews, (news) => news.get('searchQuery')),
  loading: createSelector(selectNews, (news) => news.get('loading')),
  newsError: createSelector(selectNews, (news) => news.get('error')),
};
