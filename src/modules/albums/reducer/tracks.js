import { handleActions, combineActions } from 'redux-actions';

import tracksModule from 'modules/tracks';

import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

const tracksReducer = handleActions(
  {
    [combineActions(actionTypes.ADD_ALBUM, actionTypes.ADD_CREATED_ALBUM)]: (
      state,
      { payload },
    ) => [
      ...state,
      ...payload.tracks.map(id => ({
        id: payload.id,
        trackId: id,
      })),
    ],

    [actionTypes.REMOVE_ALBUM]: (state, { payload }) =>
      state.filter(record => record.id !== payload.id),

    [tracksModule.actionTypes.REMOVE_TRACK]: (state, { payload }) =>
      state.filter(record => record.trackId !== payload.id),
  },
  INITIAL_STATE.tracks,
);

export default tracksReducer;
