import { handleActions } from 'redux-actions';

import playlistsModule from 'modules/playlists';

import * as actionTypes from '../actionTypes';

import { INITIAL_STATE } from '../model';

const playlistsReducer = handleActions(
  {
    [playlistsModule.actionTypes.ADD_PLAYLIST]: (state, { payload }) => [
      ...state,
      { id: payload.userId, playlistId: payload.id },
    ],

    [actionTypes.ADD_USER_PLAYLISTS]: (state, { payload }) => [
      ...state,
      ...payload.playlists.map(playlist => ({
        id: payload.id,
        playlistId: playlist.id,
      })),
    ],
  },
  INITIAL_STATE.playlists,
);

export default playlistsReducer;
