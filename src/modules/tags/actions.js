import { createAction } from 'redux-actions';

import client from 'helpers/client';

import * as actionTypes from './actionTypes';

export const addTags = createAction(actionTypes.ADD_TAGS, ({ data }) => ({
  tags: data,
}));
