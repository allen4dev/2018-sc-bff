import tracksFixtures from 'modules/tracks/__tests__/fixtures';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import fixtures from './fixtures';

describe('action creators', () => {
  it('should create an action to add a track reply', () => {
    const reply = fixtures.getReply();
    const response = fixtures.getReplyResponse(reply);

    const expectedAction = {
      type: actionTypes.ADD_TRACK_REPLY,
      payload: {
        id: reply.id,
        reply: {
          id: reply.id,
          ...reply,
        },
        repliedId: response.data.relationships.track.data.id,
      },
    };

    expect(actions.addTrackReply(response)).toEqual(expectedAction);
  });

  it('should create an action to add a list of track replies', () => {
    const track = tracksFixtures.getTrack();

    const details = { id: track.id };

    const response = fixtures.getRepliesResponse();

    const expectedAction = {
      type: actionTypes.ADD_TRACK_REPLIES,
      payload: {
        repliedId: track.id,
        replies: response.data,
      },
    };

    expect(actions.addTrackReplies(response, details)).toEqual(expectedAction);
  });
});
