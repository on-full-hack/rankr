import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { leagueReducer } from './leagues/reducers';
import { rootSaga } from './rootSaga';

const rootReducer = combineReducers({
  league: leagueReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

  sagaMiddleware.run(rootSaga);

  return store;
}
