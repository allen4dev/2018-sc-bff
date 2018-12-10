import { combineReducers } from 'redux';

import albums from './albums';
import artists from './users';
import auth from './auth';
import playlists from './playlists';
import replies from './replies';
import tracks from './tracks';

const rootReducer = combineReducers({
  [albums.constants.NAME]: albums.reducer,
  [artists.constants.NAME]: artists.reducer,
  [auth.constants.NAME]: auth.reducer,
  [playlists.constants.NAME]: playlists.reducer,
  [replies.constants.NAME]: replies.reducer,
  [tracks.constants.NAME]: tracks.reducer,
});

export default rootReducer;
