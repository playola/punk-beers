/**
 * Punk API
 */
import axios from 'axios';

export const baseUrl = 'https://api.punkapi.com/v2/';

/**
 * Get beers by page. By default 25 items per page.
 * @param {number} page 
 */
export const getBeers = (page = 1) => (
  axios.get(`${baseUrl}/beers?page=${page}`)
);
