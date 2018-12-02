import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import tracksFixtures from 'modules/tracks/__tests__/fixtures';

import fixtures from './fixtures';

describe('action creators', () => {
  it('should create an action to add a playlist', () => {
    const playlist = fixtures.getPlaylist();

    const response = fixtures.getPlaylistResponse(playlist);

    const { user } = response.data.relationships;

    const expectedAction = {
      type: actionTypes.ADD_PLAYLIST,
      payload: {
        id: playlist.id,
        playlist: {
          id: playlist.id,
          ...response.data.attributes,
        },
        userId: user.data.id,
      },
    };

    expect(actions.addPlaylist(response)).toEqual(expectedAction);
  });

  it('should create an action to actualize a playlist', () => {
    const playlist = fixtures.getPlaylist();
    const response = fixtures.getPlaylistResponse(playlist);

    const expectedAction = {
      type: actionTypes.ACTUALIZE_PLAYLIST,
      payload: {
        id: playlist.id,
        updated: { ...playlist },
      },
    };

    expect(actions.actualizePlaylist(response)).toEqual(expectedAction);
  });

  it('should create an action to add a track to a playlist', () => {
    const playlist = fixtures.getPlaylist();
    const track = tracksFixtures.getTrack();

    const response = tracksFixtures.getTrackResponse(track);

    const details = {
      id: playlist.id,
      trackId: track.id,
    };

    const expectedAction = {
      type: actionTypes.ADD_TRACK,
      payload: details,
    };

    expect(actions.addTrack(response, details)).toEqual(expectedAction);
  });
});
