import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/store';
import { loadLeagues } from '../lib/store/leagues/actions';

const selectLeagues = (state: AppState) => state.league.leagues;

export const Leagues = () => {
  const leagues = useSelector(selectLeagues);
  const dispatch = useDispatch();
  console.log('render');

  useEffect(() => {
    dispatch(loadLeagues());
  }, []);

  return <div>leagues: {leagues.length}</div>;
};
