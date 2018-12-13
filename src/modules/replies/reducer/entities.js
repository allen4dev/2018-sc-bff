import { handleActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

const entitiesReducer = handleActions(
  {
    [actionTypes.ADD_REPLY]: (state, { payload }) => ({
      ...state,
      [payload.id]: payload.reply,
    }),

    [actionTypes.ADD_REPLIES]: (state, { payload }) => ({
      ...state,
      ...payload.replies,
    }),
  },
  INITIAL_STATE.entities,
);

export default entitiesReducer;
