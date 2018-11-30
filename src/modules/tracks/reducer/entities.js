import { handleActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';

import { INITIAL_STATE } from '../model';

const ENTITIES_STATE = INITIAL_STATE.entities;

const entitiesReducer = handleActions(
  {
    [actionTypes.ADD_TRACK]: (state, action) => ({
      ...state,
      [action.payload.id]: action.payload.track,
    }),

    [actionTypes.ACTUALIZE_TRACK]: (state, { payload }) => ({
      ...state,
      [payload.id]: {
        ...payload.updated,
      },
    }),

    [actionTypes.REMOVE_TRACK]: (state, { payload }) => {
      return Object.keys(state).reduce((initial, current) => {
        if (current === payload.id) return initial;

        return {
          ...initial,
          [current]: state[current],
        };
      }, {});
    },
  },
  ENTITIES_STATE,
);

export default entitiesReducer;
