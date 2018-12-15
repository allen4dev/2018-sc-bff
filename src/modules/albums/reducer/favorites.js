import { handleActions } from 'redux-actions';
import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

const favoritesReducer = handleActions(
  {
    [actionTypes.ADD_FAVORITED_ALBUM]: (state, { payload }) => [
      ...state,
      { id: payload.id, userId: payload.userId },
    ],

    [actionTypes.REMOVE_ALBUM]: (state, { payload }) =>
      state.filter(record => record.id !== payload.id),

    'users/REMOVE_USER': (state, { payload }) =>
      state.filter(record => record.userId !== payload.id),
  },
  INITIAL_STATE.favorites,
);

export default favoritesReducer;
