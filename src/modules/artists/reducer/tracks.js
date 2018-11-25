import { handleAction } from 'redux-actions';

import tracksModule from 'modules/tracks';

import { INITIAL_STATE } from '../model';

const tracksReducer = handleAction(
  tracksModule.actionTypes.ADD_TRACK,
  (state, response) => {
    const { payload } = response;

    return {
      ...state,
      [payload.userId]: [...(state[payload.userId] || []), payload.id],
    };
  },
  INITIAL_STATE.tracks,
);

export default tracksReducer;
