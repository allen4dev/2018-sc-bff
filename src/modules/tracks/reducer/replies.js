import repliesModule from 'modules/replies';

import { handleActions } from 'redux-actions';

import { INITIAL_STATE } from '../model';

const REPLIES_STATE = INITIAL_STATE.replies;

const repliesReducer = handleActions(
  {
    [repliesModule.actionTypes.ADD_REPLY]: (state, { payload }) => ({
      ...state,
      [payload.trackId]: [...(state[payload.trackId] || []), payload.id],
    }),

    [repliesModule.actionTypes.ADD_REPLIES]: (state, { payload }) => ({
      ...state,
      [payload.trackId]: [
        ...(state[payload.trackId] || []),
        ...payload.replies.map(reply => reply.id),
      ],
    }),
  },
  REPLIES_STATE,
);

export default repliesReducer;
