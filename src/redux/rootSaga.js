import { all, put } from 'redux-saga/effects';

import { fetchNews } from './news/saga/watchers/newsWatcher';
import { newsActions } from '../redux/news/actions';

export default function* rootSaga() {
  try {
    yield all([fetchNews()]);
  } catch (error) {
    yield put(newsActions.catchError(error));
  }
}
