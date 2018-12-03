import { createAction } from 'redux-actions';

import client from 'helpers/client';

import * as actionTypes from './actionTypes';

// action creators
export const addAlbum = createAction(
  actionTypes.ADD_ALBUM,
  ({ data: { id, attributes, relationships } }) => ({
    id,
    album: {
      ...attributes,
      id,
    },
    userId: relationships.user.data.id,
  }),
);

// async action creators
export function createAlbum(details) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.createAlbum(details, token);

    dispatch(addAlbum(response));
  };
}

export function fetchAlbum(id) {
  return async dispatch => {
    const response = await client.getAlbum(id);

    dispatch(addAlbum(response));
  };
}
