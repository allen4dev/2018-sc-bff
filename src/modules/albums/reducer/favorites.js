import { handleActions } from 'redux-actions';
import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

const favoritesReducer = handleActions(
  {
    [actionTypes.ADD_FAVORITED_ALBUM]: (state, { payload }) => [
      ...state,
      { id: payload.id, userId: payload.userId },
    ],
  },
  INITIAL_STATE.favorites,
);

export default favoritesReducer;
