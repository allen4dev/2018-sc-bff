import { handleActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

const favoritesReducer = handleActions(
  {
    [actionTypes.FAVORITE_TRACK]: (state, { payload }) => [
      ...state,
      { id: payload.id, userId: payload.userId },
    ],
  },
  INITIAL_STATE.favorites,
);

export default favoritesReducer;
