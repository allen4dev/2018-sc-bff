import tracksFixtures from 'modules/tracks/__tests__/fixtures';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import fixtures from './fixtures';

describe('replies - action', () => {
  describe('action creators', () => {
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

    it('should create an action to add a list of replies', () => {
      const track = tracksFixtures.getTrack();

      const details = { id: track.id };

      const response = fixtures.getRepliesResponse();

      const expectedAction = {
        type: actionTypes.ADD_REPLIES,
        payload: {
          trackId: track.id,
          replies: response.data,
        },
      };

      expect(actions.addReplies(response, details)).toEqual(expectedAction);
    });
  });
});
