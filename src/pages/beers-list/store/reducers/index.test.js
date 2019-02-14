import {
  GET_BEERS_REQUEST,
  GET_BEERS_SUCCESS,
  GET_BEERS_FAILURE,
} from '../actions/types';
import beersListReducer from './index';

const initialState = {
  beers: [],
  loading: false,
  error: null,
};

const beersResponseMock = [
  {
    name: 'foo',
  },
  {
    name: 'boo',
  },
];

describe('beersListReducer', () => {
  it('should return initial state when action is undefined', () => {
    expect(beersListReducer(initialState, 'default')).toEqual(initialState);
  });

  it('should return correct state when GET_BEERS_REQUEST action is called', () => {
    const action = {
      type: GET_BEERS_REQUEST,
    };
    expect(beersListReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should return correct state when GET_BEERS_SUCCESS action is called', () => {
    const action = {
      type: GET_BEERS_SUCCESS,
      response: beersResponseMock,
    };

    expect(beersListReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      beers: action.response,
    });
  });

  it('should return correct state when GET_BEERS_FAILURE action is called', () => {
    const action = {
      type: GET_BEERS_FAILURE,
      error: {
        code: 400,
      },
    };

    expect(beersListReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      error: action.error,
    });
  });
});
