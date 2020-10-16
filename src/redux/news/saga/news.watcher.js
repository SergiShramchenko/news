import { buffers } from 'redux-saga';
import {
  all,
  call,
  take,
  put,
  takeLeading,
  takeLatest,
  actionChannel,
  flush,
  fork,
  cancel,
  takeMaybe,
} from 'redux-saga/effects';
import { newsActions } from '../news.actions';

import { types } from '../types';
import { fetchNewsAsync, fetchMoreNewsAsync } from './news.worker';

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

// INFINITE SCROLL WORKING IN PROCESS...
function* fetchMoreNews() {
  while (true) {
    const action = yield takeMaybe(types.GET_MORE_NEWS);
    yield call(fetchMoreNewsAsync, action);
  }
}

// function* fetchMoreNews() {
//   while (true) {
//     const action = yield take(types.GET_MORE_NEWS);
//     yield call(fetchMoreNewsAsync, action);
//   }
// }
// // INFINITE SCROLL WORKING IN PROCESS... // //

export function* watchNews() {
  yield all([call(fetchNews), call(fetchMoreNews)]);
}
