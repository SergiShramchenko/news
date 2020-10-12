import { all, put } from 'redux-saga/effects';

import { watchNews } from './news/saga/news.watcher';
import { newsActions } from './news/news.actions';

export default function* rootSaga() {
  try {
    yield all([watchNews()]);
  } catch (error) {
    yield put(newsActions.catchError(error));
  }
}
