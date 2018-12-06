import { combineReducers } from 'redux';

import all from './all';
import albums from './albums';
import followers from './followers';
import playlists from './playlists';
import tracks from './tracks';

const reducer = combineReducers({
  all,
  albums,
  followers,
  playlists,
  tracks,
});

export default reducer;
