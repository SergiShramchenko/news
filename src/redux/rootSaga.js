import { all, call } from 'redux-saga/effects';

import { fetchNews } from './news/fetchNews';

export default function* rootSaga() {
  try {
    yield all([fetchNews()]);
  } catch (error) {
    console.log('ERROR!', error);
  }
}
