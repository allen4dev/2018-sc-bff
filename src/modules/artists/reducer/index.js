import { combineReducers } from 'redux';

import playlists from './playlists';
import tracks from './tracks';
import albums from './albums';

const reducer = combineReducers({
  playlists,
  tracks,
  albums,
});

export default reducer;
