import { API_REQUEST } from 'middlewares/api/actionTypes';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import fixtures from './fixtures';

describe('replies - action creators', () => {
  it('should create an action to add a reply', () => {
    const reply = fixtures.getReply();
    const response = fixtures.getReplyResponse(reply);

    const expectedAction = {
      type: actionTypes.ADD_REPLY,
      payload: {
        id: reply.id,
        reply: {
          id: reply.id,
          ...reply,
        },
        trackId: response.data.relationships.track.data.id,
      },
    };

    expect(actions.addReply(response)).toEqual(expectedAction);
  });

  it('should create an api/API_REQUEST action to reply a track', () => {
    const trackId = '1';
    const body = 'Horrible track';

    const expectedAction = {
      type: API_REQUEST,
      payload: {
        success: actions.addReply,
      },
      meta: {
        details: {
          id: trackId,
          input: { body },
        },
        clientMethod: 'replyTrack',
      },
    };

    expect(actions.replyTrack(trackId, body)).toEqual(expectedAction);
  });
});
