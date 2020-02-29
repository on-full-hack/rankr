import { call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_LEAGUES } from './types';
import { getLeagues } from '../../api/leagues';
import { loadLeaguesSuccess } from './actions';

export function* watchLoadLeagues() {
  yield takeEvery(LOAD_LEAGUES, requestLoadLeagues);
}

function* requestLoadLeagues() {
  const response = yield call(getLeagues);
  yield put(loadLeaguesSuccess(response));
}
