import { createAction } from 'redux-actions';

import client from 'helpers/client';

import * as actionTypes from './actionTypes';

// action creators
export const addPlaylist = createAction(
  actionTypes.ADD_PLAYLIST,
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

export const addTrack = createAction(
  actionTypes.ADD_PLAYLIST_TRACK,
  (response, details) => ({
    id: details.id,
    trackId: details.trackId,
  }),
);

export const removeTrack = createAction(
  actionTypes.REMOVE_PLAYLIST_TRACK,
  (response, details) => ({
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

    const response = await client.addTrackToPlaylist(id, trackId, token);

    await dispatch(addTrack(response, { id, trackId }));
  };
}
