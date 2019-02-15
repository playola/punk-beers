import {
  GET_BEERS_REQUEST,
  GET_BEERS_SUCCESS,
  GET_BEERS_FAILURE,
} from './types';

export const getBeers = page => ({
  type: GET_BEERS_REQUEST,
  page,
});

export const getBeersSuccess = (response, page) => ({
  type: GET_BEERS_SUCCESS,
  response,
  page,
});

export const getBeersFailure = error => ({
  type: GET_BEERS_FAILURE,
  error,
});
