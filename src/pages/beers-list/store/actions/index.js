import {
  GET_BEERS_REQUEST,
  GET_BEERS_SUCCESS,
  GET_BEERS_FAILURE,
} from './types';

export const getBeers = () => ({
  type: GET_BEERS_REQUEST,
});

export const getBeersSuccess = response => ({
  type: GET_BEERS_SUCCESS,
  response,
});

export const getBeersFailure = error => ({
  type: GET_BEERS_FAILURE,
  error,
});
