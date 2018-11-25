import tracksModule from 'modules/tracks';

import reducer from '../reducer';
import { INITIAL_STATE } from '../model';

import tracksReducer from '../reducer/tracks';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('users - tracks', () => {
  const TRACKS_STATE = INITIAL_STATE.tracks;

  it('should handle tracks/ADD_TRACK action', () => {
    const track = {
      id: '1',
      title: 'Track name',
    };

    const response = {
      data: {
        type: 'tracks',
        id: track.id,
        attributes: { title: track.title },
      },
    };

    const newState = tracksReducer(
      TRACKS_STATE,
      tracksModule.actions.addTrack(response),
    );

    expect(newState).toEqual({
      ...TRACKS_STATE,
      [track.id]: track,
    });

    const otherTrack = {
      id: '2',
      title: 'other track title',
    };

    const newResponse = {
      data: {
        type: 'tracks',
        id: otherTrack.id,
        attributes: { title: otherTrack.title },
      },
    };

    const nextState = tracksReducer(
      newState,
      tracksModule.actions.addTrack(newResponse),
    );

    expect(nextState).toEqual({
      ...newState,
      [otherTrack.id]: otherTrack,
    });
  });
});
