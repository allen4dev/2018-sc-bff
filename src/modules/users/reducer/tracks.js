import { handleActions } from 'redux-actions';

import tracksModule from 'modules/tracks';

import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

const tracksReducer = handleActions(
  {
    [tracksModule.actionTypes.ADD_TRACK]: (state, { payload }) => [
      ...state,
      { id: payload.userId, trackId: payload.id },
    ],

    [tracksModule.actionTypes.REMOVE_TRACK]: (state, { payload }) =>
      state.filter(record => record.trackId !== payload.id),

    [actionTypes.ADD_USER_TRACKS]: (state, { payload }) => [
      ...state,
      ...payload.tracks.map(track => ({
        id: payload.id,
        trackId: track.id,
      })),
    ],

    [actionTypes.REMOVE_USER]: (state, { payload }) =>
      state.filter(record => record.id !== payload.id),
  },
  INITIAL_STATE.tracks,
);

export default tracksReducer;
