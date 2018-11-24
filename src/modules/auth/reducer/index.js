import { combineReducers } from 'redux';

import currentReducer from './current';
import tokenReducer from './token';

const authReducer = combineReducers({
  current: currentReducer,
  token: tokenReducer,
});

export default authReducer;
