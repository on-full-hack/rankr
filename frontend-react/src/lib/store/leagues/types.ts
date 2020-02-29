export interface League {
  id: string;
  name: string;
  description: string;
}

export interface ApiError {
  code: number;
  message: string;
}

export interface LeagueState {
  leagues: League[];
}

export const LOAD_LEAGUES = 'LOAD_LEAGUES';
export const LOAD_LEAGUES_SUCCESS = 'LOAD_LEAGUES_SUCCESS';
export const LOAD_LEAGUES_ERROR = 'LOAD_LEAGUES_ERROR';

interface LoadLeaguesAction {
  type: typeof LOAD_LEAGUES;
}

interface LoadLeaguesSuccessAction {
  type: typeof LOAD_LEAGUES_SUCCESS;
  payload: League[];
}

interface LoadLeaguesErrorAction {
  type: typeof LOAD_LEAGUES_ERROR;
  payload: ApiError;
}

export type LeagueActionTypes =
  | LoadLeaguesAction
  | LoadLeaguesSuccessAction
  | LoadLeaguesErrorAction;
