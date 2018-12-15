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

export const addTrackReplies = createAction(
  actionTypes.ADD_TRACK_REPLIES,
  (response, details) => ({
    repliedId: details.id,
    replies: response.data,
  }),
);

export const addReplyComment = createAction(
  actionTypes.ADD_REPLY_COMMENT,
  ({ data: { id, attributes } }, replied) => ({
    id,
    reply: {
      ...attributes,
      id,
    },
    repliedId: replied,
  }),
);

// async actions
export function replyTrack(id, body) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.replyTrack(id, { body }, token);

    dispatch(addTrackReply(response));
  };
}

export function commentReply(id, body) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const response = await client.replyTrack(id, { body }, token);

    dispatch(addReplyComment(response, id));
  };
}
