import {
  League,
  LOAD_LEAGUES,
  ApiError,
  LOAD_LEAGUES_SUCCESS,
  LOAD_LEAGUES_ERROR,
  CREATE_LEAGUE,
  CreateLeaguePayload,
} from './types';

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

export const createLeague = (league: CreateLeaguePayload) => ({
  type: CREATE_LEAGUE,
  payload: league,
});

export const createLeagueSuccess = (league: League) => ({
  type: CREATE_LEAGUE,
  payload: league,
});

export const createLeagueError = (league: League) => ({
  type: CREATE_LEAGUE,
  payload: league,
});
