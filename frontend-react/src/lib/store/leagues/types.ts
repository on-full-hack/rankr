export interface League {
  id: string;
  name: string;
  description: string;
}

export interface LeagueState {
  leagues: League[];
}

export const LOAD_LEAGUES = 'LOAD_LEAGUES';
export const TEST_LEAGUES = 'TEST_LEAGUES';

interface LoadLeaguesAction {
  type: typeof LOAD_LEAGUES;
  payload: League[];
}

interface TestLeaguesAction {
  type: typeof TEST_LEAGUES;
  payload: string;
}

export type LeagueActionTypes = LoadLeaguesAction | TestLeaguesAction;
