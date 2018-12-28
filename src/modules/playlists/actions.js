import { createAction } from 'redux-actions';

import client from 'helpers/client';

import * as actionTypes from './actionTypes';

// action creators
export const addPlaylist = createAction(
  actionTypes.ADD_PLAYLIST,
  ({ data: { id, attributes, relationships }, included }) => ({
    id,
    playlist: {
      id,
      ...attributes,
    },
    user: {
      ...included.find(
        record =>
          record.type === 'users' && record.id === relationships.user.data.id,
      ).attributes,
      id: relationships.user.data.id,
    },
    userId: relationships.user.data.id,
  }),
);

export const addCreatedPlaylist = createAction(
  actionTypes.ADD_CREATED_PLAYLIST,
  ({ data: { id, attributes, relationships } }) => ({
    id,
    playlist: {
      id,
      ...attributes,
    },
    userId: relationships.user.data.id,
  }),
);

export const actualizePlaylist = createAction(
  actionTypes.ACTUALIZE_PLAYLIST,
  ({ data: { id, attributes } }) => ({
    id,
    updated: {
      ...attributes,
      id,
    },
  }),
);

export const addFavoritedPlaylist = createAction(
  actionTypes.ADD_FAVORITED_PLAYLIST,
  (id, userId) => ({ id, userId }),
);

export const addSharedPlaylist = createAction(
  actionTypes.ADD_SHARED_PLAYLIST,
  (id, userId) => ({ id, userId }),
);

export const removePlaylist = createAction(actionTypes.REMOVE_PLAYLIST, id => ({
  id,
}));

export const addTrack = createAction(
  actionTypes.ADD_PLAYLIST_TRACK,
  details => ({
    id: details.id,
    trackId: details.trackId,
  }),
);

export const removeTrack = createAction(
  actionTypes.REMOVE_PLAYLIST_TRACK,
  details => ({
    id: details.id,
    trackId: details.trackId,
  }),
);

// async action creators
export function createPlaylist(details) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.createPlaylist(details, token);

    await dispatch(addPlaylist(response));
  };
}

export function fetchPlaylist(id) {
  return async dispatch => {
    const response = await client.getPlaylist(id);

    dispatch(addPlaylist(response));
  };
}

export function updatePlaylist(id, details) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.updatePlaylist(id, details, token);

    await dispatch(actualizePlaylist(response));
  };
}

export function addPlaylistTrack(id, trackId) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    await client.addTrackToPlaylist(id, trackId, token);

    await dispatch(addTrack({ id, trackId }));
  };
}

export function removePlaylistTrack(id, trackId) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    await client.removeTrackFromPlaylist(id, trackId, token);

    dispatch(removeTrack({ id, trackId }));
  };
}

export function deletePlaylist(id) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    await client.deletePlaylist(id, token);

    dispatch(removePlaylist(id));
  };
}

export function favoritePlaylist(id) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.favoritePlaylist(id, token);

    const { user } = response.data.relationships;

    dispatch(addFavoritedPlaylist(id, user.data.id));
  };
}

export function sharePlaylist(id) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.sharePlaylist(id, token);

    const { user } = response.data.relationships;

    dispatch(addSharedPlaylist(id, user.data.id));
  };
}
