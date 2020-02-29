import { API_URL } from './const';
import axios from 'axios';

export const getLeagues = async () => {
  const {
    data: { values },
  } = await axios.get(`${API_URL}leagues`);

  return values;
};
