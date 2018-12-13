import { combineReducers } from 'redux';

import all from './all';
import favorites from './favorites';
import tracks from './tracks';

const reducer = combineReducers({
  all,
  favorites,
  tracks,
});

export default reducer;
