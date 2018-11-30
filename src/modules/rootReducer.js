import { combineReducers } from 'redux';

import artists from './artists';
import auth from './auth';
import playlists from './playlists';
import replies from './replies';
import tracks from './tracks';

const rootReducer = combineReducers({
  [artists.constants.NAME]: artists.reducer,
  [auth.constants.NAME]: auth.reducer,
  [tracks.constants.NAME]: tracks.reducer,
  [replies.constants.NAME]: replies.reducer,
  [playlists.constants.NAME]: playlists.reducer,
});

export default rootReducer;
