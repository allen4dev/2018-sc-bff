import { handleActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';

import { INITIAL_STATE } from '../model';

const followersReducer = handleActions(
  {
    [actionTypes.ADD_FOLLOWED_USER]: (state, { payload }) => [
      ...state,
      { follower: payload.id, following: payload.followed },
    ],

    [actionTypes.REMOVE_FOLLOWED_USER]: (state, { payload }) =>
      state.filter(record => {
        if (
          record.follower === payload.id &&
          record.following === payload.unfollowed
        ) {
          return false;
        }

        return true;
      }),
  },
  INITIAL_STATE.followers,
);

export default followersReducer;
