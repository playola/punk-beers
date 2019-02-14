import {
  GET_BEERS_REQUEST,
  GET_BEERS_SUCCESS,
  GET_BEERS_FAILURE,
} from '../actions/types';

const initialState = {
  beers: [],
  loading: false,
  error: null,
};

const beersListReducer = (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case GET_BEERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BEERS_SUCCESS:
      return {
        ...state,
        loading: false,
        beers: response,
      };
    case GET_BEERS_FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
};

export default beersListReducer;
