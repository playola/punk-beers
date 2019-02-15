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

/**
 * Checks if the storage value exists and is valid.
 * @param   {array}   value [{ id: 0 }, { id: 1 }, ..., { id: 24 }] --> length 25
 * @param   {number}  page  1
 * @return  {boolean}       true
 */
const isStorageValid = (value, page) => value && (value.length % page === 0);

export function* getBeers(payload) {
  try {
    /**
     * Get stored list and page, and check if storage exists and is valid.
     */
    const beersListStored = getLocalStorageItem('beers');
    const pageStored = Math.max(getLocalStorageItem('page'), payload.page) || 1;

    if (isStorageValid(beersListStored, pageStored)) {
      /**
       * If the storage exists and is valid, we used it instead of fetching more beers.
       */
      yield put(getBeersSuccess(beersListStored, pageStored));
    } else {
      /**
       * Otherwise, we fetch beers by 'page', and we save the value in the storage.
       */
      const response = yield call(getBeersService, pageStored);
      const newStorageValue = beersListStored
        ? beersListStored.concat(response.data)
        : response.data;

      setLocalStorageItem('beers', newStorageValue);
      setLocalStorageItem('page', pageStored);
      yield put(getBeersSuccess(newStorageValue, pageStored));
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
