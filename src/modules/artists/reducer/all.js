import { handleActions } from 'redux-actions';
import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

const allReducer = handleActions(
  {
    [actionTypes.ADD_USER]: (state, { payload }) => ({
      ...state,
      entities: {
        ...state.entities,
        [payload.id]: payload.user,
      },
      byId: [...state.byId, payload.id],
    }),
  },
  INITIAL_STATE.all,
);

export default allReducer;
