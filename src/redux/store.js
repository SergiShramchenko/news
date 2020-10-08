import { createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { composeEnhancers, middleware, sagaMiddleware } from './middleware';

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export { store };
