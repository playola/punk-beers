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
    const beersListStored = getLocalStorageItem('beers');
    const pageStored = getLocalStorageItem('page');
    console.log('page', payload.page)
    if (isStorageValid(beersListStored, payload.page)) {
      /**
       * If the storage exists and is valid, we used it instead of fetching more beers.
       */
      yield put(getBeersSuccess(beersListStored));
    } else {
      /**
       * Otherwise, we fetch beers by 'page', and we save the value in the storage.
       */
      const response = yield call(getBeersService, payload.page);
      const newStorageValue = beersListStored
        ? beersListStored.concat(response.data)
        : response.data;

      setLocalStorageItem('beers', newStorageValue);
      setLocalStorageItem('page', payload.page);
      yield put(getBeersSuccess(newStorageValue));
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
