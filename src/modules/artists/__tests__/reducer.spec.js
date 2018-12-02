import tracksModule from 'modules/tracks';

import tracksFixtures from 'modules/tracks/__tests__/fixtures';

import playlistsModule from 'modules/playlists';
import playlistsFixtures from 'modules/playlists/__tests__/fixtures';

import reducer from '../reducer';
import { INITIAL_STATE } from '../model';

import tracksReducer from '../reducer/tracks';
import playlistsReducer from '../reducer/playlists';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('tracks', () => {
  const TRACKS_STATE = INITIAL_STATE.tracks;

  it('should handle tracks/ADD_TRACK action', () => {
    const track = tracksFixtures.getTrack();

    const response = tracksFixtures.getTrackResponse(track);

    const { user } = response.data.relationships;

    const newState = tracksReducer(
      TRACKS_STATE,
      tracksModule.actions.addTrack(response),
    );

    expect(newState).toEqual([
      ...TRACKS_STATE,
      { id: user.data.id, trackId: track.id },
    ]);

    const otherTrack = tracksFixtures.getTrack();

    const newResponse = tracksFixtures.getTrackResponse(otherTrack, user);

    const nextState = tracksReducer(
      newState,
      tracksModule.actions.addTrack(newResponse),
    );

    expect(nextState).toEqual([
      ...newState,
      { id: user.data.id, trackId: otherTrack.id },
    ]);
  });

  it('should handle tracks/REMOVE_TRACK action', () => {
    const track1 = tracksFixtures.getTrack();
    const track2 = tracksFixtures.getTrack();

    const user1 = '1';
    const user2 = '2';

    const STATE = [
      ...TRACKS_STATE,
      { id: user1, trackId: track1.id },
      { id: user2, trackId: track2.id },
    ];

    const newState = tracksReducer(
      STATE,
      tracksModule.actions.removeTrack(undefined, { id: track1.id }),
    );

    expect(newState).toEqual([{ id: user2, trackId: track2.id }]);

    const nextState = tracksReducer(
      newState,
      tracksModule.actions.removeTrack(undefined, { id: track2.id }),
    );

    expect(nextState).toEqual([]);
  });
});

describe('playlists', () => {
  const PLAYLISTS_STATE = INITIAL_STATE.playlists;

  it('should handle playlists/ADD_PLAYLIST', () => {
    const playlist = playlistsFixtures.getPlaylist();

    const response = playlistsFixtures.getPlaylistResponse(playlist);

    const { user } = response.data.relationships;

    const newState = playlistsReducer(
      PLAYLISTS_STATE,
      playlistsModule.actions.addPlaylist(response),
    );

    expect(newState).toEqual([
      ...PLAYLISTS_STATE,
      { id: user.data.id, playlistId: playlist.id },
    ]);

    const playlist2 = playlistsFixtures.getPlaylist();

    const nextResponse = playlistsFixtures.getPlaylistResponse(playlist2, user);

    const nextState = playlistsReducer(
      newState,
      playlistsModule.actions.addPlaylist(nextResponse),
    );

    expect(nextState).toEqual([
      ...newState,
      { id: user.data.id, playlistId: playlist2.id },
    ]);
  });
});
