import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

// eslint-disable-next-line
export const setCurrentUser = createAction(
  actionTypes.SET_CURRENT_USER,
  id => ({ id }),
);
