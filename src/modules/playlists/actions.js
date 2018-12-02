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
