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
  (response, id) => ({ response, id }),
);

// async actions
export function fetchUser(id) {
  return async dispatch => {
    const response = await client.getUser(id);

    dispatch(addUser(response));
  };
}
