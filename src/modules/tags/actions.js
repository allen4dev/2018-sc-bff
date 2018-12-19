import { createAction } from 'redux-actions';

import client from 'helpers/client';

import * as actionTypes from './actionTypes';

// action creators
export const addTags = createAction(actionTypes.ADD_TAGS, ({ data }) => ({
  tags: data.map(tag => ({
    ...tag.attributes,
    id: tag.id,
  })),
}));

// async actions
export function fetchTags() {
  return async dispatch => {
    const response = await client.getTags();

    dispatch(addTags(response));
  };
}
