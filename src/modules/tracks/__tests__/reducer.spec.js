import repliesFixtures from 'modules/replies/__tests__/fixtures';
import repliesModule from 'modules/replies';

import * as actions from '../actions';
import reducer from '../reducer';
import { INITIAL_STATE } from '../model';

import allReducer from '../reducer/all';

// import entitiesReducer from '../reducer/entities';
// import byIdReducer from '../reducer/byId';
import repliesReducer from '../reducer/replies';

import fixtures from './fixtures';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('all', () => {
  const ALL_STATE = INITIAL_STATE.all;

  it('should handle ADD_TRACK action', () => {
    const track = fixtures.getTrack();

    const response = fixtures.getTrackResponse(track);

    const newState = allReducer(ALL_STATE, actions.addTrack(response));

    expect(newState).toEqual({
      ...ALL_STATE,
      byId: [track.id],
      entities: {
        [track.id]: { ...track },
      },
    });

    const track2 = fixtures.getTrack();

    const nextResponse = fixtures.getTrackResponse(track2);

    const nextState = allReducer(newState, actions.addTrack(nextResponse));

    expect(nextState).toEqual({
      ...newState,
      byId: [track.id, track2.id],
      entities: {
        [track.id]: { ...track },
        [track2.id]: { ...track2 },
      },
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
      ...INITIAL_STATE.all,
      entities: {
        [track.id]: { ...track },
      },
    };

    const nextState = allReducer(STATE, actions.actualizeTrack(response));

    expect(nextState).toEqual({
      ...STATE,
      entities: {
        [track.id]: {
          ...track,
          title: details.title,
        },
      },
    });
  });
});

// describe('entities', () => {
//   it('should handle an ACTUALIZE_TRACK action', () => {
//     const track = fixtures.getTrack();

//     const details = {
//       title: 'Updated track title',
//     };

//     const response = fixtures.getTrackResponse({
//       ...track,
//       ...details,
//     });

//     const STATE = {
//       [track.id]: { ...track },
//     };

//     const nextState = entitiesReducer(STATE, actions.actualizeTrack(response));

//     expect(nextState).toEqual({
//       ...STATE,
//       [track.id]: {
//         ...track,
//         title: details.title,
//       },
//     });
//   });

//   it('should handle REMOVE_TRACK action', () => {
//     const track1 = fixtures.getTrack();
//     const track2 = fixtures.getTrack();

//     const deletedTrack = { id: track1.id };

//     const newState = entitiesReducer(
//       {
//         ...ENTITIES_STATE,
//         [track1.id]: { ...track1, id: track1.id },
//         [track2.id]: { ...track2, id: track2.id },
//       },
//       actions.removeTrack(undefined, deletedTrack),
//     );

//     expect(newState).toEqual({
//       [track2.id]: { ...track2, id: track2.id },
//     });
//   });
// });

// describe('byId', () => {
//   const BY_ID_STATE = INITIAL_STATE.byId;

//   it('should handle ADD_TRACK action', () => {
//     const track = fixtures.getTrack();

//     const response = fixtures.getTrackResponse(track);

//     const newState = byIdReducer(BY_ID_STATE, actions.addTrack(response));

//     expect(newState).toEqual([...BY_ID_STATE, track.id]);

//     const track2 = fixtures.getTrack();

//     const nextResponse = fixtures.getTrackResponse(track2);

//     const nextState = byIdReducer(newState, actions.addTrack(nextResponse));

//     expect(nextState).toEqual([...newState, track2.id]);
//   });

//   it('should handle REMOVE_TRACK action', () => {
//     const track1 = fixtures.getTrack();
//     const track2 = fixtures.getTrack();

//     const newState = byIdReducer(
//       [...BY_ID_STATE, track1.id, track2.id],
//       actions.removeTrack(undefined, { id: track1.id }),
//     );

//     expect(newState).toEqual([track2.id]);
//   });
// });

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

    expect(newState).toEqual([
      ...REPLIES_STATE,
      { id: track.data.id, replyId: reply.id },
    ]);

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

    expect(nextState).toEqual([
      ...newState,
      { id: track.data.id, replyId: newReply.id },
    ]);
  });

  it('should handle replies/ADD_REPLIES action', () => {
    const track = fixtures.getTrack();

    const response = repliesFixtures.getRepliesResponse();
    const details = { id: track.id };

    const newState = repliesReducer(
      REPLIES_STATE,
      repliesModule.actions.addReplies(response, details),
    );

    expect(newState).toEqual([
      ...REPLIES_STATE,
      ...response.data.map(reply => ({ id: track.id, replyId: reply.id })),
    ]);

    const nextResponse = repliesFixtures.getRepliesResponse();

    const nextState = repliesReducer(
      newState,
      repliesModule.actions.addReplies(nextResponse, details),
    );

    expect(nextState).toEqual([
      ...newState,
      ...nextResponse.data.map(reply => ({ id: track.id, replyId: reply.id })),
    ]);
  });
});
