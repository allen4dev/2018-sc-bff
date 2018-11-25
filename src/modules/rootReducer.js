import { combineReducers } from 'redux';

import auth from './auth';
import tracks from './tracks';

const rootReducer = combineReducers({
  [auth.constants.NAME]: auth.reducer,
  [tracks.constants.NAME]: tracks.reducer,
});

export default rootReducer;
