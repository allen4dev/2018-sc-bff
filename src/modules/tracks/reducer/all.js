import { handleActions, combineActions } from 'redux-actions';

// import usersModule from 'modules/artists';

import * as actionTypes from '../actionTypes';

import { INITIAL_STATE } from '../model';

// console.log('MODULE', usersModule);
// console.log('ADD_TRACKS', actionTypes.ADD_TRACKS);

// CHECK WHY IS UNDEFINED
// console.log('ADD_USER_TRACKS', usersModule.actionTypes.ADD_USER_TRACKS);

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

    [combineActions(actionTypes.ADD_TRACKS, 'users/ADD_USER_TRACKS')]: (
      state,
      { payload },
    ) => {
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
