import { all, fork } from 'redux-saga/effects';

// Sagas
import beersListSaga from '../../pages/beers-list/store/sagas';

export default function* root() {
  yield all([
    fork(beersListSaga),
  ]);
}
