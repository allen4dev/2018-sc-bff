import { combineReducers } from 'redux';

import entities from './entities';
import byId from './byId';
import replies from './replies';

const tracksReducer = combineReducers({
  entities,
  byId,
  replies,
});

export default tracksReducer;
