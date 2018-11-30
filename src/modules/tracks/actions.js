import { createAction } from 'redux-actions';

import { API_REQUEST } from 'middlewares/api/actionTypes';

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

export const removeTrack = createAction(
  actionTypes.REMOVE_TRACK,
  (_, details) => details,
);

// API_REQUEST actions
export const createTrack = createAction(
  API_REQUEST,
  () => ({ success: addTrack }),
  details => ({
    details,
    clientMethod: 'createTrack',
  }),
);

export const fetchTrack = createAction(
  API_REQUEST,
  () => ({ success: addTrack }),
  id => ({
    details: { id },
    clientMethod: 'getTrack',
  }),
);

export const updateTrack = createAction(
  API_REQUEST,
  () => ({ success: actualizeTrack }),
  (id, updatedFields) => ({
    details: { id, updatedFields },
    clientMethod: 'updateTrack',
  }),
);

export const publishTrack = createAction(
  API_REQUEST,
  () => ({ success: actualizeTrack }),
  id => ({
    details: { id },
    clientMethod: 'publishTrack',
  }),
);

export const deleteTrack = createAction(
  API_REQUEST,
  () => ({ success: removeTrack }),
  id => ({
    details: { id },
    clientMethod: 'deleteTrack',
  }),
);
