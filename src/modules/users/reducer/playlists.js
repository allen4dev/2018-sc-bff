import { handleActions } from 'redux-actions';

import playlistsModule from 'modules/playlists';

import * as actionTypes from '../actionTypes';

import { INITIAL_STATE } from '../model';

const playlistsReducer = handleActions(
  {
    [actionTypes.ADD_USER_PLAYLISTS]: (state, { payload }) => [
      ...state,
      ...payload.playlists.map(playlist => ({
        id: payload.id,
        playlistId: playlist.id,
      })),
    ],

    [actionTypes.REMOVE_USER]: (state, { payload }) =>
      state.filter(record => record.id !== payload.id),

    [playlistsModule.actionTypes.REMOVE_PLAYLIST]: (state, { payload }) =>
      state.filter(record => record.playlistId !== payload.id),

    [playlistsModule.actionTypes.ADD_PLAYLIST]: (state, { payload }) => [
      ...state,
      { id: payload.userId, playlistId: payload.id },
    ],
  },
  INITIAL_STATE.playlists,
);

export default playlistsReducer;
