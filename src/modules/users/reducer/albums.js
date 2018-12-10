import { handleActions } from 'redux-actions';

import albumsModule from 'modules/albums';

import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

const albumsReducer = handleActions(
  {
    [albumsModule.actionTypes.ADD_ALBUM]: (state, { payload }) => [
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
  },
  INITIAL_STATE.albums,
);

export default albumsReducer;
