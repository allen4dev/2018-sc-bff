import repliesModule from 'modules/replies';

import { handleActions } from 'redux-actions';

import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

const REPLIES_STATE = INITIAL_STATE.replies;

const repliesReducer = handleActions(
  {
    [actionTypes.REMOVE_TRACK]: (state, { payload }) =>
      state.filter(record => record.id !== payload.id),

    [repliesModule.actionTypes.ADD_TRACK_REPLY]: (state, { payload }) => [
      ...state,
      { id: payload.repliedId, replyId: payload.id },
    ],

    [repliesModule.actionTypes.ADD_TRACK_REPLIES]: (state, { payload }) => [
      ...state,
      ...payload.replies.map(reply => ({
        id: payload.repliedId,
        replyId: reply.id,
      })),
    ],
  },
  REPLIES_STATE,
);

export default repliesReducer;
