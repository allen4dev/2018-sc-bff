import { createAction } from 'redux-actions';

import client from 'helpers/client';

import * as actionTypes from './actionTypes';

// action creators
export const addAlbum = createAction(
  actionTypes.ADD_ALBUM,
  ({ data: { id, attributes, relationships } }, tracks) => ({
    id,
    tracks,
    album: {
      ...attributes,
      id,
    },
    userId: relationships.user.data.id,
  }),
);

export const actualizeAlbum = createAction(
  actionTypes.ACTUALIZE_ALBUM,
  ({ data: { id, attributes } }) => ({
    id,
    updated: {
      ...attributes,
      id,
    },
  }),
);

export const removeAlbum = createAction(actionTypes.REMOVE_ALBUM, id => ({
  id,
}));

export const addFavoritedAlbum = createAction(
  actionTypes.ADD_FAVORITED_ALBUM,
  (id, userId) => ({ id, userId }),
);

// async action creators
export function createAlbum(details) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.createAlbum(details, token);

    dispatch(addAlbum(response, details.tracks));
  };
}

export function fetchAlbum(id) {
  return async dispatch => {
    const response = await client.getAlbum(id);

    dispatch(addAlbum(response));
  };
}

export function updateAlbum(id, details) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.updateAlbum(id, details, token);

    dispatch(actualizeAlbum(response));
  };
}

export function publishAlbum(id) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.updateAlbum(id, token);

    dispatch(actualizeAlbum(response));
  };
}

export function deleteAlbum(id) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    await client.deleteAlbum(id, token);

    dispatch(removeAlbum(id));
  };
}

export function favoriteAlbum(id) {
  return async (dispatch, getState) => {
    const { current, token } = getState().auth;

    await client.favoriteAlbum(id, token);

    dispatch(addFavoritedAlbum(id, current));
  };
}
