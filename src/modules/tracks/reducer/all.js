import { handleActions, combineActions } from 'redux-actions';

// import usersModule from 'modules/users';

import * as actionTypes from '../actionTypes';

import { INITIAL_STATE } from '../model';

const allReducer = handleActions(
  {
    [combineActions(actionTypes.ADD_TRACK, actionTypes.ADD_CREATED_TRACK)]: (
      state,
      { payload },
    ) => ({
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
          [current.id]: { ...current.attributes },
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
