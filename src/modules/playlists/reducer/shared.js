import { handleActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

const sharedReducer = handleActions(
  {
    [actionTypes.ADD_SHARED_PLAYLIST]: (state, { payload }) => [
      ...state,
      { id: payload.id, userId: payload.userId },
    ],

    [actionTypes.REMOVE_PLAYLIST]: (state, { payload }) =>
      state.filter(record => record.id !== payload.id),

    'users/REMOVE_USER': (state, { payload }) =>
      state.filter(record => record.userId !== payload.id),
  },
  INITIAL_STATE.shared,
);

export default sharedReducer;
