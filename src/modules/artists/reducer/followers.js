import { handleActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';

import { INITIAL_STATE } from '../model';

const followersReducer = handleActions(
  {
    [actionTypes.FOLLOW_USER]: (state, { payload }) => [
      ...state,
      { follower: payload.id, following: payload.followed },
    ],
  },
  INITIAL_STATE.followers,
);

export default followersReducer;
