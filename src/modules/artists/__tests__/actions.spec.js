import albumsFixtures from 'modules/albums/__tests__/fixtures';
import playlistsFixtures from 'modules/playlists/__tests__/fixtures';
import tracksFixtures from 'modules/tracks/__tests__/fixtures';

import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

import fixtures from './fixtures';

describe('users - action creators', () => {
  it('should create an action to add a user', () => {
    const user = fixtures.getUser();

    const response = fixtures.getUserResponse(user);

    const expectedAction = {
      type: actionTypes.ADD_USER,
      payload: {
        user,
        id: user.id,
      },
    };

    expect(actions.addUser(response)).toEqual(expectedAction);
  });

  it('should create an action to add a user tracks', () => {
    const userId = '1';

    const response = tracksFixtures.getTracksResponse();

    const expectedAction = {
      type: actionTypes.ADD_USER_TRACKS,
      payload: {
        tracks: response.data,
        id: userId,
      },
    };

    expect(actions.addUserTracks(response, userId)).toEqual(expectedAction);
  });

  it('should create an action to add a user playlists', () => {
    const userId = '1';

    const response = playlistsFixtures.getPlaylistsResponse();

    const expectedAction = {
      type: actionTypes.ADD_USER_PLAYLISTS,
      payload: {
        playlists: response.data,
        id: userId,
      },
    };

    expect(actions.addUserPlaylists(response, userId)).toEqual(expectedAction);
  });

  it('should create an action to add a user albums', () => {
    const userId = '1';

    const response = albumsFixtures.getAlbumsResponse();

    const expectedAction = {
      type: actionTypes.ADD_USER_ALBUMS,
      payload: {
        albums: response.data,
        id: userId,
      },
    };

    expect(actions.addUserAlbums(response, userId)).toEqual(expectedAction);
  });

  it('should create an action to follow a user', () => {
    const uid = '1';
    const followedId = '2';

    const expectedAction = {
      type: actionTypes.ADD_FOLLOWED_USER,
      payload: {
        id: uid,
        followed: followedId,
      },
    };

    expect(actions.addFollowedUser(uid, followedId)).toEqual(expectedAction);
  });

  it('should create an action to unfollow a user', () => {
    const uid = '1';
    const unfollowedId = '2';

    const expectedAction = {
      type: actionTypes.REMOVE_FOLLOWED_USER,
      payload: { id: uid, unfollowed: unfollowedId },
    };

    expect(actions.removeFollowedUser(uid, unfollowedId)).toEqual(
      expectedAction,
    );
  });

  it('should create an action to add a user followers', () => {
    const user = fixtures.getUser();

    const response = fixtures.getUsersResponse();

    const expectedAction = {
      type: actionTypes.ADD_USER_FOLLOWERS,
      payload: {
        users: response.data,
        id: user.id,
      },
    };

    expect(actions.addUserFollowers(response, user.id)).toEqual(expectedAction);
  });

  it('should create an action to add a user followings', () => {
    const user = fixtures.getUser();

    const response = fixtures.getUsersResponse();

    const expectedAction = {
      type: actionTypes.ADD_USER_FOLLOWINGS,
      payload: { users: response.data, id: user.id },
    };

    expect(actions.addUserFollowings(response, user.id)).toEqual(
      expectedAction,
    );
  });

  it('should create an action to remove a user', () => {
    const id = '1';

    const expectedAction = {
      type: actionTypes.REMOVE_USER,
      payload: { id },
    };

    expect(actions.removeUser(id)).toEqual(expectedAction);
  });
});
