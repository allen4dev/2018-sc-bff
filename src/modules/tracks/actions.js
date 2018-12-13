import { createAction } from 'redux-actions';

import client from 'helpers/client';

import * as actionTypes from './actionTypes';

// action creators
export const addTrack = createAction(
  actionTypes.ADD_TRACK,
  ({ data: { id, attributes, relationships } }) => ({
    id,
    track: {
      ...attributes,
      id,
    },
    userId: relationships.user.data.id,
  }),
);

export const actualizeTrack = createAction(
  actionTypes.ACTUALIZE_TRACK,
  ({ data: { id, attributes } }) => ({
    id,
    updated: {
      id,
      ...attributes,
    },
  }),
);

export const removeTrack = createAction(actionTypes.REMOVE_TRACK, id => ({
  id,
}));

export const addFavoritedTrack = createAction(
  actionTypes.ADD_FAVORITED_TRACK,
  (id, userId) => ({
    id,
    userId,
  }),
);

export const addTracks = createAction(actionTypes.ADD_TRACKS, ({ data }) => ({
  tracks: data,
}));

// async action creators
export function createTrack(details) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.createTrack(details, token);

    dispatch(addTrack(response));
  };
}

export function fetchTrack(id) {
  return async dispatch => {
    const response = await client.getTrack(id);

    dispatch(addTrack(response));
  };
}

export function updateTrack(id, newFields) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.updateTrack(id, newFields, token);

    dispatch(actualizeTrack(response));
  };
}

export function publishTrack(id) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.publishTrack(id, token);

    dispatch(actualizeTrack(response));
  };
}

export function deleteTrack(id) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    await client.deleteTrack(id, token);

    dispatch(removeTrack(id));
  };
}

export function favoriteTrack(id) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.favoriteTrack(id, token);

    dispatch(addFavoritedTrack(id, response.data.relationships.user.data.id));
  };
}
