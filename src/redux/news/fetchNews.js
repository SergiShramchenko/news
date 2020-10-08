import { take, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import { newsActions } from './actions';

function* fetchNewsArticles() {
  const responce = yield axios.get(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=a66a7bdb28954b278cf6b21f93b6c85a'
  );
  const data = yield responce.data.articles;
  yield delay(1000);

  return data;
}

export function* fetchNews() {
  const data = yield fetchNewsArticles();
  yield put(newsActions.getNews(data));
}
