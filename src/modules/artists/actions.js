import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

import client from 'helpers/client';

// action creators
export const addUser = createAction(
  actionTypes.ADD_USER,
  ({ data: { id, attributes } }) => ({
    id,
    user: { ...attributes, id },
  }),
);

// async actions
export function fetchUser(id) {
  return async dispatch => {
    const response = await client.getUser(id);

    dispatch(addUser(response));
  };
}
