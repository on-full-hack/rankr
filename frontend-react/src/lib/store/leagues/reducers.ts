import {
  LeagueState,
  LeagueActionTypes,
  LOAD_LEAGUES_SUCCESS,
  CREATE_LEAGUE_SUCCESS,
} from './types';

const initialState: LeagueState = {
  leagues: [],
};

export const leagueReducer = (state = initialState, action: LeagueActionTypes): LeagueState => {
  switch (action.type) {
    case LOAD_LEAGUES_SUCCESS:
      return { leagues: [...state.leagues, ...action.payload] };
    case CREATE_LEAGUE_SUCCESS: {
      return { leagues: [...state.leagues, action.payload] };
    }
    default:
      return state;
  }
};
