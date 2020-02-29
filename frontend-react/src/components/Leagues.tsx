import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../lib/store';

const selectLeagues = (state: AppState) => state.league.leagues;

export const Leagues = () => {
  const leagues = useSelector(selectLeagues);
  return <div>leagues: {leagues.length}</div>;
};
