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

  it('should create an ADD_ALBUM action after a user creates an album', async () => {
    const album = fixtures.getAlbum();

    const response = fixtures.getAlbumResponse(album);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({ status: 201, response });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_ALBUM,
        payload: {
          id: album.id,
          album: { ...album },
          userId: response.data.relationships.user.data.id,
        },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      auth: { token: 'xxx.xxx.xxx' },
    });

    const details = { ...response.data.attributes };

    await store.dispatch(actions.createAlbum(details));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
