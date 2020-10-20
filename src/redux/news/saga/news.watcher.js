import { all, call, takeLatest, takeMaybe } from 'redux-saga/effects';

import { types } from '../types';
import { fetchNewsAsync, fetchMoreNewsAsync } from './news.worker';

function* fetchNews() {
  yield takeLatest(
    [types.INIT, types.INIT_CATEGORY, types.INIT_SEARCH, types.INIT_DEFAULT],
    fetchNewsAsync
  );
}

function* fetchMoreNews() {
  while (true) {
    const action = yield takeMaybe(types.CHANGE_PAGE_SIZE);
    yield call(fetchMoreNewsAsync, action);
  }
}

export function* watchNews() {
  yield all([call(fetchNews), call(fetchMoreNews)]);
}
