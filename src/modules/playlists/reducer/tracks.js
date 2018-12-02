import { handleActions } from 'redux-actions';
import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

const tracksReducer = handleActions(
  {
    [actionTypes.ADD_PLAYLIST_TRACK]: (state, { payload }) => [
      ...state,
      { id: payload.id, trackId: payload.trackId },
    ],

    [actionTypes.REMOVE_PLAYLIST_TRACK]: (state, { payload }) => {
      return state.filter(record => {
        return Object.keys(payload).every(key => record[key] !== payload[key]);
      });
    },
  },
  INITIAL_STATE.tracks,
);

export default tracksReducer;
