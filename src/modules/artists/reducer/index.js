import { combineReducers } from 'redux';

import playlists from './playlists';
import tracks from './tracks';

const reducer = combineReducers({
  playlists,
  tracks,
});

export default reducer;
