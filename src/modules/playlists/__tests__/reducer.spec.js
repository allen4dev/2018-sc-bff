import reducer from '../reducer';
import { INITIAL_STATE } from '../model';

import * as actions from '../actions';

import allReducer from '../reducer/all';
import tracksReducer from '../reducer/tracks';

import fixtures from './fixtures';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('all', () => {
  const ALL_STATE = INITIAL_STATE.all;

  it('should handle ADD_PLAYLIST action', () => {
    const playlist1 = fixtures.getPlaylist();

    const response = fixtures.getPlaylistResponse(playlist1);

    const newState = allReducer(ALL_STATE, actions.addPlaylist(response));

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: {
        [playlist1.id]: { ...playlist1 },
      },
      byId: [playlist1.id],
    });

    const playlist2 = fixtures.getPlaylist();

    const nextResponse = fixtures.getPlaylistResponse(playlist2);

    const nextState = allReducer(newState, actions.addPlaylist(nextResponse));

    expect(nextState).toEqual({
      ...newState,
      entities: {
        [playlist1.id]: { ...playlist1 },
        [playlist2.id]: { ...playlist2 },
      },
      byId: [playlist1.id, playlist2.id],
    });
  });

  it('should handle ACTUALIZE_PLAYLIST action', () => {
    const playlist = fixtures.getPlaylist();

    const details = { title: 'Updated playlist title' };

    const updated = { ...playlist, ...details };

    const response = fixtures.getPlaylistResponse(updated);

    const newState = allReducer(
      {
        ...ALL_STATE,
        entities: { [playlist.id]: { ...playlist } },
      },
      actions.actualizePlaylist(response),
    );

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: { [playlist.id]: updated },
    });
  });
});

describe('tracks', () => {
  const TRACKS_STATE = INITIAL_STATE.tracks;

  it('should handle ADD_TRACK action', () => {
    const playlist = fixtures.getPlaylist();
    const track = { id: '123', title: 'Track title' };

    const details = { id: playlist.id, trackId: track.id };

    const newState = tracksReducer(
      TRACKS_STATE,
      actions.addTrack(null, details),
    );

    expect(newState).toEqual([
      ...TRACKS_STATE,
      { id: playlist.id, trackId: track.id },
    ]);
  });
});
