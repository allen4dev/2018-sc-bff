import { createAction } from 'redux-actions';

import client from 'helpers/client';

import usersModule from 'modules/users';

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

export function fetchProfile() {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.getProfile(token);

    dispatch(usersModule.actions.addUser(response));
  };
}

export function updateProfile(details) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.updateProfile(details, token);

    dispatch(usersModule.actions.updateUser(response));
  };
}
