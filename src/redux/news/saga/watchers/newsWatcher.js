import { put } from 'redux-saga/effects';

import { newsActions } from '../../actions';
import { fetchNewsArticles } from '../workers/newsWorker';

export function* fetchNews() {
  try {
    const data = yield fetchNewsArticles();
    yield put(newsActions.getNewsArticles(data));
  } catch (error) {
    yield put(newsActions.catchError(error));
  } finally {
    yield put(newsActions.stopFetchNews());
  }
}
