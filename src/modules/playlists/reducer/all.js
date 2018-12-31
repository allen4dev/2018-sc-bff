import { handleActions, combineActions } from 'redux-actions';

import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

const allReducer = handleActions(
  {
    [combineActions(
      actionTypes.ADD_PLAYLIST,
      actionTypes.ADD_CREATED_PLAYLIST,
    )]: (state, { payload }) => ({
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

    [actionTypes.REMOVE_PLAYLIST]: (state, { payload }) => {
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

    'users/ADD_USER_PLAYLISTS': (state, { payload }) => {
      const entities = payload.playlists.reduce(
        (initial, current) => ({
          ...initial,
          [current.id]: { ...current.attributes, id: current.id },
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
