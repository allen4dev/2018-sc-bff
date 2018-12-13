import { combineReducers } from 'redux';

import all from './all';
import favorites from './favorites';
import replies from './replies';

const tracksReducer = combineReducers({
  all,
  replies,
  favorites,
});

export default tracksReducer;
