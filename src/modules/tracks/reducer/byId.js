import { handleActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';

import { INITIAL_STATE } from '../model';

const byIdReducer = handleActions(
  {
    [actionTypes.ADD_TRACK]: (state, { payload }) => [...state, payload.id],
    [actionTypes.REMOVE_TRACK]: (state, { payload }) =>
      state.filter(id => id !== payload.id),
  },
  INITIAL_STATE.byId,
);

export default byIdReducer;
