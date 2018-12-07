import tracksModule from 'modules/tracks';
import tracksFixtures from 'modules/tracks/__tests__/fixtures';

import playlistsModule from 'modules/playlists';
import playlistsFixtures from 'modules/playlists/__tests__/fixtures';

import albumsModule from 'modules/albums';
import albumsFixtures from 'modules/albums/__tests__/fixtures';

import reducer from '../reducer';
import { INITIAL_STATE } from '../model';
import * as actions from '../actions';

import allReducer from '../reducer/all';
import tracksReducer from '../reducer/tracks';
import playlistsReducer from '../reducer/playlists';
import albumsReducer from '../reducer/albums';
import followersReducer from '../reducer/followers';

import fixtures from './fixtures';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('all', () => {
  const ALL_STATE = INITIAL_STATE.all;

  it('should handle ADD_USER action', () => {
    const user1 = fixtures.getUser();

    const response = fixtures.getUserResponse(user1);

    const newState = allReducer(ALL_STATE, actions.addUser(response));

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: { [user1.id]: user1 },
      byId: [user1.id],
    });

    const user2 = fixtures.getUser();

    const nextResponse = fixtures.getUserResponse(user2);

    const nextState = allReducer(newState, actions.addUser(nextResponse));

    expect(nextState).toEqual({
      ...newState,
      entities: { [user1.id]: user1, [user2.id]: user2 },
      byId: [user1.id, user2.id],
    });
  });

  it('should handle ADD_USER_FOLLOWERS action', () => {
    const user = fixtures.getUser();

    const response = fixtures.getUsersResponse();

    const newState = allReducer(
      ALL_STATE,
      actions.addUserFollowers(response, user.id),
    );

    const followers = response.data;

    expect(newState).toEqual({
      ...ALL_STATE,
      entities: {
        [followers[0].id]: followers[0],
        [followers[1].id]: followers[1],
      },
      byId: [followers[0].id, followers[1].id],
    });

    const user2 = fixtures.getUser();

    const nextResponse = fixtures.getUsersResponse();

    const nextState = allReducer(
      newState,
      actions.addUserFollowers(nextResponse, user2.id),
    );

    const nextFollowers = nextResponse.data;

    expect(nextState).toEqual({
      ...nextState,
      entities: {
        ...newState.entities,
        [nextFollowers[0].id]: nextFollowers[0],
        [nextFollowers[1].id]: nextFollowers[1],
      },
      byId: [...newState.byId, nextFollowers[0].id, nextFollowers[1].id],
    });
  });
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

  it('should handle ADD_USER_TRACKS action', () => {
    const response = tracksFixtures.getTracksResponse();

    const uid1 = fixtures.getUser().id;

    const newState = tracksReducer(
      TRACKS_STATE,
      actions.addUserTracks(response, uid1),
    );

    const tracks = tracksFixtures.getTracksFromResponse(response);

    expect(newState).toEqual([
      ...TRACKS_STATE,
      { id: uid1, trackId: tracks[0].id },
      { id: uid1, trackId: tracks[1].id },
    ]);
  });
});

describe('playlists', () => {
  const PLAYLISTS_STATE = INITIAL_STATE.playlists;

  it('should handle playlists/ADD_PLAYLIST action', () => {
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

  it('should handle ADD_USER_PLAYLISTS action', () => {
    const uid1 = '1';

    const response = playlistsFixtures.getPlaylistsResponse();

    const playlists1 = response.data;

    const newState = playlistsReducer(
      PLAYLISTS_STATE,
      actions.addUserPlaylists(response, uid1),
    );

    expect(newState).toEqual([
      ...PLAYLISTS_STATE,
      { id: uid1, playlistId: playlists1[0].id },
      { id: uid1, playlistId: playlists1[1].id },
    ]);

    const uid2 = '2';

    const nextResponse = playlistsFixtures.getPlaylistsResponse();

    const playlists2 = nextResponse.data;

    const nextState = playlistsReducer(
      newState,
      actions.addUserPlaylists(nextResponse, uid2),
    );

    expect(nextState).toEqual([
      ...newState,
      { id: uid2, playlistId: playlists2[0].id },
      { id: uid2, playlistId: playlists2[1].id },
    ]);
  });
});

describe('albums', () => {
  const ALBUMS_STATE = INITIAL_STATE.playlists;

  it('should handle albums/ADD_ALBUM', () => {
    const album = albumsFixtures.getAlbum();

    const response = albumsFixtures.getAlbumResponse(album);

    const { user } = response.data.relationships;

    const newState = albumsReducer(
      ALBUMS_STATE,
      albumsModule.actions.addAlbum(response),
    );

    expect(newState).toEqual([
      ...ALBUMS_STATE,
      { id: user.data.id, albumId: album.id },
    ]);

    const album2 = albumsFixtures.getAlbum();

    const nextResponse = albumsFixtures.getAlbumResponse(album2, user);

    const nextState = albumsReducer(
      newState,
      albumsModule.actions.addAlbum(nextResponse),
    );

    expect(nextState).toEqual([
      ...newState,
      { id: user.data.id, albumId: album2.id },
    ]);
  });

  it('should handle ADD_USER_ALBUMS action', () => {
    const uid1 = '1';

    const response = albumsFixtures.getAlbumsResponse();

    const albums1 = response.data;

    const newState = albumsReducer(
      ALBUMS_STATE,
      actions.addUserAlbums(response, uid1),
    );

    expect(newState).toEqual([
      ...ALBUMS_STATE,
      { id: uid1, albumId: albums1[0].id },
      { id: uid1, albumId: albums1[1].id },
    ]);

    const uid2 = '2';

    const nextResponse = albumsFixtures.getAlbumsResponse();

    const albums2 = nextResponse.data;

    const nextState = albumsReducer(
      newState,
      actions.addUserAlbums(nextResponse, uid2),
    );

    expect(nextState).toEqual([
      ...newState,
      { id: uid2, albumId: albums2[0].id },
      { id: uid2, albumId: albums2[1].id },
    ]);
  });
});

describe('followers', () => {
  const FOLLOWERS_STATE = INITIAL_STATE.followers;

  it('should handle ADD_FOLLOWED_USER action', () => {
    const uid1 = '1';
    const followed = '2';

    const newState = followersReducer(
      FOLLOWERS_STATE,
      actions.addFollowedUser(uid1, followed),
    );

    expect(newState).toEqual([
      ...FOLLOWERS_STATE,
      { follower: uid1, following: followed },
    ]);

    const nextFollowed = '2';

    const nextState = followersReducer(
      newState,
      actions.addFollowedUser(uid1, nextFollowed),
    );

    expect(nextState).toEqual([
      ...newState,
      { follower: uid1, following: nextFollowed },
    ]);
  });

  it('should handle REMOVE_FOLLOWED_USER action', () => {
    const uid1 = '1';

    const unfollowed1 = '1';
    const unfollowed2 = '2';

    const newState = followersReducer(
      [
        ...FOLLOWERS_STATE,
        { follower: uid1, following: unfollowed1 },
        { follower: uid1, following: unfollowed2 },
      ],
      actions.removeFollowedUser(uid1, unfollowed1),
    );

    expect(newState).toEqual([
      ...FOLLOWERS_STATE,
      { follower: uid1, following: unfollowed2 },
    ]);

    const nextState = followersReducer(
      newState,
      actions.removeFollowedUser(uid1, unfollowed2),
    );

    expect(nextState).toEqual([]);
  });
});
