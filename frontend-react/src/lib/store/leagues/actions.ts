import { League, LOAD_LEAGUES, ApiError, LOAD_LEAGUES_SUCCESS, LOAD_LEAGUES_ERROR } from './types';

export const loadLeagues = () => ({
  type: LOAD_LEAGUES,
});

export const loadLeaguesSuccess = (leagues: League[]) => ({
  type: LOAD_LEAGUES_SUCCESS,
  payload: leagues,
});

export const loadLeaguesError = (error: ApiError) => ({
  type: LOAD_LEAGUES_ERROR,
  payload: error,
});
