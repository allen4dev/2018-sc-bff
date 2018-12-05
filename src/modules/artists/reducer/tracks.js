import { handleActions } from 'redux-actions';

import tracksModule from 'modules/tracks';

import { INITIAL_STATE } from '../model';

const tracksReducer = handleActions(
  {
    [tracksModule.actionTypes.ADD_TRACK]: (state, { payload }) => [
      ...state,
      { id: payload.userId, trackId: payload.id },
    ],

    [tracksModule.actionTypes.REMOVE_TRACK]: (state, { payload }) =>
      state.filter(record => record.trackId !== payload.id),
  },
  INITIAL_STATE.tracks,
);

export default tracksReducer;
