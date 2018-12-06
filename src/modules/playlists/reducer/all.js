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
