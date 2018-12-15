import { handleActions, combineActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

const entitiesReducer = handleActions(
  {
    [combineActions(
      actionTypes.ADD_TRACK_REPLY,
      actionTypes.ADD_REPLY_COMMENT,
    )]: (state, { payload }) => ({
      ...state,
      [payload.id]: payload.reply,
    }),

    [actionTypes.ADD_TRACK_REPLIES]: (state, { payload }) => ({
      ...state,
      ...payload.replies,
    }),
  },
  INITIAL_STATE.entities,
);

export default entitiesReducer;
