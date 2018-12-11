import { handleActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

const tracksReducer = handleActions(
  {
    [actionTypes.ADD_ALBUM]: (state, { payload }) => [
      ...state,
      ...payload.tracks.map(id => ({
        id: payload.id,
        trackId: id,
      })),
    ],
  },
  INITIAL_STATE.tracks,
);

export default tracksReducer;
