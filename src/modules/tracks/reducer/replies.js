import repliesModule from 'modules/replies';

import { handleAction } from 'redux-actions';

import { INITIAL_STATE } from '../model';

const REPLIES_STATE = INITIAL_STATE.replies;

const repliesReducer = handleAction(
  repliesModule.actionTypes.ADD_REPLY,
  (state, { payload }) => ({
    ...state,
    [payload.trackId]: [...(state[payload.trackId] || []), payload.id],
  }),
  REPLIES_STATE,
);

export default repliesReducer;
