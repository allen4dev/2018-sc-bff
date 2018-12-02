import { handleActions } from 'redux-actions';

import albumsModule from 'modules/albums';

import { INITIAL_STATE } from '../model';

const albumsReducer = handleActions(
  {
    [albumsModule.actionTypes.ADD_ALBUM]: (state, { payload }) => [
      ...state,
      { id: payload.userId, albumId: payload.id },
    ],
  },
  INITIAL_STATE.albums,
);

export default albumsReducer;
