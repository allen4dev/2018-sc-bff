import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

const dummie = handleAction(
  actionTypes.DUMMIE,
  (state, action) => action.payload.dummie,
  INITIAL_STATE.dummie,
);

const authReducer = combineReducers({
  dummie,
});

export default authReducer;
