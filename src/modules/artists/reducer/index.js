import { combineReducers } from 'redux';

import all from './all';
import albums from './albums';
import playlists from './playlists';
import tracks from './tracks';

const reducer = combineReducers({
  all,
  albums,
  playlists,
  tracks,
});

export default reducer;
