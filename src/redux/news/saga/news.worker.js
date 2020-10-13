import { select, put, delay } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import newsApi from '../../../services';

import { newsActions } from '../news.actions';
import { selectors } from '../news.selectors';

function* fetchNewsArticles() {
  yield delay(1000);

  const selectedCategory = yield select(selectors.selectedCategory);
  const searchQuery = yield select(selectors.searchQuery);
  const newsError = yield select(selectors.newsError);

  const response = yield newsApi.getArticles(selectedCategory, searchQuery);
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
