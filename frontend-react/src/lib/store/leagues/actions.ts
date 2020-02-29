import { League, LOAD_LEAGUES, ApiError } from './types';

export const loadLeagues = () => ({
  type: LOAD_LEAGUES,
});

export const loadLeaguesSuccess = (leagues: League[]) => ({
  type: LOAD_LEAGUES,
  payload: leagues,
});

export const loadLeaguesError = (error: ApiError) => ({
  type: LOAD_LEAGUES,
  payload: error,
});
