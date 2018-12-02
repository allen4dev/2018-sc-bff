import { combineReducers } from 'redux';

import albums from './albums';
import artists from './artists';
import auth from './auth';
import playlists from './playlists';
import replies from './replies';
import tracks from './tracks';

const rootReducer = combineReducers({
  [albums.constants.NAME]: albums.reducer,
  [artists.constants.NAME]: artists.reducer,
  [auth.constants.NAME]: auth.reducer,
  [tracks.constants.NAME]: tracks.reducer,
  [replies.constants.NAME]: replies.reducer,
  [playlists.constants.NAME]: playlists.reducer,
});

export default rootReducer;
