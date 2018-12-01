import { handleActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';

import { INITIAL_STATE } from '../model';

const allReducer = handleActions(
  {
    [actionTypes.ADD_TRACK]: (state, { payload }) => ({
      ...state,

      entities: {
        ...state.entities,
        [payload.id]: payload.track,
      },

      byId: [...state.byId, payload.id],
    }),

    [actionTypes.ACTUALIZE_TRACK]: (state, { payload }) => ({
      ...state,
      entities: {
        ...state.entities,
        [payload.id]: {
          ...payload.updated,
        },
      },
    }),
  },
  INITIAL_STATE.all,
);

export default allReducer;