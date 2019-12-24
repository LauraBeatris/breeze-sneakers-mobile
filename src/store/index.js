import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';

const enhancer = __DEV__ ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
