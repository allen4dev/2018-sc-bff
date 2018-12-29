import { handleActions, combineActions } from 'redux-actions';

import albumsModule from 'modules/albums';

import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

const albumsReducer = handleActions(
  {
    [combineActions(
      albumsModule.actionTypes.ADD_ALBUM,
      albumsModule.actionTypes.ADD_CREATED_ALBUM,
    )]: (state, { payload }) => [
      ...state,
      { id: payload.userId, albumId: payload.id },
    ],

    [actionTypes.ADD_USER_ALBUMS]: (state, { payload }) => [
      ...state,
      ...payload.albums.map(album => ({
        id: payload.id,
        albumId: album.id,
      })),
    ],

    [actionTypes.REMOVE_USER]: (state, { payload }) =>
      state.filter(record => record.id !== payload.id),

    [albumsModule.actionTypes.REMOVE_ALBUM]: (state, { payload }) =>
      state.filter(record => record.albumId !== payload.id),
  },
  INITIAL_STATE.albums,
);

export default albumsReducer;
