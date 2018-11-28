import reducer from '../reducer';
import { INITIAL_STATE } from '../model';

import entitiesReducer from '../reducer/entities';
import fixtures from './fixtures';

import * as actions from '../actions';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('replies - reducer - entities', () => {
  const ENTITIES_STATE = INITIAL_STATE.entities;

  it('should handle ADD_REPLY action', () => {
    const reply = fixtures.getReply();

    const response = fixtures.getReplyResponse(reply);

    const { user } = response.data.relationships;

    const newState = entitiesReducer(
      ENTITIES_STATE,
      actions.addReply(response),
    );

    expect(newState).toEqual({
      ...ENTITIES_STATE,
      [reply.id]: reply,
    });

    const newReply = fixtures.getReply();

    const nextResponse = fixtures.getReplyResponse(newReply, user);

    const nextState = entitiesReducer(newState, actions.addReply(nextResponse));

    expect(nextState).toEqual({
      ...nextState,
      [newReply.id]: newReply,
    });
  });
});
