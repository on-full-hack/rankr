import { LeagueState, LeagueActionTypes, LOAD_LEAGUES } from './types';

const initialState: LeagueState = {
  leagues: [],
};

export const leagueReducer = (state = initialState, action: LeagueActionTypes): LeagueState => {
  switch (action.type) {
    case LOAD_LEAGUES:
      return { leagues: [...state.leagues, ...action.payload] };
    default:
      return state;
  }
};
