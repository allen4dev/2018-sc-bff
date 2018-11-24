import { createAction } from 'redux-actions';

import { API_REQUEST } from 'middlewares/api/actionTypes';

import client from 'helpers/client';

import * as actionTypes from './actionTypes';

// eslint-disable-next-line
export const setAuthenticatedUser = createAction(
  actionTypes.SET_AUTHENTICATED_USER,
  (id, token) => ({ id, token }),
);

export const register = createAction(
  API_REQUEST,
  () => ({ success: setAuthenticatedUser }),
  details => ({
    details,
    apiEndpoint: client.register,
  }),
);
