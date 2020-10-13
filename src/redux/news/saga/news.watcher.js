import { all, call, takeLatest } from 'redux-saga/effects';

import { types } from '../types';
import { fetchNewsAsync } from './news.worker';

function* fetchNews() {
  yield takeLatest(
    [
      types.INIT,
      types.CHAGNE_CATEGORY,
      types.START_SEARCH_QUERY,
      types.CLEAR_SEARCH_QUERY,
    ],
    fetchNewsAsync
  );
}

export function* watchNews() {
  yield all([call(fetchNews)]);
}
