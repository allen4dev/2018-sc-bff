import { createAction } from 'redux-actions';

import { API_REQUEST } from 'middlewares/api/actionTypes';

import * as actionTypes from './actionTypes';

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
  ({ data: { id, attributes } }) => {
    return {
      id,
      updated: {
        id,
        ...attributes,
      },
    };
  },
);

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
