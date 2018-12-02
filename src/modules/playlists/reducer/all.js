import { handleActions } from 'redux-actions';
import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

const allReducer = handleActions(
  {
    [actionTypes.ADD_PLAYLIST]: (state, { payload }) => ({
      ...state,
      entities: {
        ...state.entities,
        [payload.id]: payload.playlist,
      },
      byId: [...state.byId, payload.id],
    }),

    [actionTypes.ACTUALIZE_PLAYLIST]: (state, { payload }) => ({
      ...state,
      entities: {
        ...state.entities,
        [payload.id]: payload.updated,
      },
    }),
  },
  INITIAL_STATE.all,
);

export default allReducer;
