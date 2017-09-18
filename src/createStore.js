import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import createReducers from './ducks';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
let middleware;

/* global __DEV__ */
if (__DEV__) {
  middleware = applyMiddleware(sagaMiddleware, createLogger());
} else {
  middleware = applyMiddleware(sagaMiddleware);
}

export default (data = {}) => {
  const store = createStore(createReducers(), data, middleware);
  sagaMiddleware.run(mySaga);
  return store;
};
