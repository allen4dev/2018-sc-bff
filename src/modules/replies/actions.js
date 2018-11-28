import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const addReply = createAction(
  actionTypes.ADD_REPLY,
  ({ data: { id, attributes } }) => ({
    id,
    reply: {
      id,
      ...attributes,
    },
  }),
);

export const DUMMIE = 'dumie';
