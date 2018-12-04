import { combineReducers } from 'redux';

import all from './all';
import replies from './replies';

const tracksReducer = combineReducers({
  all,
  replies,
});

export default tracksReducer;
