import { handleAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

const currentReducer = handleAction(
  actionTypes.SET_CURRENT_USER,
  (state, action) => action.payload.id,
  INITIAL_STATE.current,
);

export default currentReducer;
