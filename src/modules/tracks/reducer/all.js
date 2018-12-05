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

    [actionTypes.REMOVE_TRACK]: (state, { payload }) => {
      const ids = state.byId.filter(id => id !== payload.id);

      return {
        ...state,
        entities: ids.reduce(
          (initial, current) => ({
            ...initial,
            [current]: state.entities[current],
          }),
          {},
        ),
        byId: ids,
      };
    },

    [actionTypes.ADD_TRACKS]: (state, { payload }) => {
      const entities = payload.tracks.reduce(
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
