import { createAction } from 'redux-actions';

import client from 'helpers/client';

import * as actionTypes from './actionTypes';

export const addTrackReply = createAction(
  actionTypes.ADD_TRACK_REPLY,
  ({ data: { id, attributes, relationships } }) => ({
    id,
    reply: {
      id,
      ...attributes,
    },
    repliedId: relationships.track.data.id,
  }),
);

export const addReplies = createAction(
  actionTypes.ADD_REPLIES,
  (response, details) => ({
    trackId: details.id,
    replies: response.data,
  }),
);

export function replyTrack(id, body) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.replyTrack(id, { body }, token);

    dispatch(addReply(response));
  };
}
