import { handleActions } from 'redux-actions';

import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

const sharedReducer = handleActions(
  {
    [actionTypes.ADD_SHARED_ALBUM]: (state, { payload }) => [
      ...state,
      { id: payload.id, userId: payload.userId },
    ],

    'users/REMOVE_USER': (state, { payload }) =>
      state.filter(record => record.userId !== payload.id),
  },
  INITIAL_STATE.shared,
);

export default sharedReducer;
