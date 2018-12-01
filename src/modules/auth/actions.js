import { createAction } from 'redux-actions';

import client from 'helpers/client';

import { API_REQUEST } from 'middlewares/api/actionTypes';

import * as actionTypes from './actionTypes';

export const setAuthenticatedUser = createAction(
  actionTypes.SET_AUTHENTICATED_USER,
  ({ data: { attributes } }) => ({
    id: attributes.id,
    token: attributes.token,
  }),
);

export function register(details) {
  return async dispatch => {
    const response = await client.register(details);

    dispatch(setAuthenticatedUser(response));
  };
}

export function login(credentials) {
  return async dispatch => {
    const response = await client.login(credentials);

    dispatch(setAuthenticatedUser(response));
  };
}
