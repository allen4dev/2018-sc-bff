import { combineReducers } from 'redux';

import entities from './entities';
import replies from './replies';

const tracksReducer = combineReducers({
  entities,
  replies,
});

export default tracksReducer;
 