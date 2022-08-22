import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { all_Reducers } from '../Reducers';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()

const Middlewares = [sagaMiddleware, thunk];

 export const store = createStore(
    all_Reducers,
  applyMiddleware(...Middlewares)
)

sagaMiddleware.run(rootSaga)