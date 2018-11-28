import { combineReducers } from 'redux';

import auth from './auth';
import tracks from './tracks';
import artists from './artists';
import replies from './replies';

const rootReducer = combineReducers({
  [auth.constants.NAME]: auth.reducer,
  [tracks.constants.NAME]: tracks.reducer,
  [replies.constants.NAME]: replies.reducer,
});

export default rootReducer;
