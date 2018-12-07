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

    [actionTypes.ADD_USER_FOLLOWERS]: (state, { payload }) => {
      const entities = payload.users.reduce(
        (initial, current) => ({
          ...initial,
          [current.id]: current,
        }),
        {},
      );

      return {
        ...state,
        entities: {
          ...state.entities,
          ...entities,
        },
        byId: [...state.byId, ...Object.keys(entities)],
      };
    },
  },
  INITIAL_STATE.all,
);

export default allReducer;
