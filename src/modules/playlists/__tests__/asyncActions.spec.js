import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

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

  it('should create an ADD_PLAYLIST action after a user creates a playlist', async () => {
    const playlist = fixtures.getPlaylist();

    const response = fixtures.getPlaylistResponse(playlist);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 201,
        response,
      });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_PLAYLIST,
        payload: {
          id: playlist.id,
          playlist: { ...playlist },
          userId: response.data.relationships.user.data.id,
        },
      },
    ];

    const token = 'xxx.xxx.xxx';

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token },
    });

    const details = { ...response.data.attributes };

    await store.dispatch(actions.createPlaylist(details));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ADD_PLAYLIST action after a user fetchs a playlist', async () => {
    const playlist = fixtures.getPlaylist();

    const response = fixtures.getPlaylistResponse(playlist);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response,
      });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_PLAYLIST,
        payload: {
          id: playlist.id,
          playlist: { ...playlist },
          userId: response.data.relationships.user.data.id,
        },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(actions.fetchPlaylist(playlist.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ACTUALIZE_PLAYLIST action after a user updates a playlist', async () => {
    const playlist = fixtures.getPlaylist();

    const updated = { ...playlist, title: 'Updated playlist title' };

    const response = fixtures.getPlaylistResponse(updated);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response,
      });
    });

    const expectedActions = [
      {
        type: actionTypes.ACTUALIZE_PLAYLIST,
        payload: {
          updated,
          id: updated.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token: 'xxx.xxx.xxx' },
    });

    const details = { title: updated.title };

    await store.dispatch(actions.updatePlaylist(playlist.id, details));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an ADD_PLAYLIST_TRACK action after a user adds a track to his playlist', async () => {
    const playlist = fixtures.getPlaylist();
    const track = tracksFixtures.getTrack();

    const response = tracksFixtures.getTrackResponse(track);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response,
      });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_PLAYLIST_TRACK,
        payload: {
          id: playlist.id,
          trackId: track.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token: 'xxx.xxx.xxx' },
    });

    await store.dispatch(actions.addPlaylistTrack(playlist.id, track.id));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
