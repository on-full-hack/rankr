export interface League {
  id: string;
  name: string;
  description: string;
  type: string;
}

export type CreateLeaguePayload = Omit<League, 'id'>;

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

export const CREATE_LEAGUE = 'CREATE_LEAGUES';
export const CREATE_LEAGUE_SUCCESS = 'CREATE_LEAGUES_SUCCESS';
export const CREATE_LEAGUE_ERROR = 'CREATE_LEAGUES_ERROR';

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

interface CreateLeagueAction {
  type: typeof CREATE_LEAGUE;
  payload: CreateLeaguePayload;
}

interface CreateLeagueActionSuccess {
  type: typeof CREATE_LEAGUE_SUCCESS;
  payload: League;
}

interface CreateLeagueActionError {
  type: typeof CREATE_LEAGUE_ERROR;
  Error: ApiError;
}

export type LeagueActionTypes =
  | LoadLeaguesAction
  | LoadLeaguesSuccessAction
  | LoadLeaguesErrorAction
  | CreateLeagueAction
  | CreateLeagueActionSuccess
  | CreateLeagueActionError;
