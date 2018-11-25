import { handleAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

const tokenReducer = handleAction(
  actionTypes.SET_AUTHENTICATED_USER,
  (state, action) => action.payload.token,
  INITIAL_STATE.token,
);

export default tokenReducer;