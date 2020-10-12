import { combineReducers } from 'redux';

import newsReducer from './news/news.reducer';
import uiReducer from './ui/ui.reducer';

const rootReducer = combineReducers({
  news: newsReducer,
  ui: uiReducer,
});

export default rootReducer;
