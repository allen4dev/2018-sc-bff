import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const addUser = createAction(
  actionTypes.ADD_USER,
  ({ data: { id, attributes } }) => ({
    id,
    user: { ...attributes, id },
  }),
);
