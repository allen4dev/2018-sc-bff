import repliesFixtures from 'modules/replies/__tests__/fixtures';
import repliesModule from 'modules/replies';

import * as actions from '../actions';
import reducer from '../reducer';
import { INITIAL_STATE } from '../model';

import entitiesReducer from '../reducer/entities';
import repliesReducer from '../reducer/replies';

import fixtures from './fixtures';
import tracksReducer from '../reducer';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities', () => {
  const ENTITIES_STATE = INITIAL_STATE.entities;

  it('should handle an ADD_TRACK action', () => {
    const track = fixtures.getTrack();

    const response = fixtures.getTrackResponse(track);

    const nextState = entitiesReducer(
      ENTITIES_STATE,
      actions.addTrack(response),
    );

    expect(nextState).toEqual({
      ...ENTITIES_STATE,
      [response.data.id]: track,
    });

    const otherTrack = fixtures.getTrack();

    const newResponse = fixtures.getTrackResponse(otherTrack);

    const newState = entitiesReducer(nextState, actions.addTrack(newResponse));

    expect(newState).toEqual({
      ...nextState,
      [newResponse.data.id]: otherTrack,
    });
  });

  it('should handle an ACTUALIZE_TRACK action', () => {
    const track = fixtures.getTrack();

    const details = {
      title: 'Updated track title',
    };

    const response = fixtures.getTrackResponse({
      ...track,
      ...details,
    });

    const STATE = {
      [track.id]: { ...track },
    };

    const nextState = entitiesReducer(STATE, actions.actualizeTrack(response));

    expect(nextState).toEqual({
      ...STATE,
      [track.id]: {
        ...track,
        title: details.title,
      },
    });
  });
});

describe('replies', () => {
  const REPLIES_STATE = INITIAL_STATE.replies;

  it('should handle replies/ADD_REPLY action', () => {
    const reply = repliesFixtures.getReply();

    const response = repliesFixtures.getReplyResponse(reply);

    const { track } = response.data.relationships;

    const newState = repliesReducer(
      REPLIES_STATE,
      repliesModule.actions.addReply(response),
    );

    expect(newState).toEqual({
      ...REPLIES_STATE,
      [track.data.id]: [reply.id],
    });

    const newReply = repliesFixtures.getReply();

    const nextResponse = repliesFixtures.getReplyResponse(
      newReply,
      null,
      track,
    );

    const nextState = repliesReducer(
      newState,
      repliesModule.actions.addReply(nextResponse),
    );

    expect(nextState).toEqual({
      ...newState,
      [track.data.id]: [reply.id, newReply.id],
    });
  });

  it('should handle replies/ADD_REPLIES action', () => {
    const track = fixtures.getTrack();

    const response = repliesFixtures.getRepliesResponse();
    const details = { id: track.id };

    const newState = repliesReducer(
      REPLIES_STATE,
      repliesModule.actions.addReplies(response, details),
    );

    expect(newState).toEqual({
      ...REPLIES_STATE,
      [track.id]: response.data.map(reply => reply.id),
    });

    const nextResponse = repliesFixtures.getRepliesResponse();

    const nextState = repliesReducer(
      newState,
      repliesModule.actions.addReplies(nextResponse, details),
    );

    expect(nextState).toEqual({
      ...newState,
      [track.id]: [
        ...newState[track.id],
        ...nextResponse.data.map(reply => reply.id),
      ],
    });
  });
});
