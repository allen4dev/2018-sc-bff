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
      },
    };

    expect(actions.addReply(response)).toEqual(expectedAction);
  });
});
