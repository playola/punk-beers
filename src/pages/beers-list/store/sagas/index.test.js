import { testSaga } from 'redux-saga-test-plan';
import { fork } from 'redux-saga/effects';
import { getBeers as getBeersService } from '../../../../services/punk';
import root, { getBeers, watchGetBeers } from './index';
import { getBeersSuccess, getBeersFailure } from '../actions';
import {
  GET_BEERS_REQUEST,
  GET_BEERS_SUCCESS,
  GET_BEERS_FAILURE,
} from '../actions/types';

describe('Beers list saga', () => {
  const payload = {
    page: 1,
  };
  const response = [{ name: 'foo' }, { name: 'boo' }];
  const errorMessage = '404 not found';

  it('getBeers success', () => {
    const result = {
      type: GET_BEERS_SUCCESS,
      response: response,
    };
    testSaga(getBeers)
      .next(payload)
      .call(getBeersService, 1)
      .next(response)
      .put(getBeersSuccess(response, 1))
      .next(result)
      .isDone();
  });

  it('getBeers error', () => {
    const error = {
      type: GET_BEERS_FAILURE,
      error: errorMessage,
    };
    testSaga(getBeers)
      .next()
      .throw(errorMessage)
      .put(getBeersFailure(errorMessage))
      .next(error)
      .isDone();
  });

  it('watchGetBeers', () => {
    testSaga(watchGetBeers)
      .next()
      .takeLatestEffect(GET_BEERS_REQUEST, getBeers)
      .finish()
      .isDone();
  });

  it('root', () => {
    testSaga(root)
      .next()
      .all([fork(watchGetBeers)])
      .next()
      .isDone();
  });
});
