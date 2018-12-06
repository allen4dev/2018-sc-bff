import { createAction } from 'redux-actions';

import client from 'helpers/client';

import * as actionTypes from './actionTypes';

// action creators
export const addUser = createAction(
  actionTypes.ADD_USER,
  ({ data: { id, attributes } }) => ({
    id,
    user: { ...attributes, id },
  }),
);

export const addUserTracks = createAction(
  actionTypes.ADD_USER_TRACKS,
  ({ data }, id) => ({ tracks: data, id }),
);

export const addUserPlaylists = createAction(
  actionTypes.ADD_USER_PLAYLISTS,
  ({ data }, id) => ({ playlists: data, id }),
);

export const addUserAlbums = createAction(
  actionTypes.ADD_USER_ALBUMS,
  ({ data }, id) => ({ albums: data, id }),
);

// async actions
export function fetchUser(id) {
  return async dispatch => {
    const response = await client.getUser(id);

    dispatch(addUser(response));
  };
}

export function fetchUserTracks(id) {
  return async dispatch => {
    const response = await client.getUserTracks(id);

    dispatch(addUserTracks(response, id));
  };
}

export function fetchUserPlaylists(id) {
  return async dispatch => {
    const response = await client.getUserPlaylists(id);

    dispatch(addUserPlaylists(response, id));
  };
}

export function fetchUserAlbums(id) {
  return async dispatch => {
    const response = await client.getUserAlbums(id);

    dispatch(addUserAlbums(response, id));
  };
}
