import {
  put, takeLatest, fork, all, call,
} from 'redux-saga/effects';
import { getBeers as getBeersService } from '../../../../services/punk';
import { GET_BEERS_REQUEST } from '../actions/types';
import {
  getBeersSuccess,
  getBeersFailure,
} from '../actions';
import { setLocalStorageItem, getLocalStorageItem } from '../../../../utils/local-storage';

export function* getBeers() {
  try {
    /**
     * We check if we already have the beers list in the storage in order to fetch it again.
     */
    const beersListStored = getLocalStorageItem('beers');
    if (beersListStored) {
      yield put(getBeersSuccess(beersListStored));
    } else {
      const response = yield call(getBeersService);
      setLocalStorageItem('beers', response.data)
      yield put(getBeersSuccess(response.data));
    }
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
