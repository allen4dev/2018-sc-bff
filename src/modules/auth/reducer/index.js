import { combineReducers } from 'redux';

import currentReducer from './current';

const authReducer = combineReducers({
  current: currentReducer,
});

export default authReducer;
