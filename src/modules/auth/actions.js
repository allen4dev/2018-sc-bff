import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const setCurrentUser = createAction(
  actionTypes.SET_CURRENT_USER,
  id => ({ id }),
);

export const setToken = createAction(actionTypes.SET_TOKEN, token => ({
  token,
}));
