import { API_URL } from './const';
import axios from 'axios';
import { League } from '../store/leagues/types';

export const getLeagues = async () => {
  const {
    data: { values },
  } = await axios.get(`${API_URL}leagues`);

  return values;
};

export const createLeague = async (league: League) => {
  const {
    data: { message },
  } = await axios.post(`${API_URL}leagues`, league);
  // TODO replace with proper id returned from the API
  return { id: 'hehehe', ...league };
};
