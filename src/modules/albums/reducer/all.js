import { handleActions, combineActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';

import { INITIAL_STATE } from '../model';

const allReducer = handleActions(
  {
    [combineActions(actionTypes.ADD_ALBUM, actionTypes.ADD_CREATED_ALBUM)]: (
      state,
      { payload },
    ) => ({
      ...state,
      entities: {
        ...state.entities,
        [payload.id]: payload.album,
      },
      byId: [...state.byId, payload.id],
    }),

    [actionTypes.ACTUALIZE_ALBUM]: (state, { payload }) => ({
      ...state,
      entities: {
        ...state.entities,
        [payload.id]: { ...payload.updated },
      },
    }),

    [actionTypes.REMOVE_ALBUM]: (state, { payload }) => {
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

    'users/ADD_USER_ALBUMS': (state, { payload }) => {
      const entities = payload.albums.reduce(
        (initial, current) => ({
          ...initial,
          [current.id]: { ...current.attributes, id: current.id },
        }),
        {},
      );

      console.log(entities);

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
