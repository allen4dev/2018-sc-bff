import { handleActions, combineActions } from 'redux-actions';

import albumsModule from 'modules/albums';
import playlistsModule from 'modules/playlists';

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

    [actionTypes.UPDATE_USER]: (state, { payload }) => ({
      ...state,
      entities: {
        ...state.entities,
        [payload.id]: payload.updated,
      },
    }),

    [actionTypes.REMOVE_USER]: (state, { payload }) => {
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

    [actionTypes.ADD_USER_FOLLOWINGS]: (state, { payload }) => {
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

    [combineActions(
      albumsModule.actionTypes.ADD_ALBUM,
      playlistsModule.actionTypes.ADD_PLAYLIST,
    )]: (state, { payload }) => ({
      ...state,
      entities: {
        ...state.entities,
        [payload.userId]: payload.user,
      },
      byId: [...state.byId, payload.userId],
    }),
  },
  INITIAL_STATE.all,
);

export default allReducer;
