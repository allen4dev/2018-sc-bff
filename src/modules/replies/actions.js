import { createAction } from 'redux-actions';

import { API_REQUEST } from 'middlewares/api/actionTypes';

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

export const addReplies = createAction(
  actionTypes.ADD_REPLIES,
  (response, details) => {
    return {
      trackId: details.id,
      replies: response.data,
    };
  },
);

export const replyTrack = createAction(
  API_REQUEST,
  () => ({ success: addReply }),
  (id, body) => ({
    details: { id, input: { body } },
    clientMethod: 'replyTrack',
  }),
);
