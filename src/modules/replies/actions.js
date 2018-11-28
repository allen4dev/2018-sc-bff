import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const addReply = createAction(
  actionTypes.ADD_REPLY,
  ({ data: { id, attributes, relationships } }) => ({
    id,
    reply: {
      id,
      ...attributes,
    },
    trackId: relationships.track.data.id,
  }),
);

export const DUMMIE = 'dumie';
