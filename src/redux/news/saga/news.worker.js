import { fromJS } from 'immutable';
import { select, put } from 'redux-saga/effects';

import newsApi from '../../../services';

import { newsActions } from '../news.actions';
import { selectors } from '../news.selectors';

function* fetchNewsArticles() {
  const selectedCategory = yield select(selectors.selectedCategory);
  const searchQuery = yield select(selectors.searchQuery);
  const pageSize = yield select(selectors.pageSize);
  const newsError = yield select(selectors.newsError);

  const response = yield newsApi.getArticles(
    selectedCategory,
    searchQuery,
    pageSize
  );
  const data = yield response.data.articles;

  if (data && newsError) yield handlePrevError();

  return data;
}

function* handlePrevError() {
  yield put(newsActions.clearError());
}

export function* fetchNewsAsync() {
  try {
    yield put(newsActions.startFetchNews());
    const data = yield fetchNewsArticles();
    yield put(newsActions.getNewsArticles(fromJS(data)));
  } catch (error) {
    yield put(newsActions.catchError(error));
  } finally {
    yield put(newsActions.stopFetchNews());
  }
}

// INFINITE SCROLL WORKING IN PROCESS...
export function* fetchMoreNewsAsync() {
  try {
    yield put(newsActions.startFetchMoreNews());
    const data = yield fetchNewsArticles();
    yield put(newsActions.getNewsArticles(fromJS(data)));
  } catch (error) {
    yield put(newsActions.catchError(error));
  } finally {
    yield put(newsActions.stopFetchMoreNews());
  }
}
