import { combineReducers } from 'redux';

// Reducers
import beersListReducer from '../../pages/beers-list/store/reducers';

const rootReducer = combineReducers({
  beersListReducer,
});

export default (state, action) => rootReducer(state, action);
