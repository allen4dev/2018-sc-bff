import { combineReducers } from 'redux';

import auth from './auth';

const rootReducer = combineReducers({
  [auth.constants.NAME]: auth.reducer,
});

export default rootReducer;
