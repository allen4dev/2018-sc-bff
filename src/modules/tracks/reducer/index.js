import { combineReducers } from 'redux';

import entities from './entities';

const tracksReducer = combineReducers({
  entities,
});

export default tracksReducer;
