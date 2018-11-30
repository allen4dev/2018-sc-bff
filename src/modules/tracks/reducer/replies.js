import repliesModule from 'modules/replies';

import { handleActions } from 'redux-actions';

import { INITIAL_STATE } from '../model';

const REPLIES_STATE = INITIAL_STATE.replies;

const repliesReducer = handleActions(
  {
    [repliesModule.actionTypes.ADD_REPLY]: (state, { payload }) => [
      ...state,
      { id: payload.trackId, replyId: payload.id },
    ],

    [repliesModule.actionTypes.ADD_REPLIES]: (state, { payload }) => [
      ...state,
      ...payload.replies.map(reply => ({
        id: payload.trackId,
        replyId: reply.id,
      })),
    ],
  },
  REPLIES_STATE,
);

export default repliesReducer;
