import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

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
});
