import {
  put, takeLatest, fork, all, call,
} from 'redux-saga/effects';
import { getBeers as getBeersService } from '../../../../services/punk';
import { GET_BEERS_REQUEST } from '../actions/types';
import {
  getBeersSuccess,
  getBeersFailure,
} from '../actions';

export function* getBeers() {
  try {
    const response = yield call(getBeersService);
    yield put(getBeersSuccess(response.data));
  } catch (err) {
    yield put(getBeersFailure(err));
  }
}

export function* watchGetBeers() {
  yield takeLatest(GET_BEERS_REQUEST, getBeers);
}

export default function* root() {
  yield all([
    fork(watchGetBeers),
  ]);
}
