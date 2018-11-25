import tracksModule from 'modules/tracks';

import tracksFixtures from 'modules/tracks/__tests__/fixtures';

import reducer from '../reducer';
import { INITIAL_STATE } from '../model';

import tracksReducer from '../reducer/tracks';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('users - tracks', () => {
  const TRACKS_STATE = INITIAL_STATE.tracks;

  it('should handle tracks/ADD_TRACK action', () => {
    const track = tracksFixtures.getTrack();

    const response = tracksFixtures.getTrackResponse(track);

    const { user } = response.data.relationships;

    const newState = tracksReducer(
      TRACKS_STATE,
      tracksModule.actions.addTrack(response),
    );

    expect(newState).toEqual({
      ...TRACKS_STATE,
      [user.data.id]: [track.id],
    });

    const otherTrack = tracksFixtures.getTrack();

    const newResponse = tracksFixtures.getTrackResponse(otherTrack, user);

    const nextState = tracksReducer(
      newState,
      tracksModule.actions.addTrack(newResponse),
    );

    expect(nextState).toEqual({
      ...newState,
      [user.data.id]: [track.id, otherTrack.id],
    });
  });
});
