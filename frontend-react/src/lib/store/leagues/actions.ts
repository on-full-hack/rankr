import { TEST_LEAGUES, League, LOAD_LEAGUES } from './types';

export const testLeagues = (arg: string) => ({
  type: TEST_LEAGUES,
  payload: arg,
});

export const loadLeagues = (leagues: League[]) => ({
  type: LOAD_LEAGUES,
  payload: leagues,
});
