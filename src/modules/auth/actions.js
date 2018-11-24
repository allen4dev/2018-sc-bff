import { createAction } from 'redux-actions';

import { API_REQUEST } from 'middlewares/api/actionTypes';

import * as actionTypes from './actionTypes';

export const setAuthenticatedUser = createAction(
  actionTypes.SET_AUTHENTICATED_USER,
  ({ data: { attributes } }) => ({
    id: attributes.id,
    token: attributes.token,
  }),
);

export const register = createAction(
  API_REQUEST,
  () => ({ success: setAuthenticatedUser }),
  details => ({
    details,
    clientMethod: 'register',
  }),
);

export const login = createAction(
  API_REQUEST,
  () => ({ success: setAuthenticatedUser }),
  credentials => ({
    details: credentials,
    clientMethod: 'login',
  }),
);
