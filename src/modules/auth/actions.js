import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

// eslint-disable-next-line
export const setAuthenticatedUser = createAction(
  actionTypes.SET_AUTHENTICATED_USER,
  (id, token) => ({ id, token }),
);
