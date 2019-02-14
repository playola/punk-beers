/**
 * Punk API
 */
import axios from 'axios';

export const baseUrl = 'https://api.punkapi.com/v2/';

export const getBeers = () => (
  axios.get(`${baseUrl}/beers`)
);
