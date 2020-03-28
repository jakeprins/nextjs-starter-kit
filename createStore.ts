import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { initialState } from './rootReducer';
import rootSaga from './rootSaga';
import { WithSagaTaskStore } from './interfaces';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(preloadedState = initialState): WithSagaTaskStore {
  const sagaMiddleware = createSagaMiddleware();
  const store: WithSagaTaskStore = createStore(
    rootReducer,
    preloadedState,
    bindMiddleware([sagaMiddleware]),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
