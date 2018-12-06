import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import albumsFixtures from 'modules/albums/__tests__/fixtures';
import playlistsFixtures from 'modules/playlists/__tests__/fixtures';
import tracksFixtures from 'modules/tracks/__tests__/fixtures';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

import { INITIAL_STATE } from '../model';

import fixtures from './fixtures';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('playlists module async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create an ADD_USER action after a user creates an album', async () => {
    const user = fixtures.getUser();

    const response = fixtures.getUserResponse(user);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_USER,
        payload: {
          user,
          id: user.id,
        },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(actions.fetchUser(user.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ADD_USER_TRACKS action after a user fetchs the tracks from a user', async () => {
    const user = fixtures.getUser();

    const response = tracksFixtures.getTracksResponse();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_USER_TRACKS,
        payload: {
          tracks: response.data,
          id: user.id,
        },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(actions.fetchUserTracks(user.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ADD_USER_PLAYLISTS action after a user fetchs the playlists from a user', async () => {
    const user = fixtures.getUser();

    const response = playlistsFixtures.getPlaylistsResponse();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_USER_PLAYLISTS,
        payload: {
          playlists: response.data,
          id: user.id,
        },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(actions.fetchUserPlaylists(user.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ADD_USER_ALBUMS action after a user fetchs the albums from a user', async () => {
    const user = fixtures.getUser();

    const response = albumsFixtures.getAlbumsResponse();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_USER_ALBUMS,
        payload: {
          albums: response.data,
          id: user.id,
        },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(actions.fetchUserAlbums(user.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ADD_FOLLOWED_USER action after a user follows other user', async () => {
    const user = fixtures.getUser();
    const followed = fixtures.getUser();

    const response = fixtures.getUserResponse(followed);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 200, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_FOLLOWED_USER,
        payload: { id: user.id, followed: followed.id },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.addFollowedUser(user.id, followed.id));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
