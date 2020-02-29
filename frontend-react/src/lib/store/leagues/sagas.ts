import { call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_LEAGUES, League, CREATE_LEAGUE } from './types';
import { getLeagues, createLeague } from '../../api/leagues';
import { loadLeaguesSuccess, createLeagueSuccess } from './actions';

export function* watchLoadLeagues() {
  yield takeEvery(LOAD_LEAGUES, requestLoadLeagues);
}

export function* watchCreateLeague() {
  yield takeEvery(CREATE_LEAGUE, requestCreateLeague);
}

function* requestLoadLeagues() {
  const response = yield call(getLeagues);
  yield put(loadLeaguesSuccess(response));
}

function* requestCreateLeague(league: League) {
  console.log('eheheheheheheh');
  const response = yield call(createLeague, league);
  yield put(createLeagueSuccess(response));
}
