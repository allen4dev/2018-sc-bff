import { handleActions } from 'redux-actions';
import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

const tracksReducer = handleActions(
  {
    [actionTypes.ADD_PLAYLIST_TRACK]: (state, { payload }) => [
      ...state,
      { id: payload.id, trackId: payload.trackId },
    ],
  },
  INITIAL_STATE.tracks,
);

export default tracksReducer;
