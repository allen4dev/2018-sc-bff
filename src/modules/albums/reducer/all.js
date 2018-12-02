import { handleActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';

import { INITIAL_STATE } from '../model';

const allReducer = handleActions(
  {
    [actionTypes.ADD_ALBUM]: (state, { payload }) => ({
      ...state,
      entities: {
        ...state.entities,
        [payload.id]: payload.album,
      },
      byId: [...state.byId, payload.id],
    }),
  },
  INITIAL_STATE.all,
);

export default allReducer;
