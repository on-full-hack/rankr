import { all, fork } from 'redux-saga/effects';
import { watchLoadLeagues, watchCreateLeague } from './leagues/sagas';

export const rootSaga = function* root() {
  yield all([fork(watchLoadLeagues), fork(watchCreateLeague)]);
};
