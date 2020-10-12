import { delay, select, put } from 'redux-saga/effects';

import newsApi from '../../../services';

import { newsActions } from '../news.actions';
import { selectors } from '../news.selectors';

function* fetchNewsArticles() {
  const selectedCategory = yield select(selectors.selectedCategory);
  const searchQuery = yield select(selectors.searchQuery);
  const responce = yield newsApi.getArticles(selectedCategory, searchQuery);
  const data = yield responce.data.articles;
  yield delay(1000);

  return data;
}

export function* fetchNewsAsync() {
  try {
    yield put(newsActions.startFetchNews());
    const data = yield fetchNewsArticles();
    yield put(newsActions.getNewsArticles(data));
  } catch (error) {
    yield put(newsActions.catchError(error));
  } finally {
    yield put(newsActions.stopFetchNews());
  }
}
