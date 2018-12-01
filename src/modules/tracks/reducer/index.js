import { combineReducers } from 'redux';

// import entities from './entities';
// import byId from './byId';
import all from './all';
import replies from './replies';

const tracksReducer = combineReducers({
  all,
  replies,
});

export default tracksReducer;
