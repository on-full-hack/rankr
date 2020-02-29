import { API_URL } from './const';
import axios from 'axios';

export const getLeagues = () => axios.get(`${API_URL}leagues`);
