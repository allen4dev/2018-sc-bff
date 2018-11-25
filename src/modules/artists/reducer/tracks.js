import { handleAction } from 'redux-actions';

import tracksModule from 'modules/tracks';

import { INITIAL_STATE } from '../model';

const tracksReducer = handleAction(
  tracksModule.actionTypes.ADD_TRACK,
  (state, { payload }) => ({
    ...state,
    [payload.id]: payload.track,
  }),
  INITIAL_STATE.tracks,
);

export default tracksReducer;
