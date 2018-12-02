import { handleActions } from 'redux-actions';

import playlistsModule from 'modules/playlists';

import { INITIAL_STATE } from '../model';

const playlistsReducer = handleActions(
  {
    [playlistsModule.actionTypes.ADD_PLAYLIST]: (state, { payload }) => [
      ...state,
      { id: payload.userId, playlistId: payload.id },
    ],
  },
  INITIAL_STATE.playlists,
);

export default playlistsReducer;
