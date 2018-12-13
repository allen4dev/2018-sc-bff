import tracksFixtures from 'modules/tracks/__tests__/fixtures';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

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

  it('should create an action to add a playlist track', () => {
    const playlist = fixtures.getPlaylist();
    const track = tracksFixtures.getTrack();

    const details = {
      id: playlist.id,
      trackId: track.id,
    };

    const expectedAction = {
      type: actionTypes.ADD_PLAYLIST_TRACK,
      payload: details,
    };

    expect(actions.addTrack(details)).toEqual(expectedAction);
  });

  it('should create an action to remove playlist track', () => {
    const playlist = fixtures.getPlaylist();
    const track = tracksFixtures.getTrack();

    const details = {
      id: playlist.id,
      trackId: track.id,
    };

    const expectedAction = {
      type: actionTypes.REMOVE_PLAYLIST_TRACK,
      payload: details,
    };

    expect(actions.removeTrack(details)).toEqual(expectedAction);
  });

  it('should create an action to remove a track', () => {
    const playlist = fixtures.getPlaylist();

    const expectedAction = {
      type: actionTypes.REMOVE_PLAYLIST,
      payload: {
        id: playlist.id,
      },
    };

    expect(actions.removePlaylist(playlist.id)).toEqual(expectedAction);
  });

  it('should create an action to add a favorited playlist', () => {
    const playlist = fixtures.getPlaylist();
    const user = { id: '123' };

    const expectedAction = {
      type: actionTypes.ADD_FAVORITED_PLAYLIST,
      payload: {
        id: playlist.id,
        userId: user.id,
      },
    };

    expect(actions.addFavoritedPlaylist(playlist.id, user.id)).toEqual(
      expectedAction,
    );
  });
});
