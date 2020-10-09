import { delay } from 'redux-saga/effects';

import newsApi from '../../../../services';

export function* fetchNewsArticles() {
  const responce = yield newsApi.getArticles();
  const data = yield responce.data.articles;
  yield delay(1000);

  return data;
}
