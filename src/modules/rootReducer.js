import { combineReducers } from 'redux';

import auth from './auth';
import tracks from './tracks';
import artists from './artists';

const rootReducer = combineReducers({
  [auth.constants.NAME]: auth.reducer,
  [tracks.constants.NAME]: tracks.reducer,
  [artists.constants.NAME]: artists.reducer,
});

export default rootReducer;
